import Header from "../Common/Header";
import "./AboutPage.css";
import quienesSomos from "../../assets/img/imgAbout/QUIENESSOMOS.webp";
import nuestrosTrabajdores from "../../assets/img/imgAbout//NuestrosTrabajadores.webp";
import nuestrosClientes from "../../assets/img/imgAbout/NuestrosClientes.webp";
import mision from "../../assets/img/imgAbout/Mision.webp";
import vision from "../../assets/img/imgAbout/Vision.webp";
import banner from "../../assets/img/imgAbout/BannerPrincipal.webp";
import dynamic from "next/dynamic";

const SectionType1 = dynamic(
  () => import("./commons/SectionType1/SectionType1"),
  {
    suspense: true,
  }
);
const SectionType2 = dynamic(
  () => import("./commons/SectionType2/SectionType2"),
  {
    suspense: true,
  }
);
const FooterSection = dynamic(
  () => import("./commons/FooterSection/FooterSection"),
  {
    suspense: true,
  }
);

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="containerAbout">
        <div
          className="headerAbout"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: "gray",
          }}
        >
          <div className="aboutText">
            <p>Acerca de nuestra marca</p>
            <p>KIERO</p>
          </div>
        </div>
        <SectionType1
          imgSection={quienesSomos}
          captionText={"QUIENES SOMOS"}
          descriptionText={[
            `Nuestra empresa, fundada en el municipio de Medellín en el año de 2012, se dio a conocer como compañía de publicidad, donde adoptó como insignia principal un logo en forma de corazón, que adapto a sus necesidades convirtiéndolo en su marca, durante esta actividad la compañía comercializaba tarjetas de puntos las cuales ofrecía a empresas de la región como planes y beneficios para sus empleados.`,
            `A través de esta actividad aprendió a comprender mejor el mercado de Colombia y a identificar las necesidades de sus habitantes, negocios y empresas, es allí donde decide tomar iniciativa de registrar como principal actividad económica la comercialización de productos al por menor a través de internet, ofreciendo a tiendas de terceros un Marketplace como espacio para comercializar sus productos. `,
          ]}
        />
        <SectionType1
          imgSection={nuestrosTrabajdores}
          captionText={"Nuestros empleados"}
          descriptionText={[
            ` Contamos con un capital humano altamente capacitado en las últimas tecnologías informáticas y de gestión para ofrecer el mejor servicio a las tiendas de terceros que comercializan sus productos en nuestro Marketplace y a sus clientes cuando necesitan de nuestra ayuda.`,
            `Además ofrecemos a nuestros empleados las mejores condiciones laborales, donde se ofrecen oportunidades de trabajo con contratos por horas o a tiempo completo y para trabajo en la sede de la compañía o desde su casa, donde la empresa brinda todos los recursos para que el colaborador pueda desempeñar sus funciones de la forma más cómoda.`,
          ]}
        />
        <SectionType1
          imgSection={nuestrosClientes}
          captionText={"Nuestros clientes"}
          descriptionText={[
            `Consideramos como nuestros clientes todas las tiendas que de terceros que comercializan sus productos a través de nuestro Marketplace donde pueden publicar sus productos por una tarifa cómoda que se ajusta a su presupuesto y a sus clientes que son nuestra razón de ser.`,
            `Para ellos brindamos una plataforma amigable donde pueden hacer búsquedas de productos, hacer preguntas acerca de los mismos y compras de manera rápida, ágil y segura a través de nuestra pasarela de pagos y recibir sus productos sin tener que abandonar la comodidad de su hogar. `,
          ]}
        />

        <div className="bottomSectionWrapper">
          <div className="bottomSection">
            <SectionType2
              imgSection={mision}
              captionText={"NUESTRA MISION"}
              descriptionText={[
                `Poner a disposición de nuestros clientes de un espacio donde podrán encontrar el mejor y más completo portafolio de productos nacionales e internacionales en diferentes categorías sin tener que ir a otro lugar, al mejor precio, con la mejor calidad y con un servicio de entrega a nivel nacional.`,
              ]}
            />
            <SectionType2
              imgSection={vision}
              captionText={"NUESTRO OBJETIVO-VISIÓN"}
              descriptionText={[
                `Brindar a nuestros clientes tanto tiendas como usuarios compradores, el mejor espacio de encuentro para comercializar sus productos y realizar sus compras de una forma segura, ágil y sin contratiempos.`,
              ]}
            />
          </div>
        </div>

        {/* <header>
          <Image src={BannerDesktop} layout="fill" alt="banner" />
          <div className="aboutText">
            <p>A cerca de nuestra marca</p>
            <p>KIERO</p>
          </div>
        </header> */}
      </div>
      <FooterSection />
    </>
  );
};

export default AboutPage;
