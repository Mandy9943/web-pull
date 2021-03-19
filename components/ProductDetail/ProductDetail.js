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
import {RecommendedProducts} from '../RecommendedProducts';
import {getProductDetail} from "../../services/productsApi";
import { withRouter } from 'next/router'

class ProductDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      mdata: this.props.data,
      m_pgid: (props.data.variants.length == 0 || props.data.is_variant ) ? true : false
    }
    this.reLoadData = this.reLoadData.bind(this);
  }

  componentDidMount() {
    this.loadQuestions();
  }

  async reLoadData(pgid) {
    // Esta funcion se llama cuando se encuentra un match de variantes
    const router = this.props.router;
    const res = await getProductDetail(
        this.state.mdata.product_id,
        {params:{ is_variant: true, product_global_id: pgid}}
    );

    const data = await res.data;
    this.setState({
      mdata: data.data,
      m_pgid: true
    })

    // https://stackoverflow.com/a/62947231/7771926  <--- reference
    let url = `/detalle/${this.state.mdata.product_id}?is_variant=true&product_global_id=${pgid}`
    this.props.router.push('/detalle/[...product]', url, { shallow: true });
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
    const u_data = this.props.user_data;
    let url = "//www.sic.gov.co";

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

            {this.state.mdata.breadcum.map((item, i) => (
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
              <DetailImg images={this.state.mdata.images} category={this.state.mdata.category.name} product_name={this.state.mdata.title} />
              <div className="pay-section-responsive">
                <Pay
                    pid={this.state.mdata.product_id}
                    pgid={this.state.mdata.product_global_id}
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
                <ProductsSlider category={this.state.mdata.category.name} />
              </div>
              <Detail width={this.state.mdata.width} length={this.state.mdata.length} weight={this.state.mdata.weight} title={this.state.mdata.title} product_name={this.state.mdata.title} desciption={this.state.mdata.description} />
              <Question user_data={this.props.user_data} product_id={this.state.mdata.product_id} cb={this.loadQuestions} />
              <section>
                <QuestionItem product_id={this.state.mdata.product_id} questions={this.state.questions} />
              </section>
              <div className="section-pay-type pay-movil no-web">
                <div className="section-pay-type-title">
                  <h4>Medios de pago</h4>
                </div>
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
                  <h4>Formas de envío</h4>
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
              <Pay
                  pid={this.state.mdata.product_id}
                  pgid={this.state.mdata.product_global_id}
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
            <ProductsSlider images={this.state.mdata.images} category={this.state.mdata.category.name} />
            
            
            {/* <Explorer />
          </section>
            
          <section className='no-movil'>
            <Explorer /> */}
            
          </section>
          <section className="advertising-movil no-movil no-web">
            <ProductCardFinding notitle={"true"} category={this.state.mdata.category.name} />
          </section>
        </div>      
          <div className="home-content  no-movil">
            <ProductsSlider category={this.state.mdata.breadcum[1]?.name} />
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

export default withRouter(ProductDetail);
