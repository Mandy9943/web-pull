import React, { Component } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck
} from "@fortawesome/free-solid-svg-icons";
import "./CategoryBanners.css";
import { baseUrl } from "../../../lib/config"
import { getFront } from "../../../lib/request"


class CategoryBanners extends Component {
  constructor(props) {
    super(props);
    this.state = { loadedBanners: false };
  }

  componentDidMount() {
    getFront("/getBanners/" + this.props.category)
        .then((response) => {
            console.log("im here.")
            console.log(response)
            if(response.data.files.length>0){
              this.setState({loadedBanners: true, files: response.data.files})
            }else{
              this.setState({loadedBanners: false, files: []})
            }

        });
  }



  render() {
    console.log(this.state.files)
    let urlBanner = "//kiero.co/images/resources/";
    return (
      <div className="category-banners">
        {this.state.loadedBanners &&
        <> 
        <h3 className="title">Compra por categoría</h3>
        <div className="group-category">
          {
              this.state.files.map((file, i) => {
                return(<section key={i} className="item">
                  <img src={baseUrl+file}/>
                </section>)
              })
          }
        </div>
        </>}
      </div>
    
    
    );
  }
}
export default CategoryBanners;
