import Image from "next/image";
import Logo1 from "../../../../assets/img/logo-social.png";
import Logo2 from "../../../../assets/img/logo-social1.png";
import React from "react";

const FooterSocial = () => {
  let urlSic = "https://www.sic.gov.co";
  return (
    <div className="footer-social">
      <a href={urlSic} rel="noopener noreferrer" target="_blank">
        <div className="anullProperties">
          <Image
            loading="lazy"
            alt="Superintendencia de Industria y Comercio"
            src={Logo1}
            layout="fill"
          />
        </div>
      </a>
      <a href={urlSic} rel="noopener noreferrer" target="_blank">
        <div className="anullProperties">
          <Image
            loading="lazy"
            alt="Superintencia de Industria y Comercio"
            src={Logo2}
            layout="fill"
          />
        </div>
      </a>
    </div>
  );
};

export default FooterSocial;
