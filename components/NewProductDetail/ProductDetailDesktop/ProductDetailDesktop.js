// import React, { Suspense, useEffect } from "react";
// import PropTypes from "prop-types";
// import {
//   handleActivateBack,
//   sendCheckoutStepViewed,
//   sendProductViewed,
// } from "../../../lib/functions";
// import FooterSocial from "../common/FooterSocial/FooterSocial";

// import "./ProductDetailDesktop.module.css";
// import dynamic from "next/dynamic";
// const Info = dynamic(() => import( "../common/Info/Info"), {
//   ssr:false,
// })
// const RecommendedProducts = dynamic(() => import( "../common/RecommendedProducts/RecommendedProducts"), {
//   ssr:false,
// })
// const Header = dynamic(() => import( "../common/Header/Header"), {
//   ssr:false,
// })
// const FormProductDetail = dynamic (() => import ( "../common/formProductDetail/formProductDetail"), {
//   ssr:false
// });
// import { useAppDispatch, useAppSelector } from "../../../lib/hooks/redux";
// import {
//   openForm,
//   selectIsFormOpen,
// } from "../../../redux/feature/pay/paySlice";
// import { Box, Grid } from "@mui/material";
// const ProductImageDesk = dynamic(() => import ("../common/ProductImageDesk/ProductImageDesk"),
// {
//   ssr:false,
// });
// const Description = dynamic(() => import ("../common/Description/Description"),
// {
//   ssr:false,
// });
// const Detail = dynamic(() => import ("../common/Detail/Detail"),
// {
//   ssr:false,
// });
// const OurClient = dynamic(() => import ("../common/OurClient/OurClient"),
// {
//   ssr:false,
// });
// const CheckoutProductDesk = dynamic(() => import ("../common/CheckoutProductDesk/CheckoutProductDesk"),
// {
//   ssr:false,
// });

// const Nav = dynamic(() => import("../../Common/Nav/Nav"));

// const SwiperSlider = dynamic(
//   () => import("../common/SwiperSlider/SwipperSlider"),
//   {
//     suspense: true,
//   }
// );

// const SellerInfo = dynamic(() => import("../common/SellerInfo/SellerInfo"), {
//   suspense: true,
// });

// const Benefits = dynamic(() => import("../common/Benefits/Benefits"), {
//   suspense: true,
// });

// const Subscription = dynamic(
//   () => import("../common/Subscription/Subscription"),
//   {
//     ssr: false,
//     loading: () => <p>...</p>,
//   }
// );
// const Footer = dynamic(() => import("../../Common/Footer"));
// const ProductDetailDesktop = ({ user_data, data, userIp }) => {
//   console.log({ data, userIp });
//   const isForm = useAppSelector(selectIsFormOpen);
//   const dispatch = useAppDispatch();

//   const handleCloseForm = () => {
//     sendCheckoutStepViewed(data, 2);
//     dispatch(openForm(false));

//     handleActivateBack();
//   };
//   const handleOpenForm = () => {
//     sendCheckoutStepViewed(data, 1);
//     dispatch(openForm(true));
//   };

//   useEffect(() => {
//     sendProductViewed(data);
//   }, [data]);

//   return (
//     <div id="ProductDetailDesktop">
//       <Suspense fallback={`loading`}>
//         <FormProductDetail
//           open={isForm}
//           handleClose={handleCloseForm}
//           userIp={userIp}
//         />
//         <Nav
//           user={user_data.user}
//           jwt={user_data.jwt}
//           home={true}
//           authenticated={user_data.authenticated}
//         />
//         <Header title={data.title} bredCumbs={data.breadcum} isDesktop />

//         <Box sx={{ flexGrow: 1 }} padding={"0 60px"}>
//           <Grid container spacing={2}>
//             <Grid item xs={8}>
//               <ProductImageDesk images={data.images} altImg={data.title} />
//               <Detail product={data} />
//               <Description product={data} />
//               <OurClient category={data?.breadcum[0]?.name.substring(0, 7)} />
//             </Grid>
//             <Grid item xs={4}>
//               <CheckoutProductDesk
//                 title={data.title}
//                 onClickBuy={handleOpenForm}
//                 price={data.price}
//                 stock={data.status === 0 ? 0 : data.stock}
//                 discount_percentage={data.discount_percentage}
//               />
//             </Grid>
//           </Grid>
//           <Grid container rowSpacing={1}>
//             <Grid item md={12} xs={12}>
//               <Info />
//             </Grid>
//             {/* <Grid item md={12} xs={12}> */}
//             {/* [> [> <div className="containerspecialOffer"> <] <] */}
//             {/* [> [>   <SwiperSlider <] <] */}
//             {/* [> [>     type={"specialOffer"} <] <] */}
//             {/* [> [>     price={data.price} <] <] */}
//             {/* [> [>     images={data.images} <] <] */}
//             {/* [> [>     altImg={data.title} <] <] */}
//             {/* [> [>     stock={data.status === 0 ? 0 : data.stock} <] <] */}
//             {/* [> [>     discount_percentage={data.discount_percentage} <] <] */}
//             {/* [> [>     movil={false} <] <] */}
//             {/* [> [>   /> <] <] */}
//             {/* [> [> </div> <] <] */}
//             {/* </Grid> */}
//             {/*  <Grid item md={12} xs={12}> */}
//             {/* <SellerInfo /> */}
//             {/* </Grid> */}
//           </Grid>
//         </Box>
//         {/*      <Benefits /> */}
//         {/* <Subscription /> */}
//       </Suspense>
//       {/*  <Footer /> */}
//       {/* <FooterSocial /> */}
//     </div>
//   );
// };

// ProductDetailDesktop.propTypes = {
//   user_data: PropTypes.object,
//   data: PropTypes.object.isRequired,
//   userIp: PropTypes.string.isRequired,
// };

// export default ProductDetailDesktop;
