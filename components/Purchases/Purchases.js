import React, { useState ,useEffect } from 'react';
import Link from 'next/link';
import "./Purchases.css";
import ProductItem from '../ProductItem/ProductItem';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { getData } from "../../services/userApi";
import ProductCard from "../ProductCard";
import OptionList from '../OptionList/OptionList';
import AccountStoreSales from '../AccountStore/AccountStoreSales/AccountStoreSales'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faThList } from "@fortawesome/free-solid-svg-icons";
import PurchaseItem from './PurchaseItem';
import PurchasesDetail from '../PurchasesDetail';


function Purchases(props) {

    const [pagination, setPagination] = useState();
    const [purchases, setPurchases] = useState([]);
    const [selected, setSelected] = useState();

    useEffect(() => {
        const endp = props.mode === "sell" ? "/getSells" : "/getPurchases?page=1&size=4"
        getData(endp, props.user.jwt)
            .then((response) => {
                setPagination(response.data.pagination);
                setPurchases(response.data.purchases);
            });
    
        return () => {
            setPagination();
            setPurchases([]);
        };
    }, []);

    const handleSelect = item => {
        setSelected(item);
        console.log(item);
    };

    return (
           !selected
           ? <div className="purchase-list">
               <h1 className="status-title">{props.mode === "sell" ? "Mis ventas" : "Mis Compras"}</h1>
               {props.mode === "sell"
                   ? <>
                       <AccountStoreSales />
                       <div className="account-store-sales-wrap-search">
                           <div className="account-store-sales-wrap-filter">
                               <p>
                                   <FontAwesomeIcon icon={faThList} /> Filtrar y ordenar
                           </p>
                               <div className="account-store-sales-wrap-input-search">
                                   <span>
                                       <FontAwesomeIcon icon={faSearch} />
                                   </span>
                                   <input className="account-store-sales-input-search" placeholder='buscar por # o titulo' />
                               </div>
                           </div>
                           <span className="sub-title"> {purchases.length} ventas</span>
                       </div>

                           {purchases.length===0 ?
                               <section className="empty-text">
                                   <span>No tiene ninguna venta</span>
                               </section>
                               : orderList
                           }
                   </>
                   : <> {/* Mode = buy */}
                       {purchases.length===0 ?
                           <section className="empty-text">
                               <span>No tiene compras anteriores</span>
                           </section>
                           :
                           purchases.map((item, index) => <PurchaseItem key={index} item={item} onSelect={handleSelect} />)
                       }
                   </>
               }
           </div>
           :<PurchasesDetail item={selected} close={()=>setSelected()} />
    );
}

export default Purchases;
