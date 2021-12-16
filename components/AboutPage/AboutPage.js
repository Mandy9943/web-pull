import Header from '../Common/Header';
import Footer from '../Common/Footer';
import BannerDesktop from '../../assets/img/imgAbout/banner-desktop.png';
import BannerMobile from '../../assets/img/imgAbout/banner-mobile.png';
import Mision from '../../assets/img/imgAbout/mision.png';
import Vision from '../../assets/img/imgAbout/vision.png';
import OurClients from '../../assets/img/imgAbout/nuestros-clientes.png';
import OurEmployees from '../../assets/img/imgAbout/nuestros-empleados.png';
import AboutUs from '../../assets/img/imgAbout/quienes-somos.png';
import Image from 'next/image';
import './AboutPage.css'


const AboutPage = () =>{
    return(
        <>
            <Header/>
                <div className="containerAbout">
                    <header>
                        <Image src={BannerDesktop} layout='fill'/>
                        <div className="aboutText">
                            <p>A cerca de nuestra marca</p>
                            <p>KIERO</p>
                        </div>
                    </header>
                </div>
            <Footer/>
        </>
    )
}

export default AboutPage