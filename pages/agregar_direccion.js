import React from 'react';
import Head from "next/head";
import AddAddress from '../components/UserAccount/AddAddress/AddAddress';
import PropTypes from "prop-types";
import {
    getJwt,
    redirectIfNotAuthenticated
} from "../lib/auth";
import {completeData} from "../services/userApi";

export default class agregar_direccion extends React.Component {

    static propTypes = {
        user: PropTypes.string,
        authenticated: PropTypes.bool
    };

    static async getInitialProps(ctx) {
        if (redirectIfNotAuthenticated(ctx)) {
            return {};
        }

        return {
            jwt: getJwt(ctx)
        };
    }



    render() {
        return (
            <div>
                <Head>
                    <title>Kiero | Agregar dirección</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                </Head>
                <AddAddress jwt={this.props.jwt} />
            </div>
        )
    }

}
