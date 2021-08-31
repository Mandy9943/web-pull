import React, {useState} from "react";
import { useRouter,  } from "next/router";
import Head from "next/head";
import { getUser, isAuthenticated, getJwt } from "../lib/auth";
import Header from "../components/Common/Header/Header";
import Footer from "../components/Common/Footer/Footer";
import './sass/order.css';
import favicon from "../assets/img/favicon.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck, faWindowClose, faHourglassHalf

} from "@fortawesome/free-solid-svg-icons";

function PayStatus({ data, u_data }) {
  const router = useRouter()

  const [params, setparams] = useState([])

  React.useEffect(() => {
      const paramsUrl = router.query
      setparams(paramsUrl)
      if(paramsUrl.extra4!==undefined) {
          var listValue = paramsUrl.extra4.split("~")

          if(paramsUrl.lapResponseCode == "APPROVED"){
              dataLayer.push({
                  event: 'purchase',
                  'ecommerce': {
                      'purchase': {
                          'actionField': {
                              'id': paramsUrl.transactionId,                         // Transaction ID. Required for purchases and refunds.
                              'affiliation': 'SpiceStock',
                              'revenue': paramsUrl.TX_VALUE.toString(),                     // Total transaction value (incl. tax and shipping)
                              'tax':paramsUrl.TX_TAX.toString(),
                              'shipping': '0',
                              //'coupon': 'SUMMER_SALE'
                          },
                          'products': [{                            // List of productFieldObjects.
                              'name': listValue[0],     // Name or ID is required.
                              'id': listValue[1],
                              'price': listValue[2],
                              'brand': listValue[3],
                              'category': listValue[4],
                              'quantity': listValue[5]
                          }]
                      }
                  }
              });
          }

          else if(paramsUrl.lapResponseCode != "DECLINED" || "APPROVED"){
              dataLayer.push({
                  event:'pending_transaction',
                  ecommerce: {
                      pending_transaction: {
                          actionField: {
                              'id': paramsUrl.transactionId,                         // Transaction ID. Required for purchases and refunds.
                              'affiliation': 'SpiceStock',
                              'revenue': paramsUrl.TX_VALUE.toString(),                     // Total transaction value (incl. tax and shipping)
                              'tax':paramsUrl.TX_TAX.toString(),
                              'shipping': '0',
                              'aw_merchant_id': '0',
                              'aw_feed_country': 'CO',
                              'aw_feed_language': 'ES',
                          },
                          products: [{                            // List of productFieldObjects.
                              'name': listValue[0],     // Name or ID is required.
                              'id': listValue[1],
                              'price': listValue[2],
                              'brand': listValue[3],
                              'category': listValue[4],
                              'quantity': paramsUrl.extra3.toString(),                            // Optional fields may be omitted or set to empty string.
                          }
                          ]
                      }
                  }
              });
          }

      }
  }, [router.query]);


  https://kiero.co/pay_status?extra4=Firstfly%20Colorido%202pcs%20Delineador%20de%20ojos%20a%20prueba%20de%20agua%20Plumas%20Delineador%20de%20ojos%20Sombra%20de%20ojos%20Lápices%20Resalte%20Herramientas%20para%20el%20maquillaje%20de%20ojos%20Cosmético%200708~3720533~69024~firstfly~Delineadores~0&merchantId=530932&merchant_name=Kiero+International+Group+SAS&merchant_address=Carrera+54+%23+1A+-+54&telephone=6046458&merchant_url=&transactionState=4&lapTransactionState=APPROVED&message=APPROVED&referenceCode=kieroco-1630327561057&reference_pol=1627540481&transactionId=11842754-3322-4ab5-94e5-464eceeac3d1&description=Firstfly+Colorido+2pcs+Delineador+de+ojos+a+prueba+de+agua+Plumas+Delineador+de+ojos+Sombra+de+ojos+Lápices+Resalte+Herramientas+para+el+maquillaje+de+ojos+Cosmético+0708&trazabilityCode=797843&cus=797843&orderLanguage=es&extra1=3720533&extra2=16&extra3=1&polTransactionState=4&signature=792896dd56be377050bc45bb2d98b058&polResponseCode=1&lapResponseCode=APPROVED&risk=&polPaymentMethod=11&lapPaymentMethod=MASTERCARD&polPaymentMethodType=2&lapPaymentMethodType=CREDIT_CARD&installmentsNumber=1&TX_VALUE=69024.00&TX_TAX=.00&currency=COP&lng=es&pseCycle=&buyerEmail=gloria.castaneda%40kiero.co&pseBank=&pseReference1=&pseReference2=&pseReference3=&authorizationCode=R07847&TX_ADMINISTRATIVE_FEE=.00&TX_TAX_ADMINISTRATIVE_FEE=.00&TX_TAX_ADMINISTRATIVE_FEE_RETURN_BASE=.00&processingDate=2021-08-30


  return (
    <div className="order-page">
      <Head>
        {/* Google Tag Manager */}
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-TXNXPM7');`,
					}}
				/>
				{/* End Google Tag Manager */}
        <title>Kiero | Resultado de compra </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="robots" content="index,follow" />
        <meta name="robots" content="noodp" />
        <meta name="robots" content="noydir" />
        <meta name="description" content="Descubre miles de productos al mejor precio. Envios gratis a todo el pais, encuentra lo que buscas en Kiero.co" />
        <meta name="Keywords" content="Tienda en Línea" />
        <link rel="icon" href={favicon} type="image/png" />
      </Head>
      {/* Google Tag Manager (noscript) */}
			<noscript
				dangerouslySetInnerHTML={{
					__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TXNXPM7" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
				}}
			/>
			{/* End Google Tag Manager (noscript) */}
      <Header />
    
      {/* <div className="container-success">
        
      </div>  */}
      <section className="order-content">
        
        <section className="info">
          <h3 className="title">DATOS DE RESULTADO</h3>
          {/* <span className="user-id">USERID: <strong>{data.user_id}</strong></span> */}
          <span>Referencia de pago: <strong>{params.referenceCode}</strong></span>
          <span>SELLERID: <strong>{params.extra2}</strong></span>
          <span>Método de pago: <strong>{params.lapPaymentMethodType}</strong></span>
          <span>Estado del pago:<strong>{params.lapResponseCode == "APPROVED" ? "APROBADO" : params.lapResponseCode == "DECLINED" ? "RECHAZADO" : "PENDIENTE"}</strong> </span>
          {/* <span>Total a pagar: <strong>{params.cus} </strong></span> */}
          <span className="name-product">Nombre del producto: <strong>{params.description}</strong></span>
        </section>
      
      </section>
      <div className="go-purchases-link">
         <Link href="/">
          <a>
              <p>Ir a compras</p>
          </a>
        </Link>
      </div>
        
      <Footer />
    </div>
  );
}




export default PayStatus
