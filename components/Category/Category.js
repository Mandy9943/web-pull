import React, {Component} from 'react';
import {useHistory} from 'react-router-dom';
import './Category.css';
import Filter from './../Filter';
import ListCategory from './../ListCategory';
import Footer from '../Common/Footer';
import Nav from '../Common/Nav/Nav';
import Pagination from '../Common/Pagination/Pagination';
import {
    searchProduct,
    getProductsBasic,
    searchProducts,
    searchFilters, getProductDetail,
} from '../../services/productsApi';
import {categoryApi} from '../../lib/config';

import {compareValues} from '../../lib/functions';

import {getData} from '../../services/userApi';
import redirect from '../../lib/redirect';
import Error from 'next/error';
import {apiget} from '../../lib/request';
import {difference} from 'lodash';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: 'grid',
            data: [],
            filters: [],
            products: null,
            page: props.page !== undefined ? props.page : 1,
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
        // window.addEventListener('beforeunload', this.removeLocalStorage);
        const currentPage = window.location.href.split('');
        const prevPage = document.referrer.split('');
        const minor = currentPage.length > prevPage.length ? prevPage : currentPage;
        const equals = currentPage.filter((value, index) => value === prevPage[index]);

        if (minor.length > equals.length + 1) {
            localStorage.removeItem('filters');
            this.removeFilter;
        }

        const storage = JSON.parse(localStorage.getItem('filters'));
        if (storage) {
            const filter1 = storage.appliedFilters[0]
                ? storage.appliedFilters[0].split('|')
                : '';
            const filter2 = storage.appliedFilters[1]
                ? storage.appliedFilters[1].split('|')
                : '';
            if (filter1 || filter2) {
                this.applyFilter(filter1[0], filter1[1]);
                this.applyFilter(filter2[0], filter2[1]);
            }
        }

        if (this.props.data.type === 'category') {
            //buscar nivel de la categoria
            let categoryLevel = this.searchCategoryLevel(this.props.data.search);
            categoryLevel.then((response) => {
                this.setState({
                    categoryLevel: response.data.results.length > 0 ? response.data.level : '',
                });
                this.loadProducts(this.state.page, '', '', this.props.data.search);
                if (this.state.categoryLevel === '') {
                    this.setState({existsCategoryMenu: false});
                } else {
                    this.loadAllFilters(
                        (this.state.categoryLevel + 1).toString(),
                        this.props.data.search
                    );
                }
            });
        }

        if (this.props.data.type !== 'category') {
            this.loadProducts(this.state.page);
            this.loadAllFilters();
        }
    }

    searchCategoryLevel = (name = '') => {
        try {
            // const params = new URLSearchParams();
            // params.append('category', name !== '' ? name: 'xxxx');
            let endpoint = categoryApi + '/' + name;
            return apiget(endpoint);
        } catch (error) {
            return error;
        }
    };

    toggleFormat = (format) => {
        this.setState(format);
    };

    sendToFilters = (data) => {
        this.setState({data: data});
    };

    changePage = (p) => {
        this.setState({page: p});
        document.location = `${this.props.path.split('?')[0]}?page=${p}`;
        // console.log(document.location);
        this.loadProducts(p);
        // console.log(p);
    };

    applyFilter = (type, value, categoryLevel = '', loadFilter = true) => {
        // console.log(value);
        // console.log(categoryLevel);
        let tmp_filters = this.state.filters;
        const new_val = type + '|' + value;
        // Remove previous filter by type
        tmp_filters.forEach((value, index) => {
            const item = value.split('|');
            if (item[0] === type) {
                tmp_filters.splice(index, 1);
            }
        });

        if (tmp_filters.indexOf(new_val) === -1) {
            tmp_filters.push(new_val);
        }

        this.setState({
            filters: tmp_filters,
            page: this.state.page,
        });

        this.loadProducts(1, '', '', categoryLevel);
        if (loadFilter) this.loadAllFilters();
    };

    removeFilter = (index) => {
        let tmp_filters = this.state.filters;
        tmp_filters.splice(index, 1);
        this.setState({
            filters: tmp_filters,
            page: 1,
        });

        this.loadProducts(1);
    };

    sortProducts = (sortType) => {
        switch (sortType) {
            case '1':
                this.loadProducts(1, 'price', 'desc');
                break;
            case '2':
                this.loadProducts(1, 'price', 'asc');
                break;
            default:
                this.loadProducts(1);
        }

        this.setState({page: 1});
    };

    loadProducts(page, sortBy = '', orderBy = '', categoryLevel = '') {
        this.setState({
            products: null,
        });
        let price = '';
        let brand = '';
        let category = '';

        // Filters
        this.state.filters.forEach((value) => {
            const item = value.split('|');

            switch (item[0]) {
                case 'price':
                    let valueArray = value.split('|')[1].split(' ');
                    valueArray[0] === 'Desde'
                        ? (price = parseFloat(valueArray[1]) + '-' + parseFloat(valueArray[3]))
                        : (price = parseFloat(valueArray[2]) + '-' + this.state.data.max_price);
                    break;
                case 'brand':
                    brand = value.split('|')[1];
                    break;
                case 'category':
                    category = value.split('|')[1];
            }
        });

        // let dataProducts = searchProducts(
        // 	this.props.data.type,
        // 	5000,
        // 	page,
        // 	this.props.data.search,
        // 	brand,
        // 	price,
        // 	category,
        // 	sortBy,
        // 	orderBy,
        // 	categoryLevel
        // );

        // dataProducts.then((response) => {
        // 	console.log('dataProducts', response.data.results);
        // 	console.log()
        // });
        searchProducts(
            'search',
            // this.props.data.type,
            this.props.data.params.items_per_page,
            page,
            this.props.data.search,
            brand,
            price,
            category,
            sortBy,
            orderBy,
            categoryLevel
        ).then((response) => {
            let products = [];
            for (let resultsKey in response.data.results) {
                let product_index = response.data.results[resultsKey]
                getProductDetail(product_index.product_id).then(resp => {
                    let data_product = resp.data.data
                    if (data_product.status === 1 && data_product.stock > 0) {
                        products.push(product_index)
                        this.setState({
                            products: products,
                            totalPages: Math.ceil(
                                response.data.total / this.props.data.params.items_per_page
                            ),
                            totalItems: response.data.total,
                        });
                    }
                })
            }

        });
    }

    loadAllFilters(level = '', category = '') {

        let filters = searchFilters(this.props.data.search, level, category);

        filters.then((response) => {
            let mergedCategories = [];
            // console.log(response);
            let newCategories = response.data.catalog_category
                .map((item) => ({
                    key: item.key,
                    label: `${item.key} (${item.doc_count})`,
                    items: null,
                    level: response.data.level,
                }))
                .sort(compareValues('label'));

            if (
                this.state.treeSelectedCategory.length === 0 ||
                this.props.data.type === 'category'
            ) {
                mergedCategories = newCategories;
            } else {
                mergedCategories = this.state.data.categories;

                switch (this.state.treeSelectedCategory.length) {
                    case 1:
                        mergedCategories.forEach((value, index) => {
                            if (index !== this.state.treeSelectedCategory[0].index) {
                                value.items = null;
                                value.selected = false;
                            } else {
                                value.items = newCategories;
                                value.selected = true;
                            }
                        });
                        break;
                    case 2:
                        mergedCategories[this.state.treeSelectedCategory[0].index].items.forEach(
                            (value, index) => {
                                if (index !== this.state.treeSelectedCategory[1].index) {
                                    value.items = null;
                                    value.selected = false;
                                } else {
                                    value.items = newCategories;
                                    value.selected = true;
                                }
                            }
                        );
                        break;
                    case 3:
                        mergedCategories[this.state.treeSelectedCategory[0].index].items[
                            this.state.treeSelectedCategory[1].index
                            ].items.forEach((value, index) => {
                            if (index !== this.state.treeSelectedCategory[2].index) {
                                value.items = null;
                                value.selected = false;
                            } else {
                                value.items = newCategories;
                                value.selected = true;
                            }
                        });
                        break;
                    case 4:
                        mergedCategories[this.state.treeSelectedCategory[0].index].items[
                            this.state.treeSelectedCategory[1].index
                            ].items[this.state.treeSelectedCategory[2].index].items.forEach(
                            (value, index) => {
                                if (index !== this.state.treeSelectedCategory[3].index) {
                                    value.items = null;
                                    value.selected = false;
                                } else {
                                    value.items = newCategories;
                                    value.selected = true;
                                }
                            }
                        );
                }
            }
            this.sendToFilters({
                brands: response.data.catalog_brand.sort(compareValues('key')),
                categories: mergedCategories,
                max_price: response.data.catalog_price.max,
                min_price: response.data.catalog_price.min,
            });
        });
    }

    onSelectCategory = (node, index) => {
        if (this.props.data.type === 'category') {
            redirect('/categoria/' + node.key);
            return;
        }

        //buscar nivel de la categoria
        let categoryLevel = this.searchCategoryLevel(node.key);
        categoryLevel
            .then((response) => {
                this.setState({
                    categoryLevel: response.data.results.length > 0 ? response.data.level : '',
                });
            })
            .then(() => {
                if (this.state.categoryLevel === '') {
                    this.setState({existsCategoryMenu: false});
                } else {
                    if (this.state.categoryLevel === 0) {
                        this.setState({
                            treeSelectedCategory: [{index: index, key: node.key, level: 0}],
                        });
                    } else {
                        let tmpTreeSelectedCategory = this.state.treeSelectedCategory;
                        tmpTreeSelectedCategory = tmpTreeSelectedCategory.slice(
                            0,
                            this.state.categoryLevel
                        );
                        tmpTreeSelectedCategory.push({
                            index: index,
                            key: node.key,
                            level: this.state.categoryLevel,
                        });
                        this.setState({treeSelectedCategory: tmpTreeSelectedCategory});
                    }
                    this.applyFilter(
                        'category',
                        node.key,
                        this.state.categoryLevel.toString(),
                        false
                    );
                    this.loadAllFilters((this.state.categoryLevel + 1).toString(), node.key);
                }
            });
    };

    render() {
        // console.log("propiedades", this.products)
        return this.state.existsCategoryMenu ? (
            <div className="search">
                <Nav
                    user={this.props.user_data.user}
                    home={true}
                    jwt={this.props.user_data.jwt}
                    actualSearch={this.props.data.search}
                    authenticated={this.props.user_data.authenticated}
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
                        category={this.props.data.search}
                    />
                </div>
                <Pagination
                    filters={this.state.filters}
                    actual={this.state.page}
                    totalPages={this.state.totalPages}
                    cb={this.changePage}
                />
                <Footer/>
            </div>
        ) : (
            <Error statusCode={404}/>
        );
    }
}

export default Category;
