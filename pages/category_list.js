import React from "react";
import Head from 'next/head';
import CategoryList from "../components/CategoryList/";
import { Component } from "react";
import PropTypes from "prop-types";
import { isAuthenticated, getUser } from "../lib/auth";

export default class category_list extends Component {

    static propTypes = {
        user: PropTypes.string,
        authenticated: PropTypes.bool
    };

    static async getInitialProps(ctx) {
        return {
            user: getUser(ctx),
            authenticated: isAuthenticated(ctx)
        };
    }

    render() {
        return (
            <div className="home">
                <Head>
                    <title>Kiero | Home</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <CategoryList user_data={this.props} />
            </div>
        );
    }
}
