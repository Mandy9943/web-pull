import './ErrorPage.css'
import BackImg from './img/bg.jpg'
import { faFacebook } from "@fortawesome/free-solid-svg-icons";
// import 'https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js'
// import 'https://oss.maxcdn.com/respond/1.4.2/respond.min.js'
// import './css/font-awesome.min.css'

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
					<a href="#" className="contact-btn">Contáctanos</a>
					<div className="notfound-social">
						<a href={fb}><i className="fa fa-facebook"></i></a>
						<a href={tw}><i className="fa fa-twitter"></i></a>
						<a href={pt}><i className="fa fa-pinterest"></i></a>
						<a href={yt}><i className="fa fa-google-plus"></i></a>
					</div>
				</div>
			</div>
		
		</>
	)
}

	


