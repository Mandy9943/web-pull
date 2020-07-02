import React, { Component } from "react";
import "./Category.css";
import Filter from "./../Filter";
import ListCategory from "./../ListCategory";
import Footer from "../Common/Footer";
import Nav from "../Common/Nav/Nav";
import Pagination from "../Common/Pagination/Pagination";

import { searchProduct, getProductsBasic } from "../../services/productsApi"

class  Category extends Component {

  constructor(props) {
    super(props);
    this.state = { format: "list",
      data: null,
      filters: [],
      products:null,
      page: 1,
      totalPages: 1
    };
    this.toggleFormat = this.toggleFormat.bind(this);
  }

  toggleFormat(format) {
    this.setState(format);
  }

  sendToFilters = (data) => {
    this.setState({data: data})
  }

  changePage = (p) => {
    this.setState({page: p})
  }


  applyFilter = (type, value) => {
    let tmp_filters = this.state.filters; 
    const new_val = type+"|"+value;
    if (tmp_filters.indexOf(new_val) == -1) {
      tmp_filters.push(new_val);
    }
    this.setState( { filters: tmp_filters } );
    this.getProducts();
  }

  removeFilter = (id) => {
    let tmp_filters = this.state.filters; 
    tmp_filters.splice(id, 1);
    this.setState( { filters: tmp_filters } );

    this.getProducts();
  }

  componentDidMount(){
    this.getProducts();
  }

  getProducts(){
    let res;

    const ipp = 0; //;

    this.setState({products:null})

    let c = [];
    for (let index = 0; index < this.state.filters.length; index++) {
      const element = this.state.filters[index].split("|");
      if(element[0]=="price"){
        if(element[1].indexOf("Más de ")==0){
          c.push(element[0]+"|"+element[1].replace("Más de ","").split(",").join("")+"_"+"-1");
        }else{
          c.push(element[0]+"|"+element[1].replace("Desde ","").replace(" Hasta ","_").split(",").join(""));
        }
      
      }else if(element[0]=="category"){
        c.push(element[0]+"|"+element[1].split(" (").slice(0,-1).join(" ("));
      }else if(element[0]=="brand"){
        c.push(element[0]+"|"+element[1].split(" (").slice(0,-1).join(" ("));
      }
    }

    if(this.props.data.type==="category"){
      if(c.join("||")!=""){
        res = getProductsBasic(this.props.data.search+"||"+c.join("||"), ipp);
      }else{
        res = getProductsBasic(this.props.data.search, ipp);
      }
    }else{
      if(c.join("||")!=""){
        res = searchProduct(this.props.data.search+"||"+c.join("||"), ipp);
      }else{
        res = searchProduct(this.props.data.search, ipp);
      }
    }

    res.then((r) => r.data).then( (r) => {
      this.setState({
        products: r,
        totalPages: Math.ceil(r.products.length/this.props.data.params.items_per_page)
      });
      let mr = {
        "brands": r.brands,
        "rows": (r.products ? r.products.length : 0),
        "categories": r.categories,
        "max_price": r.max_price,
        "min_price": r.min_price,
      };
      this.sendToFilters(mr)
    } );

  }

  render() {
    
    return (
      <div className="">
          <Nav user={this.props.user_data.user} actualSearch={this.props.data.search} authenticated={this.props.user_data.authenticated} />
        <div className="search-content">
          
          <Filter 
              applyFilter={this.applyFilter} 
              removeFilter={this.removeFilter} 
              filters={this.state.filters} 
              search={this.props.data.search} 
              data={this.state.data} 
              toggle={this.toggleFormat} 
              format={this.state.format} 
          />

          <ListCategory  
            sendToFilters={this.sendToFilters} 
            format={this.state.format} 
            products={this.state.products}
            page={this.state.page}
            item_per_page={this.props.data.params.items_per_page}
          />

        </div>
        <Pagination actual={this.state.page} totalPages={this.state.totalPages} cb={this.changePage}/>
        <Footer />
      </div>
    );
  }
}

export default Category;
