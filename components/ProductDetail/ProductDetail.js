import React, { Component } from "react";
import Nav from "../Common/Nav";
import Footer from "../Common/Footer";
import FooterMovil from "../Common/FooterMovil";
import DetailImg from "../DetailImg";
import Pay from "./../PaySection";
import Detail from "./../DetailProductInfo";
import Question from "./../Question";
import QuestionItem from "./../QuestionItem";
import ProductCardFinding from "./../Common/ProductCardFinding";
import "./ProductDetail.css";
import Link from "next/link";
import ProductsSlider from "./../ProductsSlider";
import Explorer from "../Common/Explorer";
import { getData } from "../../services/userApi";
import PayCredit from "../../assets/img/pay-credit.png";
import iconCredit from "../../assets/img/card.svg";
import PayOnline from "../../assets/img/pay-online.png";
import PayTransfer from "../../assets/img/pay-transfer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Logo1 from "../../assets/img/logo-social.png";
import Logo2 from "../../assets/img/logo-social1.png";
import Seller from "./../SellerInfo";

class ProductDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: []
    }

  }

  componentDidMount() {
    this.loadQuestions();
  }

  loadQuestions = () => {
    getData("/getQuestions/" + this.props.data.product_id)
      .then((response) => {
        this.setState({ questions: response.data });
      }).catch((error) => {
        console.error(error);
      });

  }

  render() {
    const mdata = this.props.data;
    const u_data = this.props.user_data;
    let url = "//www.sic.gov.co";

    console.error(mdata.width+"test de la data")

    return (
      <div>
        <Nav user={u_data.user} jwt={u_data.jwt} home={true} authenticated={u_data.authenticated} />
        <div className="detail-content">
          <div className="breadcrumb">
            <Link href="/">
              <a>
                Inicio
              </a>
            </Link>

            {mdata.breadcum.map((item, i) => (
                <><FontAwesomeIcon icon={faAngleRight} />
                  <Link key={i} href="/categoria/[category]" as={"/categoria/" + item.name}>
                    <a>
                      {item.name}
                    </a>
                  </Link></>
            ))}
          </div>
          <div className="wrap-section-1">
            <div className="wrap-product">
              <DetailImg images={mdata.images} category={mdata.category.name} product_name={mdata.title} />
              <div className="pay-section-responsive">
                <Pay pid={mdata.product_id} seller={mdata.user} price={mdata.price} title={mdata.title} stock={mdata.stock} />
              </div>
              <Detail width={mdata.width} length={mdata.length} weight={mdata.weight} title={mdata.title} product_name={mdata.title} desciption={mdata.description} />
              <Question user_data={this.props.user_data} product_id={mdata.product_id} cb={this.loadQuestions} />
              <section className="no-movil">
                <QuestionItem product_id={mdata.product_id} questions={this.state.questions} />
              </section>
              <div className="section-pay-type pay-movil no-web">
                <div className="section-pay-type-title">
                  <h4>Medios de pago</h4>
                </div>
                {/*{1 > 0 ?
                  <button className="main-button" onClick={() => this.go(this.props.pid)}><p>Comprar</p></button>
                : null} */}
                <div className="section-pay-type-items">
                  <p>Tarjetas de crédito</p>
                  <div>
                    <img src={PayCredit} />
                  </div>
                  <p>Efectivo en puntos de pago</p>
                  <div>
                    <img src={PayOnline} />
                  </div>
                  <p>Transferencia desde tu banco</p>
                  <div>
                    <img src={PayTransfer} />
                  </div>
                </div>
              </div>
              <div className="section-pay-send no-web">
                <div className="section-pay-send-title">
                  <h4>Formas de envio</h4>
                </div>
                <div className="section-pay-send-subtitle">
                  <span>
                    <FontAwesomeIcon icon={faTruck} />
                  </span>
                  <p>
                    Envíos gratis a todo el país
                    </p>
                </div>
                <div className="section-pay-send-description">
                  <p>
                    Es el servicio de kiero que permite recibir tus productos de forma
                    rapida y segura
                    </p>
                </div>
              </div>
            </div>
            <div className="pay-section-pc">
              <Pay pid={mdata.product_id} seller={mdata.user} price={mdata.price} title={mdata.title} stock={mdata.stock} />
            </div>
          </div>
          <section className="questions-movil no-web">
            <div className="section-pay-wrap-seller">
              <Seller seller={mdata.user} />
            </div>
            <QuestionItem product_id={mdata.product_id} q questions={this.state.questions} />
            <ProductsSlider images={mdata.images} category={mdata.category.name} />
            <ProductsSlider images={mdata.images} category={mdata.category.name} />
            <Explorer />
          </section>
            
          <section className='no-movil'>
            <Explorer />
            <ProductCardFinding notitle={"true"} category={mdata.category.name} />
          </section>
          <section className="advertising-movil no-movil no-web">
            <ProductCardFinding notitle={"true"} category={mdata.category.name} />
          </section>
        </div>      
          <Footer />
        <div className="footer-social">
          <Link href={url}><a target="_blank"><img src={Logo1} /></a></Link>
          <Link href={url}><a target="_blank"><img src={Logo2} /></a></Link>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
