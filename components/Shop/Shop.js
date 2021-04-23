import React, { Component } from "react";
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
import ShopEditDomain from "./ShopEditDomain";
import {findKeyValueInArr} from '../../lib/functions'
import {update_store} from '../../services/storeApi';

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.configMenu = [
      {text:'Menu', key: 'menu', cb: this.showSection},
      {text:'Dominio web', key: 'domain', cb: this.showSection},
      {text:'Datos de la tienda', key: 'stdata', cb: this.showSection},
      {text:'Whatapp', key: 'ws', cb: this.showSection},
      {text:'Marketing', key: 'marketing', cb: this.showSection}
    ];

    // let store_data = this.props.store_data.data[0];
    
    let store_data = this.props.store_data.data[0]; 
    console.log("store_data: "+ Object.values(store_data))

    this.state = {
      // Store related states
      store_name:   store_data.store.business_name,
      store_domain: store_data.domain,
      store_status: store_data.store.status,

      // Other states
      userName: this.props.user_data.user,
      accordionMyData: true,
      closeMyData: true,
      iconMyData: true,
      userAccountIconMyData: faAngleRight,
      closeSidebar: true,
      display: {
        start: true,
        edit: false,
        menu: false,
        domain: false,
        stdata: false,
        ws: false,
        marketing: false,
        analytics: false
      },
      show_edit_section: false   // Mostrar 'theme' o 'color'
    };
  }

  accordionMyData = () => {
    this.setState({
      closeMyData: !this.state.closeMyData,
      iconMyData: !this.state.iconMyData,
    });
    if (this.state.iconMyData === true) {
      this.setState({
        userAccountIconMyData: faAngleDown,
      });
    } else if (this.state.icon1MyData === false) {
      this.setState({
        userAccountIconMyData: faAngleRight,
      });
    }
  };

  toggleModal = (modal) => {
    const newState = { ...this.state };
    newState[`modal${modal}`] = !newState[`modal${modal}`] ? true : false;
    this.setState(newState);
  };

  getActiveSection = () => {
    let sections = this.state.display;
    for (let section in sections) {
      if (sections[section] === true) {
        return section;
      }
    }
    return "start";
  };

  showSection = (section, e) => {
    // Basicamente recorre el objeto display y determina el estado
    // al cual se desea pasar
    this.setState(prev=>{
      let display_arr = Object.entries(prev.display).map(item=>{
        return [item[0], item[0] === section]
      });

      return {display: Object.fromEntries(display_arr)};
    });
  };

  CloseSidebar = () => {
    this.setState({
      closeSidebar: !this.state.closeSidebar,
    });
    console.info("si ejecuta y cambia el estado " + this.state.closeSidebar);
  };

  setEditSection = (section) => {
    switch (section) {
      case 'theme':
        this.setState({show_edit_section: 'theme'})
        break;
      case 'color':
        this.setState({show_edit_section: 'color'})
        break;
      default:
        this.setState({show_edit_section: false})
    }
  }

  onSaveDomain = async (new_domain) =>{
    update_store(this.state.store_domain, this.props.user_data.jwt, {domain: new_domain})
  }

  onQuickConfig = async (data) => {
    update_store(this.state.store_domain, this.props.user_data.jwt, {design: data})
}

  render() {
    if (this.props.store_data.code !== 200 ) {
      return <Error statusCode={this.props.store_data.code} />
    }

    let u_data = this.props.user_data;

    let url = "//www.sic.gov.co";

    return (
      <div className="summary-content">
        <div className="summary-botton" onClick={() => this.CloseSidebar()}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <Nav
          jwt={u_data.jwt}
          cb={this.showSection}
          user_data={u_data}
          user={u_data.user}
          home={false}
          authenticated={u_data.authenticated}
        />
        <div
          className={
            this.state.closeSidebar
              ? "user-account-container"
              : " user-account-container show-sidebar"
          }
        >
          <Sidebar user_data={u_data} cb={this.showSection} />

          {this.state.display.start &&
          <ShopStart
              store_name={this.state.store_name}
              store_domain={this.state.store_domain}
              store_status={this.state.store_status}
              cb={this.showSection}
              quick_config={this.onQuickConfig}
          />
          
          }

          {this.state.display.edit &&
          <>
            <ShopEdit
                cb={this.showSection}
                section_edit={this.state.show_edit_section}
                data={this.props.store_data.data[0]}
            />
            <RightSideBar
                cb={this.showSection}
                setEditSection={this.setEditSection}
                section_edit={this.state.show_edit_section}
                menu={this.configMenu}
            />
          </>
          }

          {this.state.display.menu &&
          <ShopEditScreen
              cb={this.showSection}
              section={findKeyValueInArr('key', 'menu', this.configMenu)}
          >
              <ShopEditMenu
                  cb={this.showSection}
              />
          </ShopEditScreen>
          }

          {this.state.display.domain &&
          <ShopEditScreen
              cb={this.showSection}
              section={{text:"Dominio Web", key:"domain"}}
          >
            <ShopEditDomain
                cb={this.showSection}
                saveDomain={this.onSaveDomain}
                store_domain={this.state.store_domain}
            />
          </ShopEditScreen>
          }

          {this.state.display.analytics &&
          <ShopEditScreen
              cb={this.showSection}
              section={{text:"Google analytics", key:"analytics"}}
          >
            <ShopAnalytics
                cb={this.showSection}
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
}
