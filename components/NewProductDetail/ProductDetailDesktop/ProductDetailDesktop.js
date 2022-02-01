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
import OurClient from "../common/OurClient/OurClient";
import CheckoutProductDesk from "../common/CheckoutProductDesk/CheckoutProductDesk";
import useResize from "../../../lib/hooks/useResize";
import CheckoutProduct from "../common/CheckoutProduct/CheckoutProduct";
import { useState } from "react";
import WhatsappBanner from "../common/WhatsappBanner/WhatsappBanner";

const Detail = dynamic(() => import("../common/Detail/Detail"), {
  ssr: false,
  suspense: false,
});

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

// const Subscription = dynamic(
//   () => import("../common/Subscription/Subscription"),
//   {
//     ssr: false,
//     loading: () => <p>...</p>,
//   }
// );
const Footer = dynamic(() => import("../../Common/Footer"), {
  ssr: false,
  suspense: true,
});

const RecommendedProducts = dynamic(
  () => import("../common/RecommendedProducts/RecommendedProducts"),
  {
    ssr: false,
    suspense: true,
  }
);

const ProductDetailDesktop = ({ user_data, data, userIp }) => {
  const tabletView = useResize(1000);
  console.log({ data, userIp });
  const isForm = useAppSelector(selectIsFormOpen);
  const dispatch = useAppDispatch();
  const [isWhatsappBanner, setIsWhatsappBanner] = useState(true);
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

  const handleCloseWhatsappBanner = () => {
    setIsWhatsappBanner(false);
  };

  let navClass = ["Nav"];
  if (isWhatsappBanner) {
    navClass.push("Nav-mt");
  }

  return (
    <div id="ProductDetailDesktop">
      <Suspense fallback={`loading`}>
        {isWhatsappBanner && tabletView && (
          <WhatsappBanner
            close={handleCloseWhatsappBanner}
            productId={data.product_global_id}
          />
        )}
        <FormProductDetail
          open={isForm}
          handleClose={handleCloseForm}
          userIp={userIp}
        />
        <div className={navClass.join(" ")}>
          <Nav
            user={user_data.user}
            jwt={user_data.jwt}
            home={true}
            authenticated={user_data.authenticated}
          />
        </div>

        <Header title={data.title} bredCumbs={data.breadcum} isDesktop />
        <Box sx={{ flexGrow: 1 }} width={"98%"} margin={"auto"} mb={8}>
          {tabletView ? (
            <Grid container>
              <Grid item sm={12}>
                <ProductImageDesk images={data.images} altImg={data.title} />
                <CheckoutProduct
                  onClickBuy={handleOpenForm}
                  price={data.price}
                  stock={data.status === 0 ? 0 : data.stock}
                  discount_percentage={data.discount_percentage}
                  table
                />
                <Detail product={data} />
                <Description product={data} />
                <OurClient category={data?.breadcum[0]?.name.substring(0, 7)} />
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={2}>
              <Grid item sm={8}>
                <ProductImageDesk images={data.images} altImg={data.title} />
                <Detail product={data} />
                <Description product={data} />
                <OurClient category={data?.breadcum[0]?.name.substring(0, 7)} />
              </Grid>

              <Grid item sm={4}>
                <CheckoutProductDesk
                  title={data.title}
                  onClickBuy={handleOpenForm}
                  price={data.price}
                  stock={data.status === 0 ? 0 : data.stock}
                  discount_percentage={data.discount_percentage}
                />
              </Grid>
            </Grid>
          )}

          {/* <Grid
            container
            rowSpacing={1}
            sx={{ width: "100%" }}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item sm={12} className="containerInfo">
              <Info />
            </Grid> */}
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
          {/*     <Grid
              sx={{ borderRadius: "20px", overflow: "hidden" }}
              item
              md={12}
              xs={12}
              className="containerSellerInfo"
            >
              <SellerInfo movil={false} />
            </Grid> */}
          {/* </Grid> */}
        </Box>
        <Box>
          <Grid container direction="column" flexWrap="nowrap">
            <Grid sx={{ overflow: "hidden" }} item md={12} sm={12}>
              <RecommendedProducts category={data.category} movil={false} />
            </Grid>
            {/* <Grid item md={12} sm={12}>
              <Benefits />
            </Grid> */}
            {/*<Grid item md={12} sm={12}>*/}
            {/*  <Subscription />*/}
            {/*</Grid>*/}
          </Grid>
          <Grid item md={12}>
            <Footer />
            <FooterSocial />
          </Grid>
        </Box>
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
