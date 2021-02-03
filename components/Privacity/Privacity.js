import React, { Component } from "react";
import "./Privacity.css";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Link from "next/link";
class Privacity extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="privacity-wrap-content">
          <div className="privacy_container">
            <div>
              <h1 className="privacy_title">
                Política de privacidad, manejo de información y datos personales
              </h1>
            </div>
            <div className="privacy_information">
              <p>
                Todos los usuarios que acceden a la página web www.kiero.co
                deben saber cuál es el tratamiento y protección que Kiero Group
                le da a los datos personales y cómo cada usuario puede conocer,
                actualizar y rectificar las informaciones dadas y recogidas por
                Kiero Group.
              </p>
              <p>
                El uso de la información personal se hace solamente bajo los
                términos previstos en esta Política de Privacidad en la cual
                mantendremos la información durante el tiempo que nos sea
                requerido por la ley o debido a la relevancia de los propios
                fines para los que fueron recopilados.
              </p>
              <p>
                Todos los usuarios pueden visitar el sitio y navegar sin tener
                que proporcionar datos personales, durante la visita al sitio,
                cada usuario permanecerá anónimo y en ningún momento podremos
                identificarlo, a menos que tenga una cuenta e inicie sesión con
                su nombre de usuario y contraseña.
              </p>
              <p>
                Este acuerdo pretende garantizar la reserva de información y la
                seguridad sobre el tratamiento que se dará a la misma, a todos
                los clientes, proveedores, empleados, de quienes Kiero Group ha
                obtenido información y datos personales, conforme la ley de
                Habeas Data.
              </p>
              <p>
                <h3 className="pregunta">
                  FINALIDAD Y MANEJO DE LA INFORMACIÓN
                </h3>
                Kiero podrá transferir o transmitir los datos personales a
                compañías que hagan parte de su grupo empresarial, esto es a
                compañías matrices, filiales o subsidiarias.
              </p>
              <p>
                También podemos proporcionar los datos a nuestros agentes y
                subcontratistas para que nos ayuden con cualquiera de las
                funciones como: utilizar a terceros para las entregas de
                promociones, recaudar pagos, enviar productos o tercerizar
                nuestros sistemas de servicio al cliente.{" "}
              </p>
              <p>
                Podemos intercambiar información con terceros a efectos de
                protección contra el fraude y la reducción de riesgo de crédito.
                Podemos transferir nuestras bases de datos que contienen su
                información personal si vendemos nuestro negocio o parte de
                este.
              </p>
              <p>
                A su vez podrá compartir los datos personales recolectados, con
                terceros que tengan la calidad de aliados comerciales y de
                negocio para que de manera conjunta con Kiero puedan ofrecer
                productos o servicios que permitan mejorar la oferta de valor
                destinada a los clientes de Kiero. Al margen de lo establecido
                en la presente Política de Privacidad, no podremos vender o
                divulgar sus datos personales a terceros sin obtener su
                consentimiento previo, a menos que sea necesario para los fines
                establecidos en esta Política de Privacidad o estemos obligados
                a hacerlo por ley.{" "}
              </p>
              <p>
                El Sitio puede contener publicidad de terceros y enlaces a otros
                sitios o marcos de otros sitios. Tenga en cuenta que no somos
                responsables de las prácticas de privacidad o contenido de
                dichos terceros u otros sitios, ni por cualquier tercero a quien
                se transfieran sus datos de acuerdo con nuestra Política de
                Privacidad.
              </p>

              <p>
                Teniendo en cuenta lo anterior los datos Personales serán
                utilizados por Kiero para:
              </p>
              <ol type="a">
                <li>Proveer servicios y productos requeridos.</li>
                <li>
                  Informar sobre nuevos productos o servicios que estén
                  relacionados o no, con el contratado o adquirido por el
                  Titular.
                </li>
                <li>
                  Dar cumplimiento a obligaciones contraídas con el Titular.
                </li>
                <li>Informar sobre cambios en productos o servicios.</li>
                <li>Evaluar la calidad de productos o servicios.</li>
                <li>Desarrollar actividades de mercadeo o promocionales.</li>
                <li>
                  Enviar al correo físico, electrónico, celular o dispositivo
                  móvil, - vía mensajes de texto (SMS y/o MMS) información
                  comercial, publicitaria o promocional sobre los productos y/o
                  servicios, eventos y/o promociones de tipo comercial o no de
                  estas, con el fin de impulsar, invitar, dirigir, ejecutar,
                  informar y de manera general, llevar a cabo campañas,
                  promociones o concursos de carácter comercial o publicitario.
                </li>
                <li>
                  Compartir, incluyendo la transferencia y transmisión de datos
                  personales a terceros para fines relacionados con la operación
                  de Kiero.
                </li>
                <li>
                  Realizar estudios internos sobre el cumplimiento de las
                  relaciones comerciales y estudios de mercado a todo nivel.
                </li>
                <li>
                  Responder requerimientos legales de entidades administrativas
                  y judiciales.
                </li>
                <li>
                  Compartir los datos personales recolectados con terceros que
                  tengan la calidad de aliados comerciales y/o de negocio para
                  que de manera conjunta con Kiero puedan ofrecer productos y/o
                  servicios que permitan mejorar la oferta de valor destinada a
                  los clientes de Kiero, todo lo anterior de conformidad con lo
                  dispuesto en la Ley 1581 de 2012 y su Decreto Reglamentario
                  1377 de 2013. El tratamiento de mis datos personales, podrá
                  implicar la recolección, almacenamiento, uso, circulación,
                  supresión, transmisión, transferencia y/o recepción de datos,
                  para la finalidad con que fueron suministrados.
                </li>
              </ol>
              <p>
                <h3>DEBERES DE KIERO RESPECTO A LOS TITULARES DE LOS DATOS</h3>
                Kiero Group reconoce que los datos personales son propiedad de
                los usuarios y que solamente ellos pueden decidir sobre estos,
                por lo cual se hará uso exclusivo de la información en aquellas
                finalidades para las que se ha facultado en los términos de la
                ley se asumen los siguientes deberes:
              </p>
              <ol type="1">
                <li>
                  Se debe obtener autorización expresa por parte del titular de
                  los datos y buscar el medio por el cual dicha autorización sea
                  expresa.
                </li>
                <li>
                  Se deberá informar de manera clara y expresa a todas las
                  personas de quienes se obtenga datos el tratamiento al cual
                  serán sometidos los mismos y la finalidad de dicho
                  tratamiento. A información puede darse por medio de mensajes
                  de texto, formatos físicos, un sitio web, entre otros.
                </li>
                <li>
                  Kiero debe informar a los titulares de los datos para cada
                  caso. El carácter facultativo de responder y otorgar la
                  respectiva información solicitada.
                </li>
                <li>
                  En todos los casos en los que se recopilen datos se deberán
                  informar los derechos que tienen dichos titulares sobre los
                  datos proporcionados.
                </li>
                <li>
                  Informar identificación, dirección física o electrónica de la
                  persona o área que tendrá la calidad de responsable del
                  tratamiento.
                </li>
                <li>
                  Garantizar al titular de la información, el pleno y efectivo
                  derecho al Hábeas Data y de petición, es decir la posibilidad
                  de conocer la información que de él exista en el banco de
                  datos y tramitar consultas al respecto, por medio de los
                  mecanismos definidos para este fin.
                </li>
                <li>
                  Conservar los registros personales bajo total seguridad para
                  impedir su pérdida, alteración, deterioro, uso no autorizado o
                  fraudulento y realizar oportunamente la actualización y
                  rectificación e los datos cada vez que los propietarios de los
                  mismos hagan modificaciones o solicitudes.
                </li>
              </ol>
              <p>
                <h3 className="pregunta">MEDIDAS DE SEGURIDAD</h3>
                Kiero adoptará las medidas técnicas, jurídicas, humanas y
                administrativas que sean necesarias para procurar la seguridad
                de los datos, evitando su adulteración, pérdida, consulta, uso o
                acceso no autorizado o fraudulento. Dichas medidas responderán a
                los requerimientos mínimos hechos por la legislación vigente y
                periódicamente se evaluará su efectividad.
              </p>
              <p>
                <h3 className="pregunta">AUTORIZACIONES</h3>
                Por hacer uso de la plataforma todo usuario registrado, declara
                conocer y autorizar de manera libre, previa y voluntaria a Kiero
                Group para recolectar, registrar, procesar, difundir, compilar,
                intercambiar, actualizar, y disponer de los datos o información
                que suministre el usuario; así como transferir dichos datos o
                información parcial a sus comercios o empresas, con el fin de
                que Kiero Group pueda ofrecer sus productos o servicios de una
                manera más directa y personalizada.
              </p>
              <p>
                La autorización podrá darse verbalmente o por medio de un
                documento físico, electrónico o cualquier otro formato que
                permita garantizar su posterior consulta. En cualquier caso la
                autorización debe ser dada por el Titular y en ésta se debe
                poder verificar que éste conoce y acepta que Kiero recogerá y
                utilizará la información para los fines que para el efecto se le
                dé a conocer de manera previa al otorgamiento de la
                autorización.
              </p>
              <p>
                En virtud de lo anterior, la autorización solicitada deberá
                incluir:
              </p>
              <ol type="a">
                <li>Responsable del Tratamiento y qué datos se recopilan;</li>
                <li>La finalidad del tratamiento de los datos;</li>
                <li>
                  Los derechos de acceso, corrección, actualización o supresión
                  de los datos personales suministrados por el titular y,
                </li>
                <li>Sí se recopilan Datos Sensibles.</li>
                <li>
                  Adicionalmente se le informará al Titular (i) que no se
                  encuentra obligado a autorizar el tratamiento, y (i) que es
                  facultativo entregar este tipo de información
                </li>
              </ol>
              <p>
                <h3 className="pregunta">
                  CASOS EN LOS QUE NO NECESITA LA AUTORIZACIÓN
                </h3>
              </p>
              <ol type="a">
                <li>
                  Cuando la información sea solicitada a la compañía por una
                  entidad pública o administrativa que esté actuando en
                  ejercicio de sus funciones legales o por orden judicial.{" "}
                </li>
                <li>Eventos de urgencia médica o sanitaria.</li>
                <li>
                  Cuando se trate de datos relacionados con el registro civil de
                  las personas debido a que esta información no es considerada
                  como un dato de naturaleza privada.
                </li>
                <li>Cuando se trate de datos de naturaleza pública.</li>
              </ol>
              <p>
                <h3 className="pregunta">
                  PROCEDIMIENTO PARA EL EJERCICIO DE LOS DERECHOS DE CONOCER,
                  ACTUALIZAR, RECTIFICAR Y SUPRIMIR INFORMACIÓN Y REVOCAR LA
                  AUTORIZACIÓN
                </h3>
                Los usuarios que hayan proporcionado información podrán en
                cualquier momento solicitarle la actualización, ratificación o
                supresión de dicha información, usando los medios descritos en
                este documento. Adicionalmente podrán revocar la autorización
                otorgada.
              </p>
              <p>
                La solicitud de supresión de la información y la revocatoria de
                la autorización no procederán cuando el Titular tenga un deber
                legal, contractual o comercial de permanecer en la base de
                datos.
              </p>
              <p>
                Con dicho fin, el Titular de la información a través de los
                diferentes medios predeterminados por Kiero Hará el reclamo
                indicando su número de identificación, los datos de contacto y
                aportando la documentación pertinente que pretenda hacer valer.
                Sí Kiero estima que para el análisis de la solicitud requiere
                mayor información de parte del Titular, procederá a comunicar
                tal situación. Transcurridos dos (2) meses desde la fecha del
                requerimiento, sin que el solicitante presente la información
                requerida, se entenderá que ha desistido del reclamo.
              </p>
              <p>
                El término máximo para atender el reclamo será de quince (15)
                días hábiles contados a partir del día siguiente a la fecha de
                su recibo. Cuando no fuere posible atenderlo dentro de dicho
                término se informará al interesado antes del vencimiento del
                referido plazo los motivos de la demora y la fecha en que se
                atenderá su reclamo, la cual en ningún caso podrá superar los
                ocho (8) días hábiles siguientes al vencimiento del primer
                término.
              </p>
              <p>
                <h3 className="pregunta">
                  DERECHOS Y DEBERES DE LOS TITULARES
                </h3>
                El Titular de los Datos Personales tendrá los siguientes
                derechos:
              </p>
              <ol type="a">
                <li>
                  Conocer, actualizar y rectificar los Datos Personales en
                  cualquier momento.
                </li>
                <li>Solicitar pruebas de la autorización otorgada a Kiero.</li>
                <li>
                  Ser informado por Kiero previa solicitud, respecto del uso que
                  le ha dado a sus Datos Personales.
                </li>
                <li>
                  Presentar consultas ante la Superintendencia de Industria y
                  Comercio o interponer quejas, para hacer valer su derecho al
                  Habeas Data.
                </li>
                <li>
                  Derecho a revocar la autorización o solicitar la supresión de
                  algún dato cuando considere que Kiero no ha respetado sus
                  derechos y garantías constitucionales.{" "}
                </li>
                <li>
                  Acceder de manera gratuita a los Datos Personales que son
                  objeto de Tratamiento en los términos del artículo 21 del
                  Decreto 1377.
                </li>
                <li>
                  El Titular de los Datos Personales tendrá el deber de mantener
                  actualizada su información y garantizar, en todo momento, la
                  veracidad de la misma. Kiero no se hará responsable, en ningún
                  caso, por cualquier tipo de responsabilidad derivada por la
                  inexactitud de la información.
                </li>
              </ol>
              <p>
                <h3 className="pregunta">
                  PROTECCIÓN DE DATOS EN MENORES DE EDAD Y ADOLESCENTES
                </h3>
                En atención a lo dispuesto en la Ley estatutaria 1581 de 2012 y
                el decreto reglamentario 1377 de 2013, Kiero Group asegura que
                el tratamiento de los datos personales de niños, niñas y
                adolescentes será realizado respetando sus derechos, por lo cual
                deberán contar con la autorización previa expresa e informada
                del padre o la madre o representante legal.{" "}
              </p>
              <p>
                <h3 className="pregunta">RESPONSABLE DEL TRATAMIENTO</h3>
                Kiero estará encargada de la recolección y el Tratamiento de
                Datos Personales, la Autorización y los registros almacenados,
                en todos los casos, impidiendo que se deterioren, pierdan,
                alteren o se usen sin autorización y conservarlos con la debida
                seguridad.
              </p>
              <p>
                El área de servicio al cliente estar a cargo de atender las
                peticiones, quejas y consultas de los titulares de los datos y
                los Titulares de la Información pueden ejercer sus derechos de
                conocer, actualizar, rectificar y suprimir sus Datos Personales,
                enviando comunicaciones a (574) 604 64 58 ext 1103 – Medellín o{" "}
                
                <a href="mailto:soporte@kiero.co?Subject=Contacto" target="_blank">
                  soporte@kiero.co
                </a>

              </p>
              <p>
                <h3 className="pregunta">
                  ENTRADA EN VIGENCIA MODIFICACIÓN Y PERIODO DE VIGENCIA DE LAS
                  BASES DE DATOS
                </h3>
                La presente política aplicará a partir del día 9 de Febrero de
                2015 y La información suministrada por los grupos de interés
                permanecerá almacenada hasta por el término de cinco (5) años
                contados a partir de la fecha del último Tratamiento, para
                permitirnos el cumplimiento de las obligaciones legales y/o
                contractuales a su cargo especialmente en materia contable,
                fiscal y tributaria.
              </p>
              <p>
                Esta política podrá ser modificada en cualquier momento y de
                forma unilateral por parte de Kiero.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Privacity;
