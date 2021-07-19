import React, { Component } from "react";
import "./Terms.css";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Link from "next/link";

class Terms extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="terms-wrap-content">
          <div>
            <h1 className="terms-title">
              Términos y Condiciones de uso del Sitio
            </h1>
          </div>
          <div>
            <p className="terms-paragraph">Versión 22 de Mayo de 2013</p>
            <p className="terms-paragraph">
              Este contrato describe los términos y condiciones generales (los
              "Términos y Condiciones Generales") aplicables al uso de los
              servicios ofrecidos por{" "}
              <strong>Kiero International Group S.A.S</strong> ("los Servicios")
              dentro del sitio www.kiero.co ("Kiero" o el "sitio"). Cualquier
              persona que desee acceder y/o usar el sitio o los servicios podrá
              hacerlo sujetándose a los Términos y Condiciones Generales, junto
              con todas las demás políticas y principios que rigen Kiero y que
              son incorporados al presente por referencia.
            </p>
            <p className="terms-paragraph">
              CUALQUIER PERSONA QUE NO ACEPTE ESTOS TÉRMINOS Y CONDICIONES
              GENERALES, LOS CUALES TIENEN UN CARÁCTER OBLIGATORIO Y VINCULANTE,
              DEBERÁ ABSTENERSE DE UTILIZAR EL SITIO Y/O LOS SERVICIOS.
            </p>
            <p className="terms-paragraph">
              El Usuario debe leer, entender y aceptar todas las condiciones
              establecidas en los Términos y Condiciones Generales y en las
              Políticas de Privacidad así como en los demás documentos
              incorporados a los mismos por referencia, previo a su inscripción
              como Usuario de Kiero.
            </p>
            <h3 className="terms-title">Domicilio</h3>
            <p className="terms-paragraph">
              Se fija como domicilio de Kiero International Group S.A.S La
              Carrera 54 #1A-54 Oficina 201, Medellín -Colombia.
            </p>
            <h3 className="terms-title">Jurisdicción y Ley Aplicable</h3>
            <p className="terms-paragraph">
              Este acuerdo estará regido en todos sus puntos por las leyes
              vigentes en la República de Colombia.
            </p>
            <p className="terms-paragraph">
              Cualquier controversia derivada del presente acuerdo, su
              existencia, validez, interpretación, alcance o cumplimiento, será
              sometida a las leyes aplicables y a los Tribunales competentes de
              la Ciudad de Medellín y los procedimientos se llevarán a cabo en
              idioma castellano.
            </p>
            <h3 className="terms-title">Usuarios Capacitados.</h3>
            <p className="terms-paragraph">
              Los Servicios sólo están disponibles para personas que tengan
              capacidad legal para contratar. No podrán utilizar los servicios
              las personas que no tengan esa capacidad, los menores de edad o
              Usuarios de Kiero que hayan sido suspendidos temporalmente o
              inhabilitados definitivamente. Si estás inscribiendo un Usuario
              como Empresa, deben tener capacidad para contratar a nombre de tal
              entidad y de obligar a la misma en los términos de este Acuerdo.
            </p>
            <h3 className="terms-title">Inscripción.</h3>
            <p className="terms-paragraph">
              Es obligatorio completar el formulario de inscripción en todos sus
              campos con datos válidos para poder utilizar los servicios que
              brinda Kiero. El futuro Usuario deberá completarlo con su
              información personal de manera exacta, precisa y verdadera ("Datos
              Personales") y asume el compromiso de actualizar los Datos
              Personales conforme resulte necesario. Kiero podrá utilizar
              diversos medios para identificar a sus Usuarios, pero Kiero NO se
              responsabiliza por la certeza de los Datos Personales provistos
              por sus Usuarios. Los Usuarios garantizan y responden, en
              cualquier caso, de la veracidad, exactitud, vigencia y
              autenticidad de los Datos Personales ingresados.
            </p>
            <p className="terms-paragraph">
              A su exclusiva discreción, Kiero podrá requerir una inscripción
              adicional a los Usuarios que hagan parte de campañas o promociones
              especiales. Estas actividades se publicarán bajo la modalidad que
              Kiero habilite para este tipo de Usuarios.
            </p>
            <p className="terms-paragraph">
              Kiero se reserva el derecho de solicitar algún comprobante y/o
              dato adicional a efectos de corroborar los Datos Personales, así
              como de suspender temporal o definitivamente a aquellos Usuarios
              cuyos datos no hayan podido ser confirmados. En estos casos de
              inhabilitación, se dará de baja todos los puntos acumulados, sin
              que ello genere algún derecho a resarcimiento.
            </p>
            <p className="terms-paragraph">
              El Usuario accederá a su cuenta personal ("Cuenta") mediante el
              ingreso de sus datos de usuario y clave de seguridad personal
              elegida ("Clave de Seguridad"). El Usuario se obliga a mantener la
              confidencialidad de su Clave de Seguridad.
            </p>
            <p className="terms-paragraph">
              Un usuario puede tener más de una cuenta, en caso que Kiero lo
              considere conveniente podrá integrar, transferir, cancelar,
              suspender o inhabilitar la cuenta.
            </p>
            <p className="terms-paragraph">
              El Usuario será responsable por todas las operaciones efectuadas
              en su Cuenta, pues el acceso a la misma está restringido al
              ingreso y uso de su Clave de Seguridad, de conocimiento exclusivo
              del Usuario. El Usuario se compromete a notificar a Kiero en forma
              inmediata y por medio idóneo y fehaciente, cualquier uso no
              autorizado de su Cuenta, así como el ingreso por terceros no{" "}
            </p>
            <p className="terms-paragraph">
              autorizados a la misma. Se aclara que está prohibida la venta,
              cesión o transferencia de la Cuenta bajo ningún título (incluyendo
              los puntos acumulados y la categoría alcanzada).
            </p>
            <p className="terms-paragraph">
              Kiero se reserva el derecho de rechazar cualquier solicitud de
              inscripción o de cancelar una inscripción previamente aceptada,
              sin que esté obligado a comunicar o exponer las razones de su
              decisión y sin que ello genere algún derecho a indemnización o
              resarcimiento.
            </p>
            <h3 className="terms-title">Modificaciones del Acuerdo</h3>
            <p className="terms-paragraph">
              Kiero podrá modificar los Términos y Condiciones Generales en
              cualquier momento haciendo públicos en el Sitio los términos
              modificados. Todos los términos modificados entrarán en vigor a
              los 10 (diez) días de su publicación. Dentro de los 5 (cinco) días
              siguientes a la publicación de las modificaciones introducidas, el
              Usuario deberá comunicar por e-mail si no acepta las mismas; en
              ese caso quedará disuelto el vínculo contractual y será
              inhabilitado como Usuario siempre que no tenga deudas pendientes.
              Vencido este plazo, se considerará que el Usuario acepta los
              nuevos términos y el contrato continuará vinculando a ambas
              partes.
            </p>
            <h3 className="terms-title">Privacidad de la Información</h3>
            <p className="terms-paragraph">
              Para utilizar los Servicios ofrecidos por Kiero, los Usuarios
              deberán facilitar determinados datos de carácter personal. Su
              información personal se procesa y almacena en servidores o medios
              magnéticos que mantienen altos estándares de seguridad y
              protección tanto física como tecnológica. Para mayor información
              sobre la privacidad de los Datos Personales y casos en los que
              será revelada la información personal, se pueden consultar
              nuestras Políticas de Privacidad.
            </p>
            <p className="terms-paragraph">
              Para mayor información por favor haz clic en "Contáctenos"{" "}
            </p>
            <p className="terms-paragraph">
              Violaciones del Sistema o Bases de Datos
            </p>
            <p className="terms-paragraph">
              No está permitida ninguna acción o uso de dispositivo, software, u
              otro medio tendiente a interferir tanto en las actividades y
              operatoria de Kiero como en las bases de datos de Kiero. Cualquier
              intromisión, tentativa o actividad violatoria o contraria a las
              leyes sobre derecho de propiedad intelectual y/o a las
              prohibiciones estipuladas en este contrato harán pasible a su
              responsable de las acciones legales pertinentes, y a las sanciones
              previstas por este acuerdo, así como lo hará responsable de
              indemnizar los daños ocasionados.
            </p>
            <h3 className="terms-title">
              Sanciones. Suspensión de operaciones
            </h3>
            <p className="terms-paragraph">
              Sin perjuicio de otras medidas, Kiero podrá advertir, suspender en
              forma temporal o inhabilitar definitivamente la Cuenta de un
              Usuario
            </p>
            <h3 className="terms-title">Alcance de los servicios de Kiero</h3>
            <p className="terms-paragraph">
              Kiero no es responsable por la calidad de los bienes o servicios
              que ofrecen sus aliados pero está en obligación de atender las
              solicitudes de sus clientes y/o afiliados.
            </p>
            <h3 className="terms-title">Fallas en el sistema</h3>
            <p className="terms-paragraph">
              Kiero no se responsabiliza por cualquier daño, perjuicio o pérdida
              al Usuario causados por fallas en el sistema, en el servidor o en
              Internet. Kiero tampoco será responsable por cualquier virus que
              pudiera infectar el equipo del Usuario como consecuencia del
              acceso, uso o examen de su sitio web o a raíz de cualquier
              transferencia de datos, archivos, imágenes, textos, o audio
              contenidos en el mismo. Los Usuarios NO podrán imputarle
              responsabilidad alguna ni exigir pago por lucro cesante, en virtud
              de perjuicios resultantes de dificultades técnicas o fallas en los
              sistemas o en Internet. Kiero no garantiza el acceso y uso
              continuado o ininterrumpido de su sitio. El sistema puede
              eventualmente no estar disponible debido a dificultades técnicas o
              fallas de Internet, o por cualquier otra circunstancia ajena a
              Kiero; en tales casos procurará restablecerlo con la mayor
              celeridad posible sin que por ello pueda imputársele algún tipo de
              responsabilidad. Kiero no será responsable por ningún error u
              omisión contenidos en su sitio web.
            </p>
            <p className="terms-paragraph">
              Kiero se reserva el derecho de modificar, cambiar, agregar, o
              eliminar los precios vigentes en cualquier momento, sin necesidad
              de notificar a sus usuarios.{" "}
            </p>
            <p className="terms-paragraph">
              En caso de haberse facturado cargos que no hubiesen correspondido,
              el Usuario deberá comunicarse con nuestro equipo de Atención al
              Cliente.
            </p>
            <h3 className="terms-title">Propiedad intelectual. Enlaces</h3>
            <p className="terms-paragraph">
              Los contenidos de las pantallas relativas a los servicios de Kiero
              como así también los programas, bases de datos, redes, archivos
              que permiten al Usuario acceder y usar su Cuenta, son de propiedad
              de Kiero y están protegidas por las leyes y los tratados
              internacionales de derecho de autor, marcas, patentes, modelos y
              diseños industriales. El uso indebido y la reproducción total o
              parcial de dichos contenidos quedan prohibidos, salvo autorización
              expresa y por escrito de Kiero
            </p>
            <p className="terms-paragraph">
              El Sitio puede contener enlaces a otros sitios web (incluyendo los
              sitios pertenecientes al Programa MercadoSocios) lo cual no indica
              que sean propiedad u operados por Kiero. En virtud que Kiero no
              tiene control sobre tales sitios, NO será responsable por los
              contenidos, materiales, acciones y/o servicios prestados por los
              mismos, ni por daños o pérdidas ocasionadas por la utilización de
              los mismos, sean causadas directa o indirectamente. La presencia
              de enlaces a otros sitios web no implica una sociedad, relación,
              aprobación, respaldo de Kiero a dichos sitios y sus contenidos.
            </p>
            <h3 className="terms-title">Indemnización</h3>
            <p className="terms-paragraph">
              El Usuario indemnizará y mantendrá indemne a Kiero, sus filiales,
              empresas controladas y/o controlantes, directivos,
              administradores, representantes y empleados, por cualquier reclamo
              o demanda de otros Usuarios o terceros por sus actividades en el
              Sitio o por su incumplimiento los Términos y Condiciones Generales
              y demás Políticas que se entienden incorporadas al presente o por
              la violación de cualesquiera leyes o derechos de terceros,
              incluyendo los honorarios de abogados en una cantidad razonable.
            </p>
            <h3 className="terms-title">Política de envios</h3>
            <h3 className="terms-title">Aclaraciones</h3>
            <p className="terms-paragraph">
            -Cada publicación, especifica la forma de envío y el costo del producto. Adquirirás este beneficio de envíos gratis cuando veas el clásico camión rojo de Kiero Envíos cuando aparezca en la publicación.
            </p>
            <p className="terms-paragraph">
            -Se realizan envíos a todo el territorio Colombiano, sin embargo las entregas están sujetas a la cobertura de servicio que preste el operador de servicios de entregas, es de aclarar que el paquete puede ser entregado en una dirección alternativa suministrada por el comprador.
            </p>
            <p className="terms-paragraph">
            -Actualmente no es posible elegir una hora y fecha de entrega de los productos ya que el aliado logístico cuenta con unas rutas programadas para las entregas y estas pueden variar, a través de la página de la transportadora y el número de guía o rastreo suministrado, podrás hacer seguimiento a tu paquete y saber la fecha estimada en que el transportista te visitará para hacer entrega de tu pedido.
            </p>
            <p className="terms-paragraph">
            -El tiempo estimado de entrega para los productos internacionales es de 3 a 7 días hábiles, el Marketplace brindará información sobre la transportadora y el número de guía o seguimiento para que el comprador pueda hacer rastreo de su producto.
            </p>
            <p className="terms-paragraph">
            -La política del Marketplace no contempla el pago del producto contra entrega por seguridad tanto del cliente como del personal al servicio del operador logístico.
            </p>
            <p className="terms-paragraph">
            -El transportista tendrá la facultad de entregar el producto en la dirección o domicilio suministrado por el cliente y podrá ser recibido por una persona mayor de edad habitante del domicilio, a no ser que el cliente informe en el momento de la compra que el producto solo debe ser entregado al comprador o a un tercero autorizado.
            </p>
            <p className="terms-paragraph">
            -El cliente junto con el transportista, deberán revisar el producto al ser entregado y colocar cualquier anotación en el documento de entrega o guía de entrega si se encuentra alguna novedad con el paquete.
            </p>
            <p className="terms-paragraph">
            -Después de haber recibido el producto, ni el transportista, ni un tercero tendrán autorización para volver a recoger el producto en el domicilio; este hecho debe ser reportado por el comprador a la transportadora y las autoridades, al igual que al Marketplace.
            </p>
            <p className="terms-paragraph">
            -Los productos comercializados a través de KieroMarketplace llegarán hasta la puerta de su casa, o a la dirección suministrada por el comprador, actualmente no disponemos del servicio compra y recoge en el punto físico.
            </p>
            <h3 className="terms-title">Anexos</h3>
            <p className="terms-paragraph">
              <Link href="/uso_market">
                <a>
                  Términos y condiciones de uso de marketplace
              </a>
              </Link>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Terms;
