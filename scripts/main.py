import gzip
import math
import shutil
from configparser import ConfigParser
from tqdm import tqdm
from datetime import datetime
import psycopg2
import pandas as pd
from jinja2 import Template
import os
import xmlformatter


# Cargando las configuración del fichero para la BD
def config(archivo='.env', seccion='postgresql'):
    # Crear el parser
    parser = ConfigParser()
    # Leyendo el archivo
    parser.read(archivo)
    # Obtener la sección de conexión a la base de datos
    db = {}
    if parser.has_section(seccion):
        params = parser.items(seccion)
        for param in params:
            # Asignar valores de la BD
            db[param[0]] = param[1]
        return db
    else:
        raise Exception('Secccion {0} no encontrada en el archivo {1}'.format(seccion, archivo))


def crear_sitemap(list_of_urls, tipo, limite):
    list_of_urls.loc[:, 'name'] = ''

    new_df = [list_of_urls[i:i + limite] for i in range(0, list_of_urls.shape[0], limite)]

    for i, v in enumerate(new_df):
        v.loc[:, 'name'] = str(v.iloc[0, 1]) + str(i)

    sitemap_template = '''<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            {% for page in pages %}
            <url>
                <loc>{{page[1]|safe}}</loc>
                <lastmod>{{page[3]}}</lastmod>
                <changefreq>{{page[4]}}</changefreq>
                <priority>{{page[5]}}</priority>        
            </url>
            {% endfor %}
        </urlset>'''

    template = Template(sitemap_template)

    lastmod_date = datetime.now().strftime('%Y-%m-%d')

    for i in tqdm(new_df, desc=f"Generando sitemaps de {tipo}"):  # For each URL in the list of URLs ...
        i.loc[:, 'lastmod'] = lastmod_date  # ... add Lastmod date
        i.loc[:, 'changefreq'] = 'never'  # ... add changefreq
        i.loc[:, 'priority'] = '1.0'  # ... add priority

        sitemap_output = template.render(pages=i.itertuples())

        filename = f"sitemap/sitemap-{tipo}-{str(i.iloc[0, 1])}.xml"
        if not os.path.exists("sitemap"):
            os.makedirs("sitemap")

        f = gzip.open(filename + '.gz', 'wt')
        f.write(sitemap_output)
        f.close()


def conexion_producto(cur, limite):
    # Ejecución de una consulta para obtener las rutas amigables de los productos
    print('Obteniendo las url amigables para productos')
    sql = 'select product_id, title from url_amigable_productos where status > 0;'
    df = pd.read_sql(sql, cur)
    tqdm.pandas(desc="Descargando los productos")
    df.progress_apply(lambda x: x)

    df['url'] = "https://kiero.co/detalle/" + df['product_id'].apply(str) + "_" + df['title'] + "/"
    crear_sitemap(df[['url']], 'producto', limite)
    return df.shape[0]


def conexion_categoria(cur, limite):
    # Ejecución de una consulta para obtener las rutas amigables de los productos
    print('Obteniendo las url amigables para categorias')
    sql = 'select replace from url_amigable_categoria;'
    df = pd.read_sql(sql, cur)
    tqdm.pandas(desc="Descargando las categorias")
    df.progress_apply(lambda x: x)
    df['url'] = "https://kiero.co/categoria/" + df['replace'] + "/"
    crear_sitemap(df[['url']], 'categoria', limite)
    return df.shape[0]


# Para obtener y trabajar los datos de la base de datos
def conectar():
    # Inicializando la conexion
    conexion = None
    try:
        # Lectura de los parámetros de conexion
        print("Cargando configurancion")
        params_db = config()
        params = config(seccion='configuracion')
        limite = int(int(params['limite']) if params['limite'] is not None else 1000)
        print("Limite de URL defino con ", limite)

        # Conexion al servidor de PostgreSQL
        print('Conectando a la base de datos PostgreSQL...')
        conexion = psycopg2.connect(**params_db)

        # Limpiando las carpetas del sitemaps
        if os.path.exists("sitemap"):
            shutil.rmtree("sitemap")

        tamano_categoria = conexion_categoria(conexion, limite)
        tamano_producto = conexion_producto(conexion, limite)

        print("Cantidad de URL de productos ", tamano_producto)
        print("Cantidad de URL de categorias ", tamano_categoria)

        # Creando fichero index
        print("Generando el index del sitemap-index.xml")
        xml = "<?xml version='1.0' encoding='UTF-8'?>" + "<sitemapindex xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>"
        lastmod_date = datetime.now().strftime('%Y-%m-%d')
        for i in tqdm(range(math.ceil(tamano_producto / limite)), desc='Agregando el indice del producto'):
            xml += f'''
            <sitemap>
               <loc>https://www.kiero.co/sitemap/sitemap-producto-{i}.xml.gz</loc>
		        <lastmod>{lastmod_date}</lastmod>
            </sitemap>'''
        for i in tqdm(range(math.ceil(tamano_categoria / limite)), desc='Agregando el indice del la categoría'):
            xml += f'''
                    <sitemap>
                       <loc>https://www.kiero.co/sitemap/sitemap-categoria-{i}.xml.gz</loc>
        		        <lastmod>{lastmod_date}</lastmod>
                    </sitemap>'''
        xml += '</sitemapindex>'

        formatter = xmlformatter.Formatter(indent="1", indent_char="\t", encoding_output="UTF-8", preserve=["literal"])
        xml = formatter.format_string(xml)
        filename = f"sitemap/sitemap-index.xml"
        if not os.path.exists("sitemap"):
            os.makedirs("sitemap")
        # Write the File to Your Working Folder
        print("Guardando todos los indices")
        with open(filename, 'wb') as f:
            f.write(xml)
            f.close()

        # Cierre de la comunicación con PostgreSQL
        conexion.cursor().close()
        print("Cerrando conexión al servidor")

    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conexion is not None:
            conexion.close()
            print('Conexión finalizada.')


if __name__ == '__main__':
    conectar()
