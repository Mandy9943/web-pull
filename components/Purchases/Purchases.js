import React, { Component } from 'react';
import Link from 'next/link';
import "./Purchases.css";
import ProductItem from '../ProductItem/ProductItem';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { getData } from "../../services/userApi";
import ProductCard from "../ProductCard";
import OptionList from '../OptionList/OptionList';
import AccountStoreSales from '../AccountStore/AccountStoreSales/AccountStoreSales'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faThList } from "@fortawesome/free-solid-svg-icons";



export default class Purchases extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            error: null
        }
    }

    componentDidMount() {
        const endp = this.props.mode === "sell" ? "/getSells" : "/getOrders"
        getData(endp, this.props.user.jwt)
            .then((response) => {
                this.setState({ orders: response.data });
            });
    }

    render() {
        let mde = this.props.mode;
        let orderList = this.state.orders.map(function (order, i) {
            return <ProductItem key={i} order={order} mode={mde} />;
        });

        return (
            <div className="purchase-list">
                <h1 className="status-title">{this.props.mode === "sell" ? "Mis ventas" : "Mis Compras"}</h1>
                {this.props.mode === "sell" ? <>
                    <AccountStoreSales />
                    <div className="account-store-sales-wrap-search">
                        <div className="account-store-sales-wrap-filter">
                            <p>
                                <FontAwesomeIcon icon={faThList} /> Filtrar y ordenar
                        </p>
                            <div className="account-store-sales-wrap-input-search">
                                <span>
                                    <FontAwesomeIcon icon={faSearch} />
                                </span>
                                <input className="account-store-sales-input-search" placeholder='buscar por # o titulo' />
                            </div>
                        </div>
                        <span className="sub-title"> {this.state.orders.length} ventas</span>
                    </div>

                        {this.state.orders.length===0 ?
                            <section className="empty-text">
                                <span>No tiene ninguna venta</span>
                            </section>
                            : orderList
                        }
                </>
                    : <>

                        {this.state.orders.length===0 ?
                            <section className="empty-text">
                                <span>No tiene compras anteriores</span>
                            </section>
                            : orderList
                        }
                    </>
                }
            </div>
        )
    }
}
