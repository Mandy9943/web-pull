import React, { Component } from "react";
import "./PaySection.css";
import PayCredit from "../../assets/img/pay-credit.png";
import PayOnline from "../../assets/img/pay-online.png";
import PayTransfer from "../../assets/img/pay-transfer.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faTruck } from "@fortawesome/free-solid-svg-icons";
import Seller from "./../SellerInfo";
import Link from "next/link";
import ListProductMovil from "./../listProductMovil/listProductMovil";
// import Rating from '../RatingProduct/RatingProduct';
import ProductVariants from "../ProductVariants";
import { getVariantAvailable } from "../../services/productsApi";
import Select from "../Common/SelectDropdown/Select";
import Spinner from "../Common/Spinner";
import Checkbox from "@material-ui/core/Checkbox";
import Modal from "../Common/Modal/Modal";
import { KlaviyoClient } from "../../lib/functions";
import Cookies from "js-cookie";
import {handleFormatName} from '../../lib/functions'
import {handleFormatUrl} from '../../lib/functions'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Modal } from 'react-bootstrap';
import CryptoJS from 'crypto-js';

class PaySection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cantidad: 0,
      dimensions: {},
      variantsSpinner: props.m_pgid ? false : true,
      modalAddr: false,
      user: "",
      user_id: "",
      email: "",
      mobile_phone: "",
      city: "",
      region: "",
      address: "",
      neighborhood: "",
      lastName: "",
      dataTransaction: [],
      validForm: true,
      disabledButton: true,
      termsOfService: "",
      identification: "",
      typeIdentification: "",
      display: "none",
      gclid: "",
      clientId: "",
    };
  }

  toggleModalAddr = () => {
    this.setState({ modalAddr: !this.state.modalAddr, termsOfService: "" });
  };

  closeModalAfterSubmit = () => {
    setTimeout(() => {
      this.setState({
        modalAddr: !this.state.modalAddr,
        user: "",
        email: "",
        mobile_phone: "",
        city: "",
        address: "",
        termsOfService: "",
        identification: "",
        typeIdentification: "",
      });
    }, 2000);
  };

  componentDidMount() {
    //////
    // this.clientId = typeof(ga) == 'function' && typeof(ga.getAll) == 'function' ? ga.getAll()[0].get('clientId') : "";
    // this.gclid = Cookies.get('gclid');
    const dataInterval = setInterval(function () {
      if (!this.clientId && !this.gclid) {
        // clientId
        var gaCookie = Cookies.get("_ga");
        if (gaCookie) {
          var gaSplit = gaCookie.split(".");
          this.clientId = gaSplit[2] + "." + gaSplit[3];
        }
        // GCLID
        this.gclid = Cookies.get("gclid");
        if (!this.gclid) {
          var match = /gclid=([^&#]*)/.exec(window.location.search);
          this.gclid = match ? match[1] : undefined;
        }
        //////
      } else {
        dataGoogleAds(this.clientId, this.gclid);
        clearInterval(dataInterval);
      }
    }, 200);

    const dataGoogleAds = (clid, gclId) => {
      this.setState({
        gclid: gclId,
        clientId: clid,
      });
    };

    if (this.props.m_pgid) return;

    this.loadData();
  }

  go = (id) => {
    var quantity = this.state.cantidad == 0 ? 1 : this.state.cantidad;

    // dataLayer.push({ ecommerce: null });
    // let dataLayerBeginCheckout = {
    // 	'event': 'begin_checkout',
    // 	'ecommerce': {
    // 		'items': [{
    // 			'item_name': this.props.props.data.product_global_title, // Name or ID is required.
    // 			'item_id': this.props.props.data.product_global_id,
    // 			'price': this.props.props.data.price,
    // 			'item_brand': this.props.props.data.brand,
    // 			'quantity': this.state.cantidad == 0 ? 1 : this.state.cantidad,
    // 			'url':'https://kiero.co/detalle/' + this.props.props.data.product_global_id + '_' + this.props.props.data.product_global_title
    // 			.replaceAll(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
    // 			.replaceAll('//', '%2F')
    // 																							.replaceAll('%', '')
    // 																							.replaceAll(/['"]+/g, '')
    // 																							.split(' ')
    // 																							.join('-'),
    // 																						}]
    // 																					}
    // 	};
    // 	const beginCheckoutGooleDataLayerG4 = (dataLayerBeginCheckout) => {
    // 		this.props.props.data.breadcum.forEach((prod, index) => {
    // 			let keyCategory = `item_category${index + 1}`;
    // 			let valueNameCategory = prod.name;
    // 			dataLayerBeginCheckout['ecommerce']['items'][0][keyCategory] = valueNameCategory;
    // 		});
    // 		return dataLayerBeginCheckout;
    // 	}
    // 	let resultDataLayerBeginCheckout = beginCheckoutGooleDataLayerG4(dataLayerBeginCheckout);
    // 	dataLayer.push(resultDataLayerBeginCheckout);
    // if (typeof window !== 'undefined') {
    //     if (window.fbq != null) {
    //         window.fbq('track', 'InitiateCheckout', {
    //             content_ids: this.props.props.data.product_global_id,
    //             content_name: this.props.props.data.product_global_title,
    //             product_group: this.props.props.data.type,
    //             content_type: 'product',
    //             content_category: this.props.props.data.breadcum[0].name,
    //             contents: [
    //                 {
    //                     id: this.props.props.data.product_global_id,
    //                     quantity: this.state.cantidad == 0 ? 1 : this.state.cantidad,
    //                 },
    //             ],
    //             currency: 'COP',
    //             value: this.props.props.data.price,
    //             num_items: this.state.cantidad == 0 ? 1 : this.state.cantidad,
    //         });
    //     } else {
    //         fbq('track', 'InitiateCheckout', {
    //             content_ids: this.props.props.data.product_global_id,
    //             content_name: this.props.props.data.product_global_title,
    //             product_group: this.props.props.data.type,
    //             content_type: 'product',
    //             content_category: this.props.props.data.breadcum[0].name,
    //             contents: [
    //                 {
    //                     id: this.props.props.data.product_global_id,
    //                     quantity: this.state.cantidad == 0 ? 1 : this.state.cantidad,
    //                 },
    //             ],
    //             currency: 'COP',
    //             value: this.props.props.data.price,
    //             num_items: this.state.cantidad == 0 ? 1 : this.state.cantidad,
    //         });
    //     }
    // }

    fbq("track", "InitiateCheckout", {
      content_ids: this.props.props.data.product_global_id,
      content_name: this.props.props.data.product_global_title,
      product_group: this.props.props.data.type,
      content_type: "product",
      content_category: this.props.props.data.breadcum[0].name,
      contents: [
        {
          id: this.props.props.data.product_global_id,
          quantity: this.state.cantidad == 0 ? 1 : this.state.cantidad,
        },
      ],
      currency: "COP",
      value: this.props.props.data.price,
      num_items: this.state.cantidad == 0 ? 1 : this.state.cantidad,
    });

    // gtag('event', 'begin_checkout', {
    // 								"items": [
    // 											{
    // 												"id": this.props.props.data.product_global_id,
    // 												"name": this.props.props.data.product_global_title,
    // 												"list_name": "Search Results",
    // 												"brand": this.props.props.data.brand,
    // 												"category": concatCategories(),
    // 												"quantity": 5,
    // 												'price': this.props.props.data.price,
    // 												'url':'https://kiero.co/detalle/' + this.props.props.data.product_global_id + '_' + this.props.props.data.product_global_title
    // 																							.replaceAll(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
    // 																							.replaceAll('//', '%2F')
    // 																							.replaceAll('%', '')
    //																							.replaceAll(/['"]+/g, '')
    // 																							.split(' ')
    // 																							.join('-'),
    // 												"list_position": 0,
    // 											}
    // 								]
    // 	});
  };

  loadData = async () => {
    this.setState({
      variantsSpinner: true,
    });
    const res = await getVariantAvailable(this.props.pid, {});
    const data = await res.data;

    this.setState({
      dimensions: data.data,
      variantsSpinner: false,
      m_pgid: data.data.product_id ? true : false, //Aqui va product_global_id
    });
  };

  handleSelect = async (queryset) => {
    let params = {};
    // 1- Check if product is not available
    if (!queryset.available) {
      //  If it is not available query just that one
      params[queryset.name] = queryset.value;
    } else {
      //  If it's available, so you can mix with another previously selected variant
      // 2- Obtain selected keys
      let selectedDimensions = [];
      for (const key of Object.keys(this.state.dimensions).filter(
        (key) => key !== queryset.name && key !== "product_global_id"
      )) {
        for (const value of this.state.dimensions[key].values) {
          if (value.select) {
            selectedDimensions.push({ name: key, value: value.value });
          }
        }
      }

      // 3- Prepare query for selected dimensions
      // 3.1 Insert queryset into params
      params[queryset.name] = queryset.value;
      //
      // // 3.2 Insert selectedDimensions into params
      selectedDimensions.forEach((item) => {
        params[item.name] = item.value;
      });
    }

    // 4- Once I have the payload (params) fetch data
    const res = await getVariantAvailable(this.props.pid, { params: params }); // TODO handle exception
    const data = await res.data;

    // 5- Check if product_global_id is non null
    if (data.data.product_global_id) {
      this.props.reloadDetails(data.data.product_global_id);
    }

    // 6- If it is not a variant, update current data
    this.setState({ dimensions: data.data });
  };

  handleChangeCantidad = (event) => {
    this.setState({ cantidad: event.target.value });
  };

  renderPayButtonSection = (renderPayu) => {
    // const btnEnabled = <button type="submit" onClick={() => this.go(this.props.pgid)}>Comprar</button>;
    const btnEnabled = (
      // // <button type="submit" onClick={() => this.validateDataGoogle(renderPayu)}>
      <button type="submit" onClick={() => renderPayu()}>
        Comprar
      </button>
    );
    const btnDisabled = (
      <button
        style={{ opacity: "0.35", cursor: "not-allowed" }}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Comprar
      </button>
    );

    if (this.props.m_pgid) {
      let qty_options = {
        values: [],
      };

      if (Number(this.props.stock) > 0) {
        for (let i = 1; i <= this.props.stock; i++) {
          qty_options["values"][i - 1] = {
            available: true,
            text: `Cantidad: ${i} (stock disponible ${this.props.stock})`,
            value: i,
          };
        }
      }

      return qty_options.values.length > 0 ? (
        <div className="pay-item">
          <section className="select-icon">
            <Select
              items={qty_options}
              showDefault={false}
              onSelect={(qnt) => {
                this.setState({ cantidad: qnt });
              }}
            />
          </section>
          {btnEnabled}
        </div>
      ) : (
        <div className="pay-item info-pay-product-detail">
          <h3>Sin unidades disponibles.</h3>
          {btnDisabled}
        </div>
      );
    } else {
      return (
        <div className="pay-item">
          <div className="pay-item info-pay-product-detail">
            <h3>Debe seleccionar la variante deseada</h3>
          </div>
          {btnDisabled}
        </div>
      );
    }
  };

  validateNumber(name, value) {
    const pattern = new RegExp("^[0-9]*$");
    this.setState({
      [name]: pattern.test(value) ? value : value.slice(0, -1),
    });
  }

  validateText(name, value) {
    const pattern = new RegExp("^[a-zA-Z\u0080-\uFFFF ]+$");
    this.setState({
      [name]: pattern.test(value) ? value : value.slice(0, -1),
    });
  }

  validateForm = () => {
    const {
      user,
      lastName,
      email,
      mobile_phone,
      city,
      address,
      termsOfService,
      identification,
      typeIdentification,
    } = this.state;
    if (
      !user ||
      !email ||
      !mobile_phone ||
      !city ||
      !address ||
      !identification ||
      !typeIdentification ||
      !lastName
      // !region ||
      // !neighborhood
    ) {
      this.setState({ disabledButton: true, validForm: false });
    } else {
      // this.setState({modalAddr: false})
      this.setState({ disabledButton: false, validForm: true });
    }
  };

  validateFormFinal = () => {
    const {
      user,
      lastName,
      email,
      mobile_phone,
      city,
      address,
      termsOfService,
      identification,
      typeIdentification,
    } = this.state;
    if (
      !user ||
      !email ||
      !mobile_phone ||
      !city ||
      !address ||
      !identification ||
      !typeIdentification ||
      !lastName
      // !region ||
      // !neighborhood
    ) {
      this.setState({ disabledButton: true, validForm: false });
    } else {
      // this.setState({modalAddr: false})
      this.setState({ disabledButton: false, validForm: true });
      // this.renderWompi()
      // this.checkoutOption();
      this.checkout();
    }
  };

  checkout = () => {
    const concatCategories = () => {
      var dataCategory = [];
      this.props.props.data.breadcum.forEach((prod, index) => {
        dataCategory.push(prod.name);
      });
      return dataCategory.join(" / ");
    };
    var item = {
      currencyCode: "COP",
      actionField: {
        step: 1,
      },
      products: [
        {
          name: this.props.props.data.product_global_title, // Name or ID is required.
          id: this.props.props.data.product_global_id,
          price: this.props.props.data.price,
          brand: this.props.props.data.brand,
          category: concatCategories(),
          url:
            "https://kiero.co" + handleFormatUrl(this.props.props.data.product_global_id, this.props.props.data.product_global_title),
          quantity: this.state.cantidad == 0 ? 1 : this.state.cantidad,
        },
      ],
    };
    
    // dataLayer.push({
    //   event: "checkout",
    //   ecommerce: {
    //     checkout: item,
    //   },
    //   // 	'eventCallback': function(){
    //   //  	window.location = '/pagar/' + id + '/' + quantity;
    //   //  }
    // });

    // Segment Identify method
    // Link your users and their actions
    // Reference: https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/#identify
    analytics.identify(this.state.user_id, {
      firstName: this.state.user,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.mobile_phone,
      address: {
        city: this.state.city,
        street: this.state.address
      }
    });

    // Segment Checkout Step Completed event
    // Fire this event whenever a checkout step is completed.
    // Reference: https://segment.com/docs/connections/spec/ecommerce/v2/
    analytics.track("Checkout Step Completed", {
      // checkout_id: '50314b8e9bcf000000000000',	// Checkout transaction ID
      step: 2,
      shipping_method:	'None', //	String representing the shipping method chosen
      payment_method:	'Payu'	// representing the payment method chosen
    });

    KlaviyoClient.public.identify({
      email: this.state.email,
      properties: {
        first_name: this.state.user,
        last_name: this.state.lastName,
        phone_number: this.state.mobile_phone,
      },
      post: true, //defaults to false
    });
    KlaviyoClient.public.track({
      event: "Checkout",
      email: this.state.email,
      properties: {
        items: [item],
      },
    });
  };

  checkoutOption = () => {
    const concatCategories = () => {
      var dataCategory = [];
      this.props.props.data.breadcum.forEach((prod, index) => {
        dataCategory.push(prod.name);
      });
      return dataCategory.join(" / ");
    };

    // Facebook Pixel
    fbq("track", "InitiateCheckout", {
      content_ids: this.props.props.data.product_global_id,
      content_name: this.props.props.data.product_global_title,
      product_group: this.props.props.data.type,
      content_type: "product",
      content_category: concatCategories(),
      contents: [
        {
          id: this.props.props.data.product_global_id,
          quantity: this.state.cantidad == 0 ? 1 : this.state.cantidad,
        },
      ],
      currency: "COP",
      value: this.props.props.data.price,
      num_items: this.state.cantidad == 0 ? 1 : this.state.cantidad,
    });
    var item = {
      currencyCode: "COP",
      actionField: {
        step: 2,
        option: "form_complete",
      },
      products: [
        {
          name: this.props.props.data.product_global_title, // Name or ID is required.
          id: this.props.props.data.product_global_id,
          price: this.props.props.data.price,
          brand: this.props.props.data.brand,
          category: concatCategories(),
          url:
            "https://kiero.co" + handleFormatUrl(this.props.props.data.product_global_id, this.props.props.data.product_global_title),
          quantity: this.state.cantidad == 0 ? 1 : this.state.cantidad,
        },
      ],
    };

    // // GAnalytics
    // dataLayer.push({
    //   event: "checkoutOption",
    //   ecommerce: {
    //     checkout: item,
    //   },
    //   // 	'eventCallback': function(){
    //   //  	window.location = '/pagar/' + id + '/' + quantity;
    //   //  }
    // });

    if (Cookies.get("email") !== undefined)
      KlaviyoClient.public.track({
        event: "checkoutOption",
        email: Cookies.get("email"),
        properties: {
          items: [item],
        },
      });
  };

  handleFormValue = (e) => {
    let { name, value } = e.target;

    if (name === "mobile_phone") {
      this.validateNumber(name, value);
    }
    if (name === "city") {
      this.validateText(name, value);
    }
    if (
      name === "user" ||
      name === "lastName" ||
      name === "email" ||
      name === "address" ||
      name === "identification" ||
      name == "typeIdentification"
    ) {
      this.setState({ [name]: value });
    }
    if (name === "terms") {
      this.setState({
        termsOfService:
          this.state.termsOfService === 2 ? 1 : !this.state.termsOfService,
      });
      // console.elog;
    }
    //console.log(this.state.typeIdentification);
    this.validateForm();
  };

  validateDataGoogle = (callBack) => {
    this.setState({ display: "flex" });
    let awaitGoogle = setInterval(() => {
      if (document.readyState === "complete") {
        let clientId = this.state.clientId;
        let gclid = this.state.gclid;
        // The page is fully loaded
        if (clientId == "" && gclid == "") {
          null;
        } else {
          callBack();
          clearInterval(awaitGoogle);
        }
      }
    }, 300);
  };
  // randomPayReference = (length, chars) => {
  // 	var result = '';
  // 	for (var i = length; i > 0; --i)
  // 		result += chars[Math.round(Math.random() * (chars.length - 1))];
  // 	return result;
  // };
  //
  // renderWompi = () => {
  // 	// let userLogin = Cookies.get('user_id');
  // 	// let date = new Date();
  // 	let marketId = this.props.props.data.store_id;
  // 	let productId = this.props.props.data.product_global_id;
  // 	let quantity = this.state.cantidad == 0 ? 1 : this.state.cantidad;
  // 	let priceToCalc = this.props.price.toString().split('.')[0];
  // 	let price = this.props.price.toString().split('.')[0] + '00';
  // 	// console.log(this.padLeadingZeros(parseInt(this.props.price) , 1) )
  // 	let checkout = new WidgetCheckout({
  // 		currency: 'COP',
  // 		amountInCents: price * quantity,
  // 		reference: this.randomPayReference(
  // 			32,
  // 			'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' +
  // 				price * quantity +
  // 				this.props.props.data.product_global_id
  // 		),
  // 		// publicKey: 'pub_test_pYoEwV7Vh2UjsXGhNQ5JEYWa1LnXKj9r',
  // 		publicKey: 'pub_prod_6SqAXiHbJoIQH2e9I85GgxA1Gmd9he20',
  // 		redirectUrl:
  // 			'https://kiero.co/detalle/' +
  // 			this.props.props.data.product_global_id +
  // 			'_' +
  // 			this.props.props.data.product_global_title
  // 				.replaceAll(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
  // 				.replaceAll('//', '%2F')
  // 				.replaceAll('%', '')
  // 				.replaceAll(/['"]+/g, '')
  // 				.split(' ')
  // 				.join('-'),
  // 		shippingAddress: {
  // 			country: 'CO',
  // 			city: this.state.city == '' ? 'null' : this.state.city,
  // 			phoneNumber: this.state.mobile_phone == '' ? 'null' : this.state.mobile_phone,
  // 			region: this.state.region == '' ? 'null' : this.state.region,
  // 			addressLine1:
  // 				this.state.neighborhood == ''
  // 					? 'null'
  // 					: this.state.address + ' Barrio ' + this.state.neighborhood,
  // 		},
  // 	});
  //
  // 	this.state.user == '' ||
  // 	this.state.email == '' ||
  // 	this.state.mobile_phone == '' ||
  // 	this.state.city == '' ||
  // 	this.state.region == '' ||
  // 	this.state.address == '' ||
  // 	this.state.neighborhood == ''
  // 		? this.setState({ modalAddr: true })
  // 		: checkout.open(function (result) {
  // 				var transaction = result.transaction;
  // 				// console.log('Transaction ID: ', transaction.id)
  // 				// console.log('Transaction object: ', transaction)
  // 				let dataTransaction = {
  // 					transactionId: transaction.id,
  // 					transactionReference: transaction.reference,
  // 					paymentMethod: transaction.paymentMethodType,
  // 					userIdentificationType: transaction.billingData.legalIdType,
  // 					userIdentification: transaction.billingData.legalId,
  // 					userName: transaction.customerData.fullName,
  // 					emailAddres: transaction.customerEmail,
  // 					userMobilePhone: transaction.customerData.phoneNumber,
  // 					cityAddress: transaction.shippingAddress.city,
  // 					regionAddress: transaction.shippingAddress.region,
  // 					userAddress: transaction.shippingAddress.addressLine1,
  // 					quantity: quantity,
  // 					productId: productId,
  // 					price: parseInt(priceToCalc),
  // 					total: parseInt(priceToCalc * quantity),
  // 					marketId: marketId,
  // 				};
  //
  // 				// console.log(dataTransaction)
  //
  // 				addPaymentDataWompi('/DataWompiTransaction', dataTransaction);
  // 		  });
  // };

  render() {
    const renderPayu = () => {
      this.setState({ display: "none" });
      this.setState({ modalAddr: true });

      const concatCategories = () => {
        var dataCategory = [];
        this.props.props.data.breadcum.forEach((prod, index) => {
          dataCategory.push(prod.name);
        });
        return dataCategory.join(" / ");
      };

      var item = {
        currencyCode: "COP",
        actionField: {
          step: 2,
          option: "form_complete",
        },
        products: [
          {
            name: this.props.props.data.product_global_title, // Name or ID is required.
            id: this.props.props.data.product_global_id,
            price: this.props.props.data.price,
            brand: this.props.props.data.brand,
            category: concatCategories(),
            url:
              "https://kiero.co" + handleFormatUrl(this.props.props.data.product_global_id, this.props.props.data.product_global_title),
            quantity: this.state.cantidad == 0 ? 1 : this.state.cantidad,
          },
        ],
      };

      var quantity = this.state.cantidad == 0 ? 1 : this.state.cantidad

      var checkoutStartedValues = {
        // order_id: '50314b8e9bcf000000000000',
        affiliation: 'SpiceStock',
        value: this.props.props.data.price * quantity,
        revenue: this.props.props.data.price * quantity,
        shipping: 0,
        tax: 0,
        discount: 0,
        // coupon: 'hasbros',
        currency: 'COP',
        products: [
          {
            product_id: this.props.props.data.product_global_id,
            // sku: '45790-32',
            name: this.props.props.data.product_global_title,
            price: this.props.props.data.price,
            quantity: quantity,
            brand: this.props.props.data.brand,
            category: concatCategories(),
            url:
              "https://kiero.co" + handleFormatUrl(this.props.props.data.product_global_id, this.props.props.data.product_global_title),
            image_url: this.props.props.data.images.length ? this.props.props.data.images[0].url : null
          }
        ]
      };

      // console.log(checkoutStartedValues);

      analytics.track('Checkout Started', checkoutStartedValues);

    };
    //////
    // this.clientId = typeof(ga) == 'function' && typeof(ga.getAll) == 'function' ? ga.getAll()[0].get('clientId') : "";
    // this.gclid = Cookies.get('gclid');
    // console.log(this.state);
    var quantity = this.state.cantidad === 0 ? 1 : this.state.cantidad;
    var fullName =
      handleFormatName(this.state.user) +
      (this.state.lastName
        ? " " + handleFormatName(this.state.lastName)
        : "");

    // const hmacSha1 = async function calcHMac(data, key = 'abc') {
    //     var textEncoder = new TextEncoder()
    //     var key = await window.crypto.subtle.importKey('raw', textEncoder.encode(key), {name: 'HMAC', hash: 'SHA-1'},true, ['sign']);        
    //     var hmac = await window.crypto.subtle.sign('HMAC', key, textEncoder.encode(data));
    //     return Array.prototype.map.call(new Uint8Array(hmac), x => ('00' + x.toString(16)).slice(-2)).join('');
    // }

    // hmacSha1(this.state.identification).then(function(result) {
    //   // do something with result
    // });

    var hmacID = CryptoJS.HmacSHA1(this.state.identification, 'abc').toString(CryptoJS.enc.Hex)

    this.state.user_id = hmacID

    var extra3 = JSON.stringify({
      qty: quantity,
      cid: this.state.clientId,
      gclid: this.state.gclid,
      nme: fullName,
      id: hmacID
    });

    // console.log(hmacID)

    var md5 = require("md5");
    var ref_code = "kieroco-" + new Date().getTime();
    var signature = md5(
      `uzIc90bkpXj0aJDh22H67MRJnl~530932~${ref_code}~${
        this.props.props.data.price * quantity
      }~COP`
    );

    // (
    // 	'uzIc90bkpXj0aJDh22H67MRJnl~530932~' +
    // 		ref_code +
    // 		'~' +
    // 		this.state.cantidad == 0 ? 1 : this.state.cantidad * this.props.props.data.price +
    // 		'~COP'
    // );
    // console.log(signature);
    const contentModalNewAddress = (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontWeight: "medium",
            paddingBottom: 20,
            paddingTop: 15,
          }}
        >
          Por favor agregue los datos de envío
        </p>
        <div style={{ width: "300px", margin: "0 auto" }}>
          <div className="containerUserName">
            <input
              value={this.state.user}
              onChange={this.handleFormValue}
              placeholder="Nombres"
              name="user"
            />
            <input
              value={this.state.lastName}
              onChange={this.handleFormValue}
              placeholder="Apellidos"
              name="lastName"
            />
          </div>
          <select
            name="typeIdentification"
            className="typeIdentification"
            style={{}}
            onChange={this.handleFormValue}
          >
            <option hidden defaultValue>
              Seleccionar tipo de identificación
            </option>
            <option value="ti">Tarjeta Identidad</option>
            <option value="cc">Cédula</option>
            <option value="ce">Cédula extranjería</option>
            <option value="pa">Pasaporte</option>
          </select>
          <input
            value={this.state.identification}
            onChange={this.handleFormValue}
            placeholder="Número identificación"
            name="identification"
          />
          <input
            value={this.state.email}
            onChange={this.handleFormValue}
            placeholder="Correo"
            name="email"
          />
          <input
            value={this.state.mobile_phone}
            onChange={this.handleFormValue}
            placeholder="Telefono Movil"
            name="mobile_phone"
          />
          <input
            value={this.state.city}
            onChange={this.handleFormValue}
            placeholder="Ciudad"
            name="city"
          />
          {/*<input*/}
          {/*	value={this.state.region}*/}
          {/*	onChange={this.handleFormValue}*/}
          {/*	placeholder="Region/Departamento"*/}
          {/*	name="region"*/}
          {/*/>*/}
          <input
            value={this.state.address}
            onChange={this.handleFormValue}
            placeholder="Direccion"
            name="address"
          />

          {/*<input*/}
          {/*	value={this.state.neighborhood}*/}
          {/*	onChange={this.handleFormValue}*/}
          {/*	placeholder="Barrio"*/}
          {/*	name="neighborhood"*/}
          {/*/>*/}
          <form
            className="finish-pay"
            method="post"
            action="https://checkout.payulatam.com/ppp-web-gateway-payu/"
            // action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/"
            target="_blank"
            // onSubmit={this.toggleModalAddr}
          >
            <input name="merchantId" type="hidden" value="530932" />
            <input name="accountId" type="hidden" value="532826" />
            <input
              name="description"
              type="hidden"
              value={this.props.props.data.title.substr(0, 250)}
            />
            <input name="referenceCode" type="hidden" value={ref_code} />
            <input
              name="amount"
              type="hidden"
              value={quantity * this.props.props.data.price}
            />
            <input name="tax" type="hidden" value="0" />
            <input name="taxReturnBase" type="hidden" value="0" />
            <input name="currency" type="hidden" value="COP" />
            <input name="signature" type="hidden" value={signature} />
            <input name="test" type="hidden" value="0" />
            <input name="buyerEmail" type="hidden" value={this.state.email} />
            <input
              name="telephone"
              type="hidden"
              value={this.state.mobile_phone}
            />
            <input name="shippingCountry" type="hidden" value="CO" />
            <input name="shippingCity" type="hidden" value={this.state.city} />
            <input
              name="shippingAddress"
              type="hidden"
              value={this.state.address}
            />
            <input name="payerFullName" type="hidden" value={fullName} />
            <input
              name="extra1"
              type="hidden"
              value={this.props.props.data.product_id}
            />
            <input
              name="extra2"
              type="hidden"
              value={this.props.props.data.user.user_id}
            />
            <input name="extra3" type="hidden" value={extra3} />
            <input
              name="responseUrl"
              type="hidden"
              //  value={"https://kieroapi.org/pay_status?extra4=" +
              value={
                "https://kiero.co/pay_status?extra4=" +
                this.props.props.data.title +
                "~" +
                this.props.props.data.product_id +
                "~" +
                this.props.props.data.price +
                "~" +
                this.props.props.data.brand +
                "~" +
                this.props.props.data.category.name +
                "~" +
                quantity
              }
            />
            <input
              name="confirmationUrl"
              type="hidden"
              value="https://api.kieroapi.net/payuComplete"
              // value="https://api.kieroapi.org/payuComplete"
            />
            <input
              className="button-finish-payu"
              onMouseDown={this.validateFormFinal}
              disabled={
                this.state.termsOfService ? this.state.disabledButton : true
              }
              style={{
                background: this.state.disabledButton ? "#cf0a2c" : "#cf0a2c",
                color: "white",
                cursor: "pointer",
                margin: "125px auto 15px auto",
              }}
              name="Submit"
              type="submit"
              value="Continuar con la transacción"
            />
          </form>
          {/*<button style={{ background:'#cf0a2c', color:'white'}} onClick={() => this.validateForm()}>Continuar con la transacción</button>*/}
        </div>
        <div
          style={{
            display: "flex",
            top: 395,
            borderRadius: "10px",
            padding: "10px 0px",
            backgroundColor: "#f3f3f3",
            justifyContent: "center",
            position: "absolute",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <Checkbox
              style={{
                alignSelf: "center",
                marginRight: "2px",
                color: "#CF0A2C",
              }}
              name="terms"
              value={this.state.termsOfService}
              onChange={this.handleFormValue}
            />
            <div
              style={{
                fontSize: "13px",
              }}
            >
              Antes de continuar debes aceptar los
              <Link href="/terminos">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{
                    color: "#007BFF",
                  }}
                >
                  {" "}
                  términos, condiciones{" "}
                </a>
              </Link>{" "}
              y
              <Link href="/privacidad">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{
                    color: "#007BFF",
                  }}
                >
                  {" "}
                  política de privacidad{" "}
                </a>
              </Link>
              de KieroMarketplace
            </div>
          </div>
        </div>
        {!this.state.validForm ? (
          <div
            style={{
              color: "rgb(31 31 31)",
              background: "rgb(230 230 230)",
              borderRadius: 5,
              width: "100%",
              margin: "15px auto",
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontWeight: "medium",
                margin: "9px 2px",
              }}
            >
              Tienes campos pendientes por completar
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    );
    return (
      <div className="pay">
        <div
          className="containerBackDropLoader"
          style={{ display: this.state.display }}
        >
          <div className="containerLoader">
            <Spinner style={{ height: "100px !important" }} />
            {/* <p>Validando información de compra</p> */}
          </div>
        </div>
        <div className="pay-item">
          <h1 className="title-pay-product-detail">
            {this.props.title.substr(0, 60)}{" "}
          </h1>
          {/* <div className="productFavIcon2">
						<Checkbox
							style={{ color: '#CF0A2C' }}
							icon={<FavoriteBorder fontSize="large" />}
							checkedIcon={<Favorite fontSize="large" />}
						/>
					</div> */}
        </div>
        {/* <div className="pay-item">
					<Rating productId={this.props.pid}/>
				</div> */}
        <div className="pay-item-oldprice">
          <h3 className="price-pay-product-detail-oldprice">
            ${" "}
            {this.props.price
              ? (this.props.price * 1.428571428571429)
                  .toString()
                  .split(".")[0]
                  .replace(/(.)(?=(\d{3})+$)/g, "$1.")
              : " ... "}
          </h3>{" "}
          <p
            className="price-pay-product-detail-oldprice-discount"
            style={{ color: "#0acf47" }}
          >
            &nbsp; -30% OFF
          </p>
        </div>
        <div className="pay-item">
          <h3
            className="price-pay-product-detail"
            style={{ fontWeight: "300 !important" }}
          >
            $
            {this.props.price
              ? this.props.price
                  .toString()
                  .split(".")[0]
                  .replace(/(.)(?=(\d{3})+$)/g, "$1.")
              : " ... "}
          </h3>
        </div>
        <div className="pay-item info-pay-product-detail">
          <h3>
            <span className="no-movil">Kiero</span> envíos{" "}
            <span className="no-web">gratis</span>{" "}
            <FontAwesomeIcon icon={faTruck} />
          </h3>
          <p>Nuestros productos son importados</p>
          <p>Entrega de 3 a 9 días hábiles</p>
        </div>
        {this.state.variantsSpinner ? (
          <Spinner />
        ) : (
          <ProductVariants
            id={this.props.pgid}
            dimensions={this.state.dimensions}
            select={this.handleSelect}
          />
        )}
        <div className="clasecantidad">
          {this.state.cantidad > 0 ? (
            <div className="cantidad">
              {"Haz Seleccionado la cantidad de " +
                this.state.cantidad +
                " articulos"}
            </div>
          ) : (
            ""
          )}
        </div>

        {this.renderPayButtonSection(renderPayu)}
        {/* {this.renderWompi()} */}
        {/* <form aria-hidden="true">
								<script
									src="https://checkout.wompi.co/widget.js"
									data-render="button"
									data-public-key="pub_test_pYoEwV7Vh2UjsXGhNQ5JEYWa1LnXKj9r"
									data-redirect-url="http://localhost:3000/pay_status"
									data-currency="COP"
									data-amount-in-cents="4950000"
									data-reference="4XMPGKWWPKWQ"
									>
								</script>
							</form> */}
        <ListProductMovil />
        <div className="section-pay-type no-movil">
          <div className="section-pay-type-title">
            <h4>Medios de pago</h4>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className="section-pay-type-items">
            <p>Tarjetas de crédito - Hasta 36 cuotas</p>
            <div>
              <img loading="lazy" alt="pagos por tarjeta de crédito" src={PayCredit} />
            </div>
            <p>Efectivo en puntos de pago</p>
            <div>
              <img loading="lazy" alt="pagos por pse" src={PayOnline} />
            </div>
            <p>Transferencia desde tu banco</p>
            <div>
              <img loading="lazy" alt="pagos por transferencia" src={PayTransfer} />
            </div>
          </div>
        </div>
        <div className="section-pay-send no-movil">
          <div className="section-pay-send-title">
            <h4>Formas de envío</h4>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className="section-pay-send-subtitle">
            <span>
              <FontAwesomeIcon icon={faTruck} />
            </span>
            <p>Envíos gratis a todo el país</p>
          </div>
          <div className="section-pay-send-description">
            <p>
              Es el servicio de kiero que permite recibir tus productos de forma
              rápida y segura
            </p>
          </div>
        </div>
        <div className="section-pay-wrap-seller no-movil">
          <Seller productId={this.props.pid} />
        </div>
        {this.state.modalAddr ? (
          <Modal
            toggle={this.toggleModalAddr}
            content={contentModalNewAddress}
            button
            cross="crossIcon"
          />
        ) : null}

        {/* <div className="pay-item pay-img no-movil">
					<img src={iconCredit} className="icon-credit" />
					<img src={PayCredit} className="pay-section-img" />
					<Link href="/ayuda">
						<a>
							<p>Más informacion</p>
						</a>
					</Link>
				</div> */}
      </div>
    );
  }
}

export default PaySection;
