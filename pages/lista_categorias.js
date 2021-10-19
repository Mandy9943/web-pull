import React from 'react';
import Head from 'next/head';
import CategoriesMovil from "../components/Common/CategoriesMovil/CategoriesMovil";
import { Component } from "react";
import { getData } from "../services/userApi";
import favicon from "../assets/img/favicon.svg";




export default class lista_categorias extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal2: false,
            showCategories: false,
            categories: [],
            showMenu: false,
        }
    }

    changeSearcherValue = (event) => {
        this.setState({ query: event.target.value })
    }


    handleChange = (e) => {
        this.setState({ query: e.target.value })
    }

    toggleModal = (modal) => {
        const newState = { ...this.state };
        newState[`modal${modal}`] = !newState[`modal${modal}`] ? true : false;
        this.setState(newState);
    }

    showHideMenu = () => {
        this.setState({ showMenu: !this.state.showMenu })
    }

    menuBlur = () => {
        setTimeout(() => this.setState({ showMenu: false }), 200);
    }

    componentDidMount() {
        // getData("/getMenuCategories")
        getData("/getCategoriesForMenu")
            .then((response) => {
                this.setState({ categories: response.data });
            });
    }

    mouseEnter = () => {
        this.setState({ showCategories: true });
    }

    mouseLeave = () => {
        this.setState({ showCategories: false });
    }


    render() {
        // console.log(this.state.categories);

        return (
            <div>
                <Head>
                    <title>Kiero | Categorias</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta name="robots" content="index,follow" />
                    <meta name="robots" content="noodp" />
                    <meta name="robots" content="noydir" />
                    <meta name="description" content="Descubre miles de productos al mejor precio. Envios gratis
                    a todo el pais, encuentra lo que buscas en Kiero.co" />
                    <link rel="icon" href={favicon} type="image/png" />
                </Head>
                <CategoriesMovil toggle={this.mouseLeave} num="2" categories={this.state.categories} />
            </div>
        )
    }
    
}
