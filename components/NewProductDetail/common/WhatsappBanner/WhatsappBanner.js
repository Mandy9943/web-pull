import React from "react";
import { useAppSelector } from "../../../../lib/hooks/redux";
import {
  selectPretty,
  selectFormat,
} from "../../../../redux/feature/whatsapp/whatsappReducer";
import { Box, IconButton, styled } from "@mui/material";
import Close from "@material-ui/icons/Close";
import WhatsApp from "@material-ui/icons/WhatsApp";

const WhatsappBanner = ({ close, productId, isDesktop }) => {
  const pretty = useAppSelector(selectPretty);
  const numberFormat = useAppSelector(selectFormat);
  return (
    <WhatsappBannerWrapper id="WhatsappBanner">
      {!isDesktop && (
        <div onClick={close}>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </div>
      )}

      <Link
        rel="noopener noreferrer"
        target="_blank"
        href={`https://wa.me/${numberFormat}/?text=Hola estoy interesado sobre el producto “https://kiero.co/detalle/${productId}" y quiero saber más información, me pueden ayudar?`}
        className="linkToWhatsapp"
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          Ayuda en linea
          <Box
            sx={{
              display: "flex",
            }}
          >
            <SpanNumber className="whatsappIcon">
              <WhatsAppIcon />
            </SpanNumber>
            <SpanNumber
              className="tel"
              sx={{
                textDecoration: {
                  md: "underline",
                },
              }}
            >
              {pretty}
            </SpanNumber>
          </Box>
        </Box>
      </Link>
    </WhatsappBannerWrapper>
  );
};

export default WhatsappBanner;

const WhatsappBannerWrapper = styled("div")(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  padding: "0 20px 0 10px",
  background: "#3ada96",
  color: "white",
  display: "flex",
  zIndex: "999",
  alignItems: "center",
  fontSize: "clamp(13px, 3.5vw, 20px)",
  height: "50px",

  "@media (min-width:1001px)": {
    position: "absolute",
    bottom: 0,
    top: "unset",
    padding: " 0 20px",
    justifyContent: "space-between",
    fontSize: "14px",
    borderRadius: "0 0 10px 10px",
  },
}));
const CloseIcon = styled(Close)(() => ({
  color: "white",
}));
const WhatsAppIcon = styled(WhatsApp)(() => ({
  color: "white",
  margin: "0 15px",
  fontSize: "6vw",
}));
const Link = styled("a")(() => ({
  flex: 1,
  display: "flex",
  justifyContent: " flex-end",
  alignItems: " center",
  color: "white",
}));
const SpanNumber = styled("span")(() => ({
  display: "flex",
  alignItems: "center",
}));
