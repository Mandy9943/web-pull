import React, { Component, useState } from "react";
import Link from "next/link";
import Error from 'next/error'
import Nav from "../Common/Nav/Nav";
import Footer from "../Common/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./Shop.css";
import Sidebar from "../Sidebar/Sidebar";
import Logo1 from "../../assets/img/logo-social.png";
import Logo2 from "../../assets/img/logo-social1.png";
import RightSideBar from "./RightSideBar/RightSideBar";
// import ShopCrumble from "./Common/ShopCrumble/ShopCrumble";
import ShopStart from "./ShopStart/ShopStart";
import ShopEdit from "./ShopEdit/ShopEdit";
import ShopEditScreen from "./ShopEditScreen";
import ShopEditMenu from "./ShopEditMenu";
import ShopAnalytics from "./ShopAnalytics";
import ShopGoogleAds from "./ShopGoogleAds";
import ShopFacebookPixel from "./ShopFacebookPixel";
import ShopEditDomain from "./ShopEditDomain";
import ShopEditDataStorage from './ShopEditDataStorage'
import { findKeyValueInArr } from '../../lib/functions'
import { update_store } from '../../services/storeApi';

const Shop = ({ store_data, user_data }) => {


  const showSection = (section, e) => {
    // Basicamente recorre el objeto display y determina el estado
    // al cual se desea pasar
    // setDisplay(prev => {
    //   const display_arr = Object.entries(prev.display).map(item => {
    //     return [item[0], item[0] === section]
    //   });


    //   return { display: Object.fromEntries(display_arr) };
    // });

    setDisplay({ [section]: true })

  };

  const configMenu = [
    { text: 'Menu', key: 'menu', cb: showSection },
    { text: 'Dominio web', key: 'domain', cb: showSection },
    { text: 'Datos de la tienda', key: 'stdata', cb: showSection },
    { text: 'Whatapp', key: 'ws', cb: showSection },
    { text: 'Marketing', key: 'marketing', cb: showSection }
  ];

  const st_data = store_data.data[0];

  const [store_name, setStoreName] = useState(st_data.store.business_name)
  const [store_domain, setStoreDomain] = useState(st_data.domain)
  const [store_status, setStoreStatus] = useState(st_data.store.status)

  const [facebook_pixel, setFacebookPixel] = useState(st_data.facebook_pixel)



  const [store_design, setStoreDesign] = useState({
    st_design_header_backgroundimage: st_data.design.header.background_img,
    st_design_header_title_color: st_data.design.header.title.color,
    st_design_header_title_font_family: st_data.design.header.title.font_family,
    st_design_header_subtitle_text: st_data.design.header.subtitle.text,
    st_design_header_subtitle_color: st_data.design.header.subtitle.color,
    st_design_st_design_header_subtitle_font_family: st_data.design.header.subtitle.font_family,
    st_design_main_background_color: st_data.design.main.background_color,
    st_design_footer_background_color: st_data.design.footer.background_color,
    st_design_st_design_footer_copyright: st_data.design.footer.copyright,
    st_design_footer_logo: st_data.design.footer.logo,
    st_desing_main_widget: st_data.design.main.widget,
  }
  )

  const [userName, setUserName] = useState(user_data.user)
  const [accordionMyData, setAccordionMyData] = useState(true)
  const [closeMyData, setCloseMyData] = useState(true)
  const [iconMyData, setIconMyData] = useState(true)
  const [userAccountIconMyData, setUserAccountIconMyData] = useState(faAngleRight)
  const [closeSidebar, setCloseSidebar] = useState(true)

  const [display, setDisplay] = useState({
    start: true,
    edit: false,
    menu: false,
    domain: false,
    stdata: false,
    ws: false,
    marketing: false,
    analytics: false,
    facebookPixel: false,
    googleAds: false
  })

  const [show_edit_section, setShow_edit_sectionState] = useState("main")



  const onAccordionMyData = () => {

    setCloseMyData(!closeMyData)
    setIconMyData(!iconMyData)

    if (iconMyData === true) {
      setUserAccountIconMyData(faAngleDown)

    } else if (icon1MyData === false) {
      setAccordionMyData(faAngleRight)

    }
  };


  const toggleModal = (modal) => {
    const newState = { ...state };
    newState[`modal${modal}`] = !newState[`modal${modal}`] ? true : false;
    setState(newState);
  };


  const getActiveSection = () => {
    let sections = display;
    for (let section in sections) {
      if (sections[section] === true) {
        return section;
      }
    }
    return "start";
  };


  const setDesignValues = (name, value) => {


    setStoreDesign({ ...store_design, [name]: value })

  }



  const CloseSidebar = () => {
    setCloseSidebar(!closeSidebar)
  };


  const setEditSection = (section) => {
    switch (section) {
      case 'theme':
        setShow_edit_sectionState('theme')
        break;
      case 'color':
        setShow_edit_sectionState('color')
        break;
      case 'edit':
        setShow_edit_sectionState('edit')
        break;
      case 'colorEdit':
        setShow_edit_sectionState('colorEdit')
        break;
      default:
        setShow_edit_sectionState('main')

    }
  }


  const onSaveDomain = async (new_domain) => {
    update_store(store_domain, user_data.jwt, { domain: new_domain })
  }


  const onQuickConfig = async (data) => {
    update_store(store_domain, user_data.jwt, { design: data })
  }

  const onSaveFacebookPixel = async () => {
    
    update_store(store_domain, user_data.jwt, { facebook_pixel: facebook_pixel })
  }


  if (store_data.code !== 200) {
    return <Error statusCode={st_data.code} />
  }



  const u_data = user_data;

  const url = "//www.sic.gov.co";




  return (
    <div className="summary-content">
      <div className="summary-botton" onClick={() => CloseSidebar()}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      <Nav
        jwt={u_data.jwt}
        cb={showSection}
        user_data={u_data}
        user={u_data.user}
        home={false}
        authenticated={u_data.authenticated}
      />
      <div
        className={
          closeSidebar
            ? "user-account-container"
            : " user-account-container show-sidebar"
        }
      >
        <Sidebar user_data={u_data} cb={showSection} />

        {display.start &&
          <ShopStart
            store_name={store_name}
            store_domain={store_domain}
            store_status={store_status}
            cb={showSection}
            quick_config={onQuickConfig}
          />

        }

        {display.edit &&
          <>
            <ShopEdit
              cb={showSection}
              section_edit={show_edit_section}
              data={st_data}
              store_design={store_design}

            />
            <RightSideBar
              cb={showSection}
              setEditSection={setEditSection}
              section_edit={show_edit_section}
              menu={configMenu}
              store_design={store_design}
              setDesignValues={setDesignValues}
              quick_config={onQuickConfig}
            />
          </>
        }

        {display.menu &&
          <ShopEditScreen
            cb={showSection}
            section={findKeyValueInArr('key', 'menu', configMenu)}
          >
            <ShopEditMenu
              cb={showSection}
            />
          </ShopEditScreen>
        }

        {display.domain &&
          <ShopEditScreen
            cb={showSection}
            section={{ text: "Dominio Web", key: "domain" }}
          >
            <ShopEditDomain
              cb={showSection}
              saveDomain={onSaveDomain}
              store_domain={store_domain}
            />
          </ShopEditScreen>
        }
        {display.stdata &&
          <ShopEditScreen
            cb={showSection}
            section={{ text: "Datos de la tienda", key: "stdata" }}
          >
            <ShopEditDataStorage
              cb={showSection}
              saveDomain={onSaveDomain}
              store_name={store_name}
              store_design={store_design}
              quick_config={onQuickConfig}
            />
          </ShopEditScreen>
        }

        {display.analytics &&
          <ShopEditScreen
            cb={showSection}
            section={{ text: "Google analytics", key: "analytics" }}
          >
            <ShopAnalytics
              cb={showSection}
            />
          </ShopEditScreen>
        }
        {display.googleAds &&
          <ShopEditScreen
            cb={showSection}
            section={{ text: "Google Ads", key: "googleAds" }}
          >
            <ShopGoogleAds
              cb={showSection}
            />
          </ShopEditScreen>
        }
        {display.facebookPixel &&
          <ShopEditScreen
            cb={showSection}
            section={{ text: "Facebook Pixel", key: "facebookPixel" }}

          >
            <ShopFacebookPixel
              cb={showSection}
              onSaveFacebookPixel={onSaveFacebookPixel}
              facebook_pixel={facebook_pixel}
              setFacebookPixel={setFacebookPixel}
            />
          </ShopEditScreen>
        }
        {display.facebook &&
          <ShopEditScreen
            cb={showSection}
            section={{ text: "Facebook", key: "facebook" }}
          >
            <ShopFacebook
              cb={showSection}
            />
          </ShopEditScreen>
        }


      </div>

      <Footer />
      <div className="footer-social">
        <Link href={url}>
          <a target="_blank">
            <img src={Logo1} />
          </a>
        </Link>
        <Link href={url}>
          <a target="_blank">
            <img src={Logo2} />
          </a>
        </Link>
      </div>
    </div>
  );

}


export default Shop;