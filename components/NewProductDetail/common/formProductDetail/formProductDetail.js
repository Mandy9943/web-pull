import {
  TextField,
  Checkbox,
  Button,
  DialogActions,
  FormControlLabel,
} from "@material-ui/core";
import React, { useState } from "react";
import FormDialog from "./components/FormDialog/FormDialog";
import "./formProductDetail.module.css";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchema from "./Schema/schema";
import { createlead, setDiscount } from "../../../../lib/functions.js";
import { useAppSelector } from "../../../../lib/hooks/redux";
import { selectData } from "../../../../redux/feature/pay/paySlice";
import { handleFormatName } from "../../../../lib/functions";
import CryptoJS from "crypto-js";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import requestIp from "request-ip";

const FormProductDetail = ({ handleClose, open, userIp }) => {
  const productData = useAppSelector(selectData);
  console.log(productData);
  const [state, setState] = useState({
    cantidad: 0,
    dimensions: {},
    variantsSpinner: !productData.m_pgid,
    modalAddr: false,
    user: "",
    user_id: Cookies.get("user_id") || 16,
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
    identification: "0",
    typeIdentification: "0T",
    typeIdentificationName: "0TN",
    display: "none",
    gclid: "",
    clientId: "",
  });

  const {
    register,

    getValues,
    control,
    formState: { errors, dirtyFields, isValid },
  } = useForm({
    defaultValues: {
      firstName: Cookies.get("name") || "",
      lastName: Cookies.get("last_name") || "",
      email: Cookies.get("email") || "",
      phoneNumber: "",
      city: "",
      address: "",
      agreePolicy: false,
    },
    mode: "all",
    resolver: yupResolver(formSchema),
  });

  const onSubmit = () => {
    // --------klaviyo---------

    // let user = getValues();
    // user.user_id = createHmacSHA1(user.email);
    // sendIdentifyEvent(user);
    const userData = {
      first_name: getValues().firstName,
      email: getValues().email,
      last_name: getValues().lastName,
      id: state.user_id,
      city: getValues().city,
      address: getValues().address,
      phone: getValues().phoneNumber,
    };
    if (productData.rating !== undefined) {
      var rating = toString(productData.rating / 10);
    } else {
      rating = "N/A";
    }
    const data = {
      ...userData,
      second_phone: "",
      second_email: "",
      type_id: "",
      num_id: "",
      country: "",
      lead_type:"Usuario Invitado (Y Usuario Registrado) que Presionó el botón de Continuar con la transacción",
      category: productData.category.name,
      // product_global_price: productData.price,

      description: productData.description,
      product_global_id: productData.product_id,
      images: productData.img,

      sub_category: productData.sub_category,
      price_product: String(productData.price),
      product_title: productData.title,
      product_description:productData.description,
      product_id: String(productData.product_id),
      product_image: productData.img[0].url, //duda
      product_brand: productData.brand,
      category_id: String(productData.category_id),
      product_category: "",//productData.breadcum[0].name,
      product_subcategory: String(productData.sub_category),
      rating:rating,
      cost_of_goods_sold: String(productData.cost_of_goods_sold),
      asin_link: productData.asin_link,
      gross_margin: String(productData.gross_margin),
      gross_margin_percent: String(parseFloat(productData.gross_margin/productData.price).toFixed(2)),
      margin_percent: String(productData.margin_percent),
      product_link: productData.product_link,
      weight: String(productData.weight),



    };

    createlead(data, 2);
    handleClose();
  };

  useEffect(() => {
    let clientId;
    let gclid;
    let fbclid;
    let fb_browser_id;
    const dataInterval = setInterval(function () {
      if (!clientId && !gclid && !fbclid && !fb_browser_id) {
        // clientId
        const gaCookie = Cookies.get("_ga");
        if (gaCookie) {
          const gaSplit = gaCookie.split(".");
          clientId = gaSplit[2] + "." + gaSplit[3];
        }
        // GCLID
        gclid = Cookies.get("gclid");
        if (!gclid) {
          const match = /gclid=([^&#]*)/.exec(window.location.search);
          gclid = match ? match[1] : undefined;
        }
        //////
        // FBCLID
        let _fbc = Cookies.get("_fbc");
        fbclid = _fbc ? _fbc.slice(19) : undefined;
        if (!fbclid) {
          const match = /fbclid=([^&#]*)/.exec(window.location.search);
          fbclid = match ? match[1] : undefined;
        }
        //////
        // fb_browser_id
        fb_browser_id = Cookies.get("_fbp");
        //////
      } else {
        dataGoogleAds(clientId, gclid);
        clearInterval(dataInterval);
      }
    }, 200);

    const dataGoogleAds = (clid, gclId) => {
      setState({
        gclid: gclId,
        fbclid: fbclid,
        fb_browser_id: fb_browser_id,
        clientId: clid,
      });
    };

    // loadData()
  }, []);

  /* Variables necesarias para envio de form */

  const quantity = productData.count === 0 ? 1 : productData.count;

  let values = getValues();

  const fullName =
    handleFormatName(values.firstName) +
    (values.lastName ? " " + handleFormatName(values.lastName) : "");

  const hmacID = CryptoJS.HmacSHA1(state.identification, "abc").toString(
    CryptoJS.enc.Hex
  );

  const extra1 = JSON.stringify({
    id: hmacID,
    street: values.address,
    city: values.city,
    user_id: state.user_id,
    product_id: productData.product_id,
  });

  console.log("extra1 Mobile", extra1);

  const extra2 = JSON.stringify({
    qty: quantity,
    ip: userIp,
    fbclid: state.fbclid,
    fb_browser_id: state.fb_browser_id,
    eventid:
      (Math.random() + 1).toString(36).substring(7) +
      "." +
      new Date().getTime(),
  });

  console.log("extra2 Mobile", extra2);

  const extra3 = JSON.stringify({
    cid: state.clientId,
    gclid: state.gclid,
    nme: values.firstName,
    phone: values.phoneNumber,
    last_name: values.lastName,
  });

  console.log("extra3 Mobile", extra3);

  var md5 = require("md5");
  var ref_code = "kieroco-" + new Date().getTime();
  var signature = md5(
    `uzIc90bkpXj0aJDh22H67MRJnl~530932~${ref_code}~${setDiscount(
      productData.price,
      quantity
    )}~COP`
  );
  return (
    <div>
      <FormDialog open={open}>
        <div id="FormProductDetail">
          <span className="closeButton" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
          <p className="formProductDetail-title">
            Por favor agregue los datos de envío
          </p>
          <div className="form-wrapper">
            <div className="fromProductDetail-wrapper-textfields">
              <TextField
                {...register("firstName")}
                className="fromProductDetail-textfields font-size"
                margin="dense"
                id="firstName"
                label="Nombres"
                type="text"
                variant="outlined"
                color="secondary"
                error={errors.firstName}
                helperText={errors?.firstName?.message}
                required
              />
              <TextField
                {...register("lastName")}
                className="fromProductDetail-textfields font-size"
                margin="dense"
                id="lastName"
                label="Apellidos"
                type="text"
                variant="outlined"
                color="secondary"
                error={errors.lastName}
                helperText={errors?.lastName?.message}
                required
              />
            </div>
            <TextField
              {...register("email")}
              className="font-size"
              margin="dense"
              id="email"
              label="Correo"
              type="text"
              fullWidth
              variant="outlined"
              color="secondary"
              error={errors.email}
              helperText={errors?.email?.message}
              required
            />
            <TextField
              {...register("phoneNumber")}
              className="font-size"
              margin="dense"
              id="phoneNumber"
              label="Telefono Movil"
              type="text"
              fullWidth
              variant="outlined"
              color="secondary"
              error={errors.phoneNumber}
              helperText={errors?.phoneNumber?.message}
              required
            />
            <TextField
              {...register("city")}
              className="font-size"
              margin="dense"
              id="city"
              label="Ciudad"
              type="text"
              fullWidth
              variant="outlined"
              color="secondary"
              error={errors.city}
              helperText={errors?.city?.message}
              required
            />
            <TextField
              {...register("address")}
              className="font-size"
              margin="dense"
              id="address"
              label="Direccion"
              type="text"
              fullWidth
              color="secondary"
              variant="outlined"
              error={errors.address}
              helperText={errors?.address?.message}
              required
            />

            <div className="wrapper-checkbox">
              <Controller
                name="agreePolicy"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    className="font-size"
                    margin="dense"
                    color="secondary"
                    error={errors.agreePolicy}
                    required
                    label={
                      <p className="agreePolicy">
                        Antes de continuar debes aceptar los{" "}
                        <Link href="/terminos">
                          <a>terminos</a>
                        </Link>
                        ,{" "}
                        <Link href="/terminos">
                          <a>condiciones</a>
                        </Link>{" "}
                        y{" "}
                        <Link href="/privacidad">
                          <a>política de privacidad</a>
                        </Link>{" "}
                        de KieroMarketplace
                      </p>
                    }
                    control={
                      <Checkbox
                        {...field}
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                      />
                    }
                  />
                )}
              />
              {/* <Checkbox
                {...register("agreePolicy")}
                checked={register.agreePolicy.value}
                onChange={(e) =>
                  register.agreePolicy.onChange(e.target.checked)
                }
                className="font-size"
                margin="dense"
                type="text"
                color="secondary"
                error={errors.agreePolicy}
                helperText={errors?.agreePolicy?.message}
                required
              /> */}
            </div>
          </div>
          <form
            className="finish-pay"
            method="post"
            action="https://checkout.payulatam.com/ppp-web-gateway-payu/"
            // action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/"
            target="_blank"
            // onSubmit={toggleModalAddr}
          >
            <input name="merchantId" type="hidden" value="530932" />
            <input name="accountId" type="hidden" value="532826" />
            <input
              name="description"
              type="hidden"
              value={productData.title.substr(0, 159)}
            />
            <input name="referenceCode" type="hidden" value={ref_code} />
            <input
              name="amount"
              type="hidden"
              /* value={quantity * productData.price} */
              value={setDiscount(productData.price, quantity)}
            />
            <input name="tax" type="hidden" value="0" />
            <input name="taxReturnBase" type="hidden" value="0" />
            <input name="currency" type="hidden" value="COP" />
            <input name="signature" type="hidden" value={signature} />
            <input name="test" type="hidden" value="0" />
            <input name="buyerEmail" type="hidden" value={getValues().email} />
            <input
              name="telephone"
              type="hidden"
              value={getValues().phoneNumber}
            />
            <input name="shippingCountry" type="hidden" value="CO" />
            <input name="shippingCity" type="hidden" value={getValues().city} />
            <input
              name="shippingAddress"
              type="hidden"
              value={getValues().address}
            />
            <input name="payerFullName" type="hidden" value={fullName} />
            <input name="extra1" type="hidden" value={extra1} />
            <input name="extra2" type="hidden" value={extra2} />
            <input name="extra3" type="hidden" value={extra3} />
            <input
              name="responseUrl"
              type="hidden"
              //  value={"https://kieroapi.org/pay_status?extra4=" +
              value={
                "https://kiero.co/pay_status?extra4=" +
                productData.title +
                "~" +
                productData.product_id +
                "~" +
                productData.price +
                "~" +
                productData.brand +
                "~" +
                productData.category.name +
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

            <DialogActions>
              <div className="FormDialog-button">
                <Button
                  onClick={onSubmit}
                  type="submit"
                  color="secondary"
                  variant="contained"
                  disabled={dirtyFields === {} || !isValid}
                >
                  Continuar con la transacción
                </Button>
              </div>
            </DialogActions>
          </form>
        </div>
      </FormDialog>
    </div>
  );
};

export default FormProductDetail;
