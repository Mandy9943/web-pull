import './ErrorPageNew.css'
import BackImg from './img/bg.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faPinterestP, faLinkedinIn, faYoutube, faWhatsapp} from "@fortawesome/free-brands-svg-icons"

export default function ErrorPage({ codError, msgError}) { 
	const fb = "//www.facebook.com/KieroGroup/";
    const ig = "//www.instagram.com/kierogroup";
    const tw = "//twitter.com/KIEROGROUP1";
    const lk = "//www.linkedin.com/in/kiero-group-15a6a7190/";
    const pt = "//co.pinterest.com/novedadeskiero/pins";
    const yt = "//www.youtube.com/user/KieroGroup";
    const ws =
      "//api.whatsapp.com/send?phone=5715800817&data=Abtjl_JlVp4Y7IoFRWKf-hlWAs-VGJ3oAFmXn4IGwwa3ocqSHrFkuqFrQCSStHVIt7TzEC6yGVjy6TA3FT5FYdPlrLxnmJ5kcvdfZ3tIaO0LElI4BnU3BkZT5O1suCVDqlk&source=FB_Ads&fbclid=IwAR1yaqUnrxYjWvfQ7Ggvz6jWEhP2R0ApqB2GIJcMq7Y52REAaoJCSkBjx00";
	return (
		<>
			<div id="notfound">
				<div className="notfound-bg" style={{ backgroundImage:`url(${BackImg})`}}></div>
				<div className="notfound">
					<div className="notfound-404">
						<h1>{codError}</h1>
					</div>
					<h2>{msgError}</h2>
					<a href="/" className="home-btn">Ir a Kiero.co</a>
					<a href="/contactanos_email" className="contact-btn">Contáctanos</a>
					<div className="notfound-social">	
						<a  target="_blank" href={fb}><FontAwesomeIcon icon={faFacebookF} /></a>
						<a  target="_blank" href={ig}><FontAwesomeIcon icon={faInstagram} /></a>
						<a  target="_blank" href={tw}><FontAwesomeIcon icon={faTwitter} /></a>
						<a  target="_blank" href={lk}><FontAwesomeIcon icon={faLinkedinIn} /></a>
						<a  target="_blank" href={pt}><FontAwesomeIcon icon={faPinterestP} /></a>
						<a  target="_blank" href={yt}><FontAwesomeIcon icon={faYoutube} /></a>
						<a  target="_blank" href={ws}><FontAwesomeIcon icon={faWhatsapp} /></a>
					</div>
				</div>
			</div>
		
		</>
	)
}

	


