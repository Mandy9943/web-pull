import React, { Suspense, useEffect } from "react";
import PropTypes from "prop-types";
import {
  handleActivateBack,
  handleDeactivateBack,
  sendCheckoutStepViewed,
  sendProductViewed,
} from "../../../lib/functions";
import FooterSocial from "../common/FooterSocial/FooterSocial";

import "./ProductDetailDesktop.module.css";
import dynamic from "next/dynamic";
import Info from "../common/Info/Info";
import RecommendedProducts from "../common/RecommendedProducts/RecommendedProducts";
import Header from "../common/Header/Header";
import FormProductDetail from "../common/formProductDetail/formProductDetail";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks/redux";
import {
  openForm,
  selectIsFormOpen,
} from "../../../redux/feature/pay/paySlice";
import { Box, Grid } from "@mui/material";
import ProductImageDesk from "../common/ProductImageDesk/ProductImageDesk";
import Description from "../common/Description/Description";
import Detail from "../common/Detail/Detail";
import OurClient from "../common/OurClient/OurClient";
import CheckoutProductDesk from "../common/CheckoutProductDesk/CheckoutProductDesk";

const Nav = dynamic(() => import("../../Common/Nav/Nav"));

const SwiperSlider = dynamic(
  () => import("../common/SwiperSlider/SwipperSlider"),
  {
    suspense: true,
  }
);

const SellerInfo = dynamic(() => import("../common/SellerInfo/SellerInfo"), {
  suspense: true,
});

const Benefits = dynamic(() => import("../common/Benefits/Benefits"), {
  suspense: true,
});

const Subscription = dynamic(
  () => import("../common/Subscription/Subscription"),
  {
    ssr: false,
    loading: () => <p>...</p>,
  }
);
const Footer = dynamic(() => import("../../Common/Footer"));
const ProductDetailDesktop = ({ user_data, data, userIp }) => {
  console.log({ data, userIp });
  const isForm = useAppSelector(selectIsFormOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isForm === true) {
      dispatch(openForm(true));
      handleDeactivateBack(() => {
        dispatch(openForm(false));
        handleActivateBack();
      });
    }
  }, [isForm, dispatch]);

  const handleCloseForm = () => {
    sendCheckoutStepViewed(data, 2);
    dispatch(openForm(false));

    handleActivateBack();
  };
  const handleOpenForm = () => {
    sendCheckoutStepViewed(data, 1);
    dispatch(openForm(true));
  };

  useEffect(() => {
    sendProductViewed(data);
  }, [data]);

  return (
    <div id="ProductDetailDesktop">
      <Suspense fallback={`loading`}>
        <FormProductDetail
          open={isForm}
          handleClose={handleCloseForm}
          userIp={userIp}
        />
        <Nav
          user={user_data.user}
          jwt={user_data.jwt}
          home={true}
          authenticated={user_data.authenticated}
        />
        <Header title={data.title} bredCumbs={data.breadcum} isDesktop />

        <Box sx={{ flexGrow: 1 }} padding={"0 60px"}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <ProductImageDesk images={data.images} altImg={data.title} />
              <Detail product={data} />
              <Description product={data} />
              <OurClient category={data?.breadcum[0]?.name.substring(0, 7)} />
            </Grid>
            <Grid item xs={4}>
              <CheckoutProductDesk
                title={data.title}
                onClickBuy={handleOpenForm}
                price={data.price}
                stock={data.status === 0 ? 0 : data.stock}
                discount_percentage={data.discount_percentage}
              />
            </Grid>
          </Grid>
          <Grid container rowSpacing={1}>
            <Grid item md={12} xs={12}>
              <Info />
            </Grid>
            <Grid
              sx={{ borderRadius: "20px", overflow: "hidden" }}
              item
              md={12}
              xs={12}
              className="containerspecialOffer"
            >
              <SwiperSlider
                type={"specialOffer"}
                price={data.price}
                images={data.images}
                altImg={data.title}
                stock={data.status === 0 ? 0 : data.stock}
                discount_percentage={data.discount_percentage}
                movil={false}
              />
            </Grid>
            {/* <Grid item md={12} xs={12}> */}
            {/*   <SellerInfo /> */}
            {/* </Grid> */}
          </Grid>
        </Box>
        {/*      <Benefits /> */}
        {/* <Subscription /> */}
      </Suspense>
      {/*  <Footer /> */}
      {/* <FooterSocial /> */}
    </div>
  );
};

ProductDetailDesktop.propTypes = {
  user_data: PropTypes.object,
  data: PropTypes.object.isRequired,
  userIp: PropTypes.string.isRequired,
};

export default ProductDetailDesktop;
