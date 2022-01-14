import React, { Suspense, useEffect } from "react";
import PropTypes from "prop-types";
import {
  handleActivateBack,
  sendCheckoutStepViewed,
  sendProductViewed,
} from "../../../lib/functions";
import FooterSocial from "../common/FooterSocial/FooterSocial";

import "./ProductDetailDesktop.module.css";
import dynamic from "next/dynamic";
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

const ProductDetailDesktop = ({ user_data, data, userIp }) => {
  const isForm = useAppSelector(selectIsFormOpen);
  const dispatch = useAppDispatch();

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
        <Nav
          user={user_data.user}
          jwt={user_data.jwt}
          home={true}
          authenticated={user_data.authenticated}
        />
        <FormProductDetail
          open={isForm}
          handleClose={handleCloseForm}
          userIp={userIp}
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
        </Box>
        <FooterSocial />
      </Suspense>
    </div>
  );
};

ProductDetailDesktop.propTypes = {
  user_data: PropTypes.object,
  data: PropTypes.object.isRequired,
  userIp: PropTypes.string.isRequired,
};

export default ProductDetailDesktop;
