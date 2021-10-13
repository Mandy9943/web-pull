import './ErrorPage.css'
import BackImg from './img/bg.jpg'
// import 'https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js'
// import 'https://oss.maxcdn.com/respond/1.4.2/respond.min.js'
// import './css/font-awesome.min.css'

export default function ErrorPage({ codError}) { 

	return (
		<>
			<div id="notfound">
				<div className="notfound-bg" style={{ backgroundImage:`url(${BackImg})`}}></div>
				<div className="notfound">
					<div className="notfound-404">
						<h1>{codError}</h1>
					</div>
					<h2>we are sorry, but the page you requested was not found</h2>
					<a href="#" className="home-btn">Go Home</a>
					<a href="#" className="contact-btn">Contact us</a>
					<div className="notfound-social">
						<a href="#"><i className="fa fa-facebook"></i></a>
						<a href="#"><i className="fa fa-twitter"></i></a>
						<a href="#"><i className="fa fa-pinterest"></i></a>
						<a href="#"><i className="fa fa-google-plus"></i></a>
					</div>
				</div>
			</div>
		
		</>
	)
}

	


