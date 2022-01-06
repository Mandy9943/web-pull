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
import { setDiscount } from "../../../../lib/functions.js";
import { useAppSelector } from "../../../../lib/hooks/redux";
import { selectData } from "../../../../redux/feature/pay/paySlice";
import { handleFormatName } from "../../../../lib/functions";
import CryptoJS from "crypto-js";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const FormProductDetail = ({ handleClose, open }) => {
  const productData = useAppSelector(selectData);
  const [state, setState] = useState({
    cantidad: 0,
    dimensions: {},
    variantsSpinner: !productData.m_pgid,
    modalAddr: false,
    user: "",
    user_id: Cookies.get("user_id") || "",
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
    handleClose();
  };

  useEffect(() => {
    let clientId;
    let gclid;
    const dataInterval = setInterval(function () {
      if (!clientId && !gclid) {
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
      } else {
        dataGoogleAds(clientId, gclid);
        clearInterval(dataInterval);
      }
    }, 200);

    const dataGoogleAds = (clid, gclId) => {
      setState({
        gclid: gclId,
        clientId: clid,
      });
    };

    // loadData()
  }, []);

  /* Variables necesarias para envio de form */

  const quantity = productData.count === 0 ? 1 : productData.count;

  const fullName =
    handleFormatName(getValues().firstName) +
    (getValues().lastName ? " " + handleFormatName(getValues().lastName) : "");

  const hmacID = CryptoJS.HmacSHA1(state.identification, "abc").toString(
    CryptoJS.enc.Hex
  );
  const extra3 = JSON.stringify({
    qty: quantity,
    cid: state.clientId,
    gclid: state.gclid,
    nme: fullName,
    id: hmacID,
  });

  var md5 = require("md5");
  var ref_code = "kieroco-" + new Date().getTime();
  var signature = md5(
    `uzIc90bkpXj0aJDh22H67MRJnl~530932~${ref_code}~${setDiscount(
      quantity,
      productData.price
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
              value={setDiscount(quantity, productData.price)}
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
            <input name="extra1" type="hidden" value={productData.product_id} />
            <input name="extra2" type="hidden" value={state.user_id} />
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
