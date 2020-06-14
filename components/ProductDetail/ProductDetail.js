import React, { Component } from "react";
import Nav from "../Common/Nav";
import Footer from "../Common/Footer";
import DetailImg from "../DetailImg";
import Pay from "./../PaySection";
import Detail from "./../DetailProductInfo";
import Question from "./../Question";
import QuestionItem from "./../QuestionItem";
import ProductCardFinding from "./../Common/ProductCardFinding";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import "./ProductDetail.css";
import Link from "next/link";
import ProductsSlider from "./../ProductsSlider";
import Explorer from "../Common/Explorer";
import { getData } from "../../services/userApi";



class ProductDetail extends Component {

  constructor(props) {
      super(props);
      this.state = {
          questions: []
       }         

  }

  componentDidMount(){
    this.loadQuestions();
  }

  loadQuestions(){
    getData("/getQuestions/"+this.props.data.product_id)
    .then((response) => {
        this.setState({ questions: response.data });
    }).catch((error) => {
      console.error(error);
    });

  }

  render() {
    const mdata = this.props.data;
    const u_data = this.props.user_data;

    return (
      <div>
        <Nav user={u_data.user} authenticated={u_data.authenticated} />
        <div className="detail-content">
          <div className="breadcrumb">

          <Link href="/">
              <a>
                Home
              </a>
            </Link>

            <FontAwesomeIcon icon={faAngleRight} />

            <Link href={"/categoria/"+mdata.category.name}>
              <a>
                {mdata.category.name}
              </a>
            </Link>
          </div>
          <div className="wrap-section-1">
            <div className="wrap-product">
              <DetailImg images={mdata.images}/>
              <div className="wrap-slider-product-detail">
              <ProductsSlider images={mdata.images} category={mdata.category.name} />
              </div>
              <div className="pay-section-responsive">
                <Pay pid={mdata.product_id} seller={mdata.user} price={mdata.price} title={mdata.title} stock={mdata.stock} />
              </div>
              <Detail desciption={mdata.description}/>
              <Question user_data={this.props.user_data} product_id={mdata.product_id}  cb={this.loadQuestions} />
              <QuestionItem questions={this.state.questions} />
            </div>
            <div className="pay-section-pc">
              <Pay pid={mdata.product_id}  seller={mdata.user} price={mdata.price} title={mdata.title} stock={mdata.stock} />
            </div>
          </div>
          <Explorer />
          <ProductCardFinding notitle={"true"} category={mdata.category.name} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProductDetail;
