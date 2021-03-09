import React, { useState, useRef } from 'react';
import {useRouter} from 'next/router';
import Link from "next/link";
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart, faShoppingBag, faPaperclip, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./ProductReview.css";
import {postForm} from "../../lib/request";
import Modal from "../Common/Modal";
import Modal2 from "../Common/Modal/Modal2";
import moment from 'moment';

function ProductReview({ order, jwt }) {
    const router = useRouter();
    const [c_rating, setC_rating] = useState(0);
    const [p_rating, setP_rating] = useState(0);
    
    const [previews, setPreviews] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);

    const inputFileRef = useRef(null);

    const openDialog = () => {
        inputFileRef.current.click();
    };

    const handleImage = event => {
        let img = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = e => {
            const item = {file: img, url:e.target.result};
            setPreviews(previews => [...previews, item]);
        } 
    };

    const [comment, setComment] = useState('');
    const handleComment = e => {
        setComment(e.target.value);
    };

    const toggleModal = async () => {
        setShowModal(!showModal);
    }

    const calificate = async () => {
        let formData = new FormData();
        Array.from(previews).forEach(image => {
            image.file && formData.append('images', image.file);
        });
        formData.set('order_id', order.data.order_id);
        formData.set('rate_purchase', c_rating);
        formData.set('rate_product', p_rating);
        formData.set('comments', comment);

        try {
            const res = await postForm("/ratePurchase", formData, jwt);
            // Show Modal
            setShowModal(true);
        } catch (error) {
            // TODO Handle error here, need to ask
            console.log(error.response);
            setErrorModal(true);
        }
    }
    let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let dateTime = new Date(order.data.created_since.replace(' ', 'T'));
    let dateTimeFormated = dateTime.getDate() + " de " + months[dateTime.getMonth()] + " " + dateTime.getHours() + ":" + dateTime.getMinutes();

    return (
        <div className="product-review">
            <Header />

            {showModal &&
                <Modal2 type="ok" icon={faCheck} content="Calificación exitosa." toggle={async ()=> {
                    await toggleModal();
                    router.back();
                }} />
            }

            {errorModal &&
                 <Modal2 type="error" icon={faTimes} content="Ha ocurrido un error en la clasificación." toggle={() => {}} />
            }

            <div className="title-review">
                <h3>{'Califica tu compra'}</h3>
            </div>

            <section className="component-product">


                <div className="product-detail">
                    <div className="product-detail-container">
                    <img alt={order.data.product.title} width="80" height="80" src={order.data.product.images.length > 0 ? order.data.product.images[0].url : 'https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png'} />
                        <div>
                            <p>{order.data.product.title}</p>
                            <p>$ {order.data.total}</p>
                            <p><small>{order.data.quantity} unidad</small></p>
                        </div>
                    </div>
                </div>
                <div className="seller-detail">
                    <div className="seller-detail-container">
                        <img src="https://picsum.photos/100" />
                        <div>
                            <p>Vendedor</p>
                            <p>{order.data.seller.name + " " + order.data.seller.last_name}</p>
                            <p>{order.data.seller.phone}</p>
                        </div>
                    </div>
                </div>
                <div className="date_time"><p >{moment(order.data.created_since).locale('es').format('D [de] MMMM [del] YYYY')}</p></div>
            </section>

            <section className="component-seller">
                <div className="seller-review-title">
                    <h5>{'Califica tu experiencia con el vendedor'}</h5>
                </div>
                <div className="seller-review-content">
                    <div className="rating-purchases">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <p><small>{'Calificar compra'}</small></p>
                        <p className="stars">
                            <FontAwesomeIcon className={c_rating>0?'active':'inactive'} icon={faStar} onClick={()=>setC_rating(1)} />
                            <FontAwesomeIcon className={c_rating>1?'active':'inactive'} icon={faStar} onClick={()=>setC_rating(2)}/>
                            <FontAwesomeIcon className={c_rating>2?'active':'inactive'} icon={faStar} onClick={()=>setC_rating(3)}/>
                            <FontAwesomeIcon className={c_rating>3?'active':'inactive'} icon={faStar} onClick={()=>setC_rating(4)}/>
                            <FontAwesomeIcon className={c_rating>4?'active':'inactive'} icon={faStar} onClick={()=>setC_rating(5)}/>
                        </p>
                    </div>
                    <div className="rating-product">
                        <FontAwesomeIcon icon={faShoppingBag} />
                        <p><small>{'Calificar producto'}</small></p>
                        <p className="stars">
                        <FontAwesomeIcon className={p_rating>0?'active':'inactive'} icon={faStar} onClick={()=>setP_rating(1)} />
                            <FontAwesomeIcon className={p_rating>1?'active':'inactive'} icon={faStar} onClick={()=>setP_rating(2)}/>
                            <FontAwesomeIcon className={p_rating>2?'active':'inactive'} icon={faStar} onClick={()=>setP_rating(3)}/>
                            <FontAwesomeIcon className={p_rating>3?'active':'inactive'} icon={faStar} onClick={()=>setP_rating(4)}/>
                            <FontAwesomeIcon className={p_rating>4?'active':'inactive'} icon={faStar} onClick={()=>setP_rating(5)}/>
                        </p>
                    </div>
                </div>
                <div className="review-comment">
                    <label><small>{'Escribele un comentario al vendedor y carga las fotos del producto recibido'}</small></label>
                    <input value={comment} onChange={handleComment} placeholder={'Escribe un comentario'} />
                </div>

                <div className="review-images">
                    <div style={{ width: '100%', float: 'left' }}>
                        <button className="add-image" onClick={openDialog}>{'agregar fotos'} <FontAwesomeIcon icon={faPaperclip}/></button>
                        <input type="file" className={"hide"} ref={inputFileRef} onChange={handleImage}/>
                    </div>
                    <div style={{ width: '100%', float: 'left', paddingLeft: '4%' }}>
                        {
                            previews.map((item, index)=> <img key={index} src={item.url} />)
                        }                        
                    </div>
                    <div style={{ width: '100%', float: 'left' }}>
                        {(c_rating && p_rating && comment)
                            ? <button onClick={calificate} className="send-review">Calificar</button>
                            : <button onClick={calificate} className="send-review not-send-review" disabled>Calificar</button>}
                        
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default ProductReview;
