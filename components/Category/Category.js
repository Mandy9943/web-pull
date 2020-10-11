import React, { Component } from "react";
import "./Category.css";
import Filter from "./../Filter";
import ListCategory from "./../ListCategory";
import Footer from "../Common/Footer";
import Nav from "../Common/Nav/Nav";
import Pagination from "../Common/Pagination/Pagination";

import {searchProduct, getProductsBasic, searchProducts, searchFilters} from "../../services/productsApi"
import {compareValues} from "../../lib/functions";

class  Category extends Component {

  constructor(props) {
    super(props);
    this.state = {
      format: "grid",
      data: [],
      filters: [],
      products: null,
      page: 1,
      totalPages: 1,
      filterSort: '',
      filterOrder: '',
      totalItems: '',
    };
  }

  componentDidMount(){
    this.loadProducts(1)
    this.loadAllFilters()
  }

  toggleFormat = (format) => {
    this.setState(format);
  }

  sendToFilters = (data) => {
    this.setState({data: data})
  }

  changePage = (p) => {
    this.setState({page: p})

    this.loadProducts(p)
  }

  applyFilter = (type, value) => {
    let tmp_filters = this.state.filters;
    const new_val = type + "|" + value;

    // Remove previous filter by type
    tmp_filters.forEach((value, index) => {
      const item = value.split('|');

      if (item[0] === type) {
        tmp_filters.splice(index, 1);
      }
    })

    if (tmp_filters.indexOf(new_val) == -1) {
      tmp_filters.push(new_val);
    }

    this.setState( {
      filters: tmp_filters,
      page: 1,
    });

    this.loadProducts(1)
    this.loadAllFilters()
  }

  removeFilter = (index) => {
    let tmp_filters = this.state.filters; 
    tmp_filters.splice(index, 1);
    this.setState( {
      filters: tmp_filters,
      page: 1,
    });

    this.loadProducts(1)
  }

  sortProducts = (sortType) => {
    switch (sortType) {
      case '1':
        this.loadProducts(1,'price_','desc')
        break;
      case '2':
        this.loadProducts(1, 'price_','asc')
        break;
      default:
        this.loadProducts(1)
    }

    this.setState({page: 1})
  }

  loadProducts(page, sortBy='', orderBy='') {
    this.setState({
      products: null,
    })
    let price = '';
    let brand = '';
    let category = '';

    // Filters
    this.state.filters.forEach(value => {
      const item = value.split('|');

      switch (item[0]) {
        case 'price':
          let valueArray = value.split('|')[1].split(' ');

          valueArray[0] === 'Desde' ? price = parseFloat(valueArray[1])  + '-' + parseFloat(valueArray[3]) :
              price = parseFloat(valueArray[2])  + '-' + this.state.data.max_price;
          break
        case 'brand':
          brand = value.split('|')[1];
          break
        case 'category':
          category = value.split('|')[1];
      }
    })

    let products = searchProducts(this.props.data.params.items_per_page, page, this.props.data.search, brand, price, category, sortBy, orderBy)

    products.then((response) => {
      this.setState({
        products: response.data.results,
        totalPages: Math.ceil(response.data.total/this.props.data.params.items_per_page),
        totalItems: response.data.total,
      })
    })
  }

  loadAllFilters(level = '', category = '') {
    let filters = searchFilters(this.props.data.search, level, category)

    filters.then(response => {
      this.sendToFilters({
        'brands': response.data.catalog_brand.sort(compareValues('key')),
        'categories': response.data.catalog_category.sort(compareValues('key')),
        'max_price': response.data.catalog_price.max,
        'min_price': response.data.catalog_price.min
      })
    })
  }

  render() {
    return (
      <div className="search">
          <Nav user={this.props.user_data.user} home={true} jwt={this.props.user_data.jwt} actualSearch={this.props.data.search} authenticated={this.props.user_data.authenticated} />
        <div className="search-content">
          
          <Filter 
              applyFilter={this.applyFilter} 
              removeFilter={this.removeFilter} 
              filters={this.state.filters} 
              search={this.props.data.search} 
              data={this.state.data} 
              toggle={this.toggleFormat} 
              format={this.state.format}
              sortProducts={this.sortProducts}
              totalItems={this.state.totalItems}
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
