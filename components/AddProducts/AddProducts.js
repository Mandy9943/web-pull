import React,{useState} from "react";
import Link from "next/link";
import Nav from "../Common/Nav/Nav";
import Footer from "../Common/Footer/Footer";
import Logo1 from "../../assets/img/logo-social.png";
import Logo2 from "../../assets/img/logo-social1.png";

export default function AddProducts(props) {
    const u_data = props.user_data
    return (
       <>
        <Nav
            jwt={u_data.jwt}
            user_data={u_data}
            user={u_data.user}
            home={false}
            authenticated={u_data.authenticated}
        />
       Holaaaaaaaa
       <Footer/>
       <div className="footer-social">
          <Link href="//www.sic.gov.co">
            <a target="_blank">
              <img src={Logo1} />
            </a>
          </Link>
          <Link href="//www.sic.gov.co">
            <a target="_blank">
              <img src={Logo2} />
            </a>
          </Link>
        </div>
       </>
    ) ;
}
