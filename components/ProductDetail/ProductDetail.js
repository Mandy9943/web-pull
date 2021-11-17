import React, { Component } from "react";
import FooterMovil from "../Common/FooterMovil";
import "./ProductDetail.css";
import Link from "next/link";
import Explorer from "../Common/Explorer";
import { getData } from "../../services/userApi";
import PayCredit from "../../assets/img/pay-credit.png";
import iconCredit from "../../assets/img/card.svg";
import PayOnline from "../../assets/img/pay-online.png";
import PayTransfer from "../../assets/img/pay-transfer.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Logo1 from "../../assets/img/logo-social.png";
import Logo2 from "../../assets/img/logo-social1.png";
import { RecommendedProducts } from "../RecommendedProducts";
import { getProductDetail } from "../../services/productsApi";
import { withRouter } from "next/router";
import { KlaviyoClient } from "../../lib/functions.js";
import Cookies from "js-cookie";
import {handleFormatUrl} from '../../lib/functions'
import dynamic from "next/dynamic";
import {signUp} from "../../lib/auth";
import {createleadClient} from "../../lib/zoho";

// import Nav from '../Common/Nav';
// import DetailImg from '../DetailImg';
// import Pay from './../PaySection';
// import ProductsSlider from './../ProductsSlider';
// import Detail from './../DetailProductInfo';
// import Question from './../Question';
// import QuestionItem from './../QuestionItem';
// import Seller from './../SellerInfo';
// import ProductCardFinding from './../Common/ProductCardFinding';
// import Footer from '../Common/Footer';

const Nav = dynamic(() => import('../Common/Nav/Nav'));
const DetailImg = dynamic(() => import('../DetailImg'));
const Pay = dynamic(() => import('./../PaySection'));
const ProductsSlider = dynamic(() => import('./../ProductsSlider'));
const Detail = dynamic(() => import('./../DetailProductInfo'));
const Question = dynamic(() => import('./../Question'));
const QuestionItem = dynamic(() => import('./../QuestionItem'));
const Seller = dynamic(() => import('./../SellerInfo'));
const ProductCardFinding = dynamic(() => import('./../Common/ProductCardFinding'));
const Footer = dynamic(() => import('../Common/Footer'));

class ProductDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: [],
			mdata: this.props.data,
			m_pgid: props.data.variants.length == 0 || props.data.is_variant ? true : false,
		};
		this.reLoadData = this.reLoadData.bind(this);
	}
	componentDidMount() {
		// console.log("propiedades",this.props)
		// console.log('entro')
		// const script = document.createElement("script");
		//
		// script.src = "//static.klaviyo.com/onsite/js/klaviyo.js?company_id=Sr8j85";
		// script.async = true;
		//
		// document.body.appendChild(script);

		// function whenWindowFbq() {
		// 	return new Promise(function (resolve, reject) {
		// 				(function waitForFbq(){
		// 						if (typeof(window.fbq) == "function" ) return resolve();
		// 						setTimeout(waitForFbq, 300);
		// 				})();
		// 		});
		// };

		// whenWindowFbq().then(() => {
		// 	window.fbq('track', 'ViewContent', {
		// 		content_ids: this.props.data.product_global_id,
		// 		content_name: this.props.data.product_global_title,
		// 		product_group: this.props.data.type,
		// 		content_type: 'product',
		// 		contents: [
		// 			{
		// 				id: this.props.data.product_global_id,
		// 				quantity: 1,
		// 			},
		// 		],
		// 		currency: 'COP',
		// 		value: this.props.data.price,
		// 	})
		// });

		fbq('track', 'ViewContent', {
			content_ids: this.props.data.product_global_id,
			content_name: this.props.data.product_global_title,
			product_group: this.props.data.type,
			content_type: 'product',
			contents: [
				{
					id: this.props.data.product_global_id,
					quantity: 1,
				},
			],
			currency: 'COP',
			value: this.props.data.price,
		});

		this.loadQuestions();
		// dataLayer.push({ ecommerce: null });
		// console.log('propiedades', this.props);
		// let dataLayerProductDetailG4 = {
		// 	'event': 'view_item',
		// 	'ecommerce': {
		// 	'items':
		// 				[{
		// 					'item_name': this.props.data.product_global_title, // Name or ID is required.
		// 					'item_id': this.props.data.product_global_id,
		// 					'price': this.props.data.price,
		// 					'item_brand': this.props.data.brand,
		// 					'url':'https://kiero.co/detalle/' + this.props.data.product_global_id + '_' + this.props.data.product_global_title
		// 																					.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
		// 																					.replace('//', '%2F')
		// 																					.replace('%', '')
		// 																					.split(' ')
		// 																					.join('-'),
		// 			}],

		// 	'currency': 'COP'
		// 	}
		// }

		// const productDetailGooleDataLayerG4 = (dataLayerProductDetailG4) => {
		// 	this.props.data.breadcum.forEach((prod, index) => {
		// 		let keyCategory = `item_category${index + 1}`;
		// 		let valueNameCategory = prod.name;
		// 		dataLayerProductDetailG4['ecommerce']['items'][keyCategory] = valueNameCategory;
		// 	});
		// 	return dataLayerProductDetailG4;
		// }

		// let resultDataLayerProductDetailG4 = productDetailGooleDataLayerG4(dataLayerProductDetailG4);

		// dataLayer.push(resultDataLayerProductDetailG4);

		// dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.

		const concatCategories = () => {
			var dataCategory = [];
			this.props.data.breadcum.forEach((prod, index) => {
				dataCategory.push(prod.name);
			});
			return dataCategory.join(' / ');
		};

		// dataLayer.push({
		//   event: "gtm.dom",
		//   ecommerce: {
		//     detail: {
		//       actionField: {
		//         list: this.props.data.category.name,
		//       },
		//       products: [
		//         {
		//           name: this.props.data.product_global_title, // Name or ID is required.
		//           id: this.props.data.product_global_id,
		//           price: this.props.data.price,
		//           brand: this.props.data.brand,
		//           category: concatCategories(),
		//           url:
		//             "https://kiero.co/detalle/" +
		//             this.props.data.product_global_id +
		//             "_" +
		//             this.props.data.product_global_title
		//               .replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, "")
		//               .replace("//", "%2F")
		//               .replace("%", "")
		//               .replaceAll(/['"]+/g, "")
		//               .split(" ")
		//               .join("-"),
		//           position: 1,
		//         },
		//       ],
		//     },
		//   },
		// });

    var productViewedData = {
      product_id: this.props.data.product_global_id,
      category: concatCategories(),
      name: this.props.data.product_global_title,
      brand: this.props.data.brand,
      price: this.props.data.price,
      currency: 'COP',
      url:
      "https://kiero.co" + handleFormatUrl(this.props.data.product_global_id, this.props.data.product_global_title),
      image_url: this.props.data.images[0].url,
      value: this.props.data.price
    }

		analytics.track('Product Viewed', productViewedData);

		// console.log(productViewedData)

    // var _learnq = _learnq || [];
    // console.log(this.props.data)
    //
    // _learnq.push(["track", "Viewed Product", item]);
    // console.log(_learnq)
    // gtag('event', 'view_item', {
    // 						"items": [
    // 									{
    // 										"id": this.props.data.product_global_id,
    // 										"name": this.props.data.product_global_title,
    // 										"list_name": "Search Results",
    // 										"brand": this.props.data.brand,
    // 										"category": concatCategories(),
    // 										"quantity": 5,
    // 										'price': this.props.data.price,
    // 										'url':'https://kiero.co/detalle/' + this.props.data.product_global_id + '_' + this.props.data.product_global_title
    // 																					.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
    // 																					.replace('//', '%2F')
    // 																					.replace('%', '')
    // 																					.split(' ')
    // 																					.join('-'),
    // 										"list_position": 1,
    // 									}
    // 						]
    //  			 });
    var item = {
      ProductName: this.props.data.product_global_title,
      ProductID: this.props.data.product_global_id,
      SKU: this.props.data.sku,
      Categories: concatCategories(),
      ImageURL: this.state.mdata.images[0].url,
      URL:
      "https://kiero.co" + handleFormatUrl(this.props.data.product_global_id, this.props.data.product_global_title),
      Brand: this.props.data.brand,
      Price: this.props.data.price,
    };
    if (Cookies.get("email") !== undefined)
      KlaviyoClient.public.track({
        event: "Viewed Product",
        email: Cookies.get("email"),
        properties: {
          items: [item],
        },
      });
      this.createlead(item);
    }

  async createlead() {
    var data = {
      first_name:Cookies.get("name"),
      city: "",
      address:"",
      email:Cookies.get("email"),
      second_email:"",
      phone:"",
      second_phone:"",
      last_name:Cookies.get("last_name"),
      type_id:"",
      num_id:"",
      id:Cookies.get("user_id"),
      country:"",
      lead_type:"Usuario Registrado que Accedió a los Detalles del Producto",
      category:"",
      sub_category:"",
      price_product:this.props.data.price,
      product_title:this.props.data.product_global_title,
      product_description:this.props.data.description,
      product_id:toString(this.props.data.product_id),
      product_link:'',
      product_brand:this.props.data.brand,
      category_id:toString(this.props.data.category_id),
    }
    const error = await createleadClient(data);
  }
  async reLoadData(pgid) {
    // Esta funcion se llama cuando se encuentra un match de variantes
    const router = this.props.router;
    const res = await getProductDetail(this.state.mdata.product_id, {
      params: { is_variant: true, product_global_id: pgid },
    });

    const data = await res.data;
    this.setState({
      mdata: data.data,
      m_pgid: true,
    });

    // https://stackoverflow.com/a/62947231/7771926  <--- reference
    let url = `/detalle/${this.state.mdata.product_id}?is_variant=true&product_global_id=${pgid}`;
    this.props.router.push("/detalle/[...product]", url, { shallow: true });
  }

  loadQuestions = () => {
    getData("/getQuestions/" + this.props.data.product_id)
      .then((response) => {
        this.setState({ questions: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    // let DataForPixel = {
    // 	'content_ids': this.props.data.product_global_id,
    // 	'content_name': this.props.data.product_global_title,
    // 	'product_group': this.props.data.type,
    // 	'content_type':'product',
    // 	'contents': [{
    // 		'id':this.props.data.product_global_id,
    // 		'quantity':1
    // 	}],
    // 	'currency': 'COP',
    // 	'value': this.props.data.price
    // };
    // <ReactPixelFacebook type={'ViewContent'} data={DataForPixel}/>
    const u_data = this.props.user_data;
    let urlSic = "https://www.sic.gov.co";
    // console.log(this.state.mdata)
    // console.log("data")
    return (
      <div className="containerProductDetail">
        <Nav
          user={u_data.user}
          jwt={u_data.jwt}
          home={true}
          authenticated={u_data.authenticated}
        />
        <div className="detail-content">
          <div className="breadcrumb">
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Link href="/">
                <a>Inicio</a>
              </Link>
              {this.state.mdata.breadcum.map((item, i) => (
                <div key={i}>
                  <FontAwesomeIcon icon={faAngleRight} />
                  {/* <Link href="/categoria/[category]" as={'/categoria/' + item.name}> */}
                  <a href={"/categoria/" + item.name}>{item.name}</a>
                </div>
              ))}
            </div>
          </div>
          <div className="wrap-section-1">
            <div className="wrap-product">
              <DetailImg
                allowZoom
                images={this.state.mdata.images}
                category={
                  this.state.mdata.category
                    ? this.state.mdata.category.name
                    : ""
                }
                product_name={this.state.mdata.title}
              />
              <div className="pay-section-responsive">
                <Pay
                  props={this.props}
                  pid={this.state.mdata.product_id}
                  pgid={this.state.mdata.product_id} //aqui va product_global_id
                  m_pgid={this.state.m_pgid}
                  seller={this.state.mdata.user}
                  price={this.state.mdata.price}
                  title={this.state.mdata.title}
                  stock={this.state.mdata.stock}
                  reloadDetails={this.reLoadData}
                />
              </div>
              {/* <RecommendedProducts category={this.state.mdata.category.name} /> */}
              <div className="home-content slider-recommends">
                <ProductsSlider
                  category={
                    this.state.mdata.category
                      ? this.state.mdata.category.name
                      : ""
                  }
                />
              </div>
              <Detail
                width={this.state.mdata.width}
                information={this.state.mdata.information}
                length={this.state.mdata.length}
                weight={this.state.mdata.weight}
                title={this.state.mdata.title}
                product_name={this.state.mdata.title}
                desciption={this.state.mdata.description}
                brand={this.state.mdata.brand}
                type={this.state.mdata.type}
                color={this.state.mdata.color}
                model={this.state.mdata.model}
              />
              <Question
                user_data={this.props.user_data}
                product_id={this.state.mdata.product_id}
                cb={this.loadQuestions}
                market_id={this.state.mdata.user.user_id}
              />
              <section>
                <QuestionItem
                  product_id={this.state.mdata.product_id}
                  questions={this.state.questions}
                />
              </section>
              <div className="section-pay-type pay-movil no-web">
                <div className="section-pay-type-title">
                  <h4>Medios de pago</h4>
                </div>
                <div className="section-pay-type-items">
                  <p>Tarjetas de crédito - Hasta 36 cuotas</p>
                  <div>
                    <img loading="lazy" alt='pagos por tarjeta de crédito' src={PayCredit} />
                  </div>
                  <p>Efectivo en puntos de pago</p>
                  <div>
                    <img loading="lazy" alt='pagos por pse' src={PayOnline} />
                  </div>
                  <p>Transferencia desde tu banco</p>
                  <div>
                    <img loading="lazy" alt='pagos por transferencia' src={PayTransfer} />
                  </div>
                </div>
              </div>
              <div className="section-pay-send no-web">
                <div className="section-pay-send-title">
                  <h4>Formas de envío</h4>
                </div>
                <div className="section-pay-send-subtitle">
                  <span>
                    <FontAwesomeIcon icon={faTruck} />
                  </span>
                  <p>Envíos gratis a todo el país</p>
                </div>
                <div className="section-pay-send-description">
                  <p>
                    Es el servicio de kiero que permite recibir tus productos de
                    forma rapida y segura
                  </p>
                  <p>*Este producto viene desde Estados Unidos</p>
                  <p>*Entrega de 3 a 9 días hábiles</p>
                  <p>*Envío gratis</p>
                </div>
              </div>
            </div>
            <div className="pay-section-pc" id="pay-section">
              <Pay
                props={this.props}
                pid={this.state.mdata.product_id}
                pgid={this.state.mdata.product_id} //aqui va product_global_id
                m_pgid={this.state.m_pgid}
                seller={this.state.mdata.user}
                price={this.state.mdata.price}
                title={this.state.mdata.title}
                stock={this.state.mdata.stock}
                reloadDetails={this.reLoadData}
              />
            </div>
          </div>
          <section className="questions-movil no-web">
            <div className="section-pay-wrap-seller no-movil">
              <Seller productId={this.state.mdata.product_id} />
            </div>
            {/* <QuestionItem product_id={this.state.mdata.product_id} q questions={this.state.questions} /> */}

						{/* <Explorer />
          </section>
            
          <section className='no-movil'>
            <Explorer /> */}
					</section>
					<section className="advertising-movil no-movil no-web">
						<ProductCardFinding
							notitle={'true'}
							category={this.state.mdata.category ? this.state.mdata.category.name : ''}
						/>
					</section>
				</div>

        <Footer />
        <div className="footer-social">
            <a href={urlSic} rel="noopener noreferrer" target="_blank">
              <img loading="lazy" alt="Superintendencia de Industria y Comercio" src={Logo1} />
            </a>
            <a href={urlSic} rel="noopener noreferrer" target="_blank">
              <img loading="lazy" alt="Superintendencia de Industria y Comercio" src={Logo2} />
            </a>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductDetail);
