import React, { Component } from "react";
import "./Category.css";
import Filter from "./../Filter";
import ListCategory from "./../ListCategory";
import Footer from "../Common/Footer";
import Nav from "../Common/Nav/Nav";
import Pagination from "../Common/Pagination/Pagination";

import {searchProduct, getProductsBasic, searchProducts, searchFilters} from "../../services/productsApi"
import {compareValues, } from "../../lib/functions";
import FilterTop from "../Filter/FilterTop";
import { getData } from "../../services/userApi";
import redirect from "../../lib/redirect";
import Error from "next/error";

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
      treeSelectedCategory: [],
      existsCategoryMenu: true,
      categoryLevel: '',
    };
  }

  componentDidMount() {
    if (this.props.data.type === 'category') {
      getData("/getMenuCategories")
      .then((response) => {
          response.data.forEach(value => {
            this.findCategoryLevel(value)
          })
      }).then(() => {
        if (this.state.categoryLevel == '') {
          this.setState({existsCategoryMenu: false})
        }
      });
    }

    if (this.props.data.type !== 'category') {
      this.loadProducts(1)
      this.loadAllFilters()
    }
  }

  findCategoryLevel = (target, level = 1) => {
	if (target.name == this.props.data.search) {
	  this.loadProducts(1, '', '', this.props.data.search)
      this.loadAllFilters(level.toString(), this.props.data.search)
      this.setState({categoryLevel: level})

    } else if (target.childs && target.childs.length > 0) {
      level++

      for (const key in target.childs) {
        this.findCategoryLevel(target.childs[key], level);
      }
    }
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

  applyFilter = (type, value, categoryLevel='', loadFilter=true) => {
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

    this.loadProducts(1, '', '', categoryLevel)
    if (loadFilter) this.loadAllFilters()
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
        this.loadProducts(1,'price','desc')
        break;
      case '2':
        this.loadProducts(1, 'price','asc')
        break;
      default:
        this.loadProducts(1)
    }

    this.setState({page: 1})
  }

  loadProducts(page, sortBy='', orderBy='', categoryLevel='') {
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

    let products = searchProducts(this.props.data.params.items_per_page, page, this.props.data.search, brand, price, category, sortBy, orderBy, categoryLevel)

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
      let mergedCategories = []

      let newCategories = response.data.catalog_category.map(item => (
          {
            "key": item.key,
            "label": `${item.key} (${item.doc_count})` ,
            "items": null,
            "level": response.data.level,
          }
        )).sort(compareValues('label'))

      if (this.state.treeSelectedCategory.length === 0 || this.props.data.type === 'category') {
        mergedCategories = newCategories
      } else {
        mergedCategories = this.state.data.categories

        switch (this.state.treeSelectedCategory.length) {
          case 1:
            mergedCategories.forEach((value, index) => {
              if (index !== this.state.treeSelectedCategory[0].index) {
                value.items = null
                value.selected = false
              } else {
                value.items = newCategories
                value.selected = true
              }
            })
            break
          case 2:
            mergedCategories[this.state.treeSelectedCategory[0].index].items.forEach((value, index) => {
              if (index !== this.state.treeSelectedCategory[1].index) {
                value.items = null
                value.selected = false
              } else {
                value.items = newCategories
                value.selected = true
              }
            })
            break
          case 3:
            mergedCategories[this.state.treeSelectedCategory[0].index].
                items[this.state.treeSelectedCategory[1].index].items.forEach((value, index) => {
              if (index !== this.state.treeSelectedCategory[2].index) {
                value.items = null
                value.selected = false
              } else {
                value.items = newCategories
                value.selected = true
              }
            })
            break
          case 4:
            mergedCategories[this.state.treeSelectedCategory[0].index].
                items[this.state.treeSelectedCategory[1].index].
                items[this.state.treeSelectedCategory[2].index].items.forEach((value, index) => {
              if (index !== this.state.treeSelectedCategory[3].index) {
                value.items = null
                value.selected = false
              } else {
                value.items = newCategories
                value.selected = true
              }
            })
        }
      }
      this.sendToFilters({
        'brands': response.data.catalog_brand.sort(compareValues('key')),
        'categories': mergedCategories,
        'max_price': response.data.catalog_price.max,
        'min_price': response.data.catalog_price.min
      })
    })
  }

  onSelectCategory = (node, index) => {
    if (this.props.data.type === 'category') {
      redirect("/categoria/" + node.key);
    }

    if (node.level === 0) {
      this.setState({treeSelectedCategory: [{"index": index, "key": node.key, "level": 0}]})
    } else {
      let tmpTreeSelectedCategory = this.state.treeSelectedCategory
      tmpTreeSelectedCategory = tmpTreeSelectedCategory.slice(0, node.level)
      tmpTreeSelectedCategory.push({"index": index, "key": node.key, "level": node.level})
      this.setState({treeSelectedCategory: tmpTreeSelectedCategory})
    }
    this.applyFilter('category', node.key, (node.level).toString(), false)
    this.loadAllFilters((node.level+1).toString(), node.key)
  }

  render() {
    return this.state.existsCategoryMenu ? (
      <div className="search">
        <Nav user={this.props.user_data.user} home={true} jwt={this.props.user_data.jwt} actualSearch={this.props.data.search} authenticated={this.props.user_data.authenticated} />

        <FilterTop
               sortProducts={this.sortProducts}
               removeFilter={this.removeFilter}
               totalItems={this.state.totalItems}
               filters={this.state.filters}
               search={this.props.data.search}
               format={this.state.format}
               toggle={this.toggleFormat}
               treeSelectedCategory={this.state.treeSelectedCategory}
               onSelectCategory={this.onSelectCategory}
               isSearch={this.props.data.type === 'search'}
        />
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
              onSelectCategory={this.onSelectCategory}
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
    ) : (
        <Error statusCode={404} />
    )
  }
}

export default Category;
