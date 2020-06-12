import React, { Component } from "react";
import "./DetailProductInfo.css";

class DetailProductInfo extends Component {
  render() {
    return (
      <div className="wrap-detail-info">
        <h4>DETALLE DEL PRODUCTO</h4>
        <div className="item-detail-info">
          <h5>titulo</h5>
          <p>
            Non veniam deserunt eiusmod ut reprehenderit sint sint enim nisi
            magna cillum sint. Aliquip veniam commodo mollit nulla culpa officia
            laborum mollit. Nulla proident nulla qui occaecat ipsum ipsum
            occaecat excepteur cillum aliquip est dolor anim.
          </p>
        </div>
        <div className="item-detail-info">
          <h5>Descripcion</h5>
          <p>
            Non veniam deserunt eiusmod ut reprehenderit sint sint enim nisi
            magna cillum sint. Aliquip veniam commodo mollit nulla culpa officia
            laborum mollit. Nulla proident nulla qui occaecat ipsum ipsum
            occaecat excepteur cillum aliquip est dolor anim.
          </p>
          <p>
            Non veniam deserunt eiusmod ut reprehenderit sint sint enim nisi
            magna cillum sint. Aliquip veniam commodo mollit nulla culpa officia
            laborum mollit. Nulla proident nulla qui occaecat ipsum ipsum
            occaecat excepteur cillum aliquip est dolor anim.
          </p>
        </div>
        <div className="item-detail-info">
          <h5>Caracteristicas</h5>
          <p>largo: 100</p>
          <p>ancho: 100</p>
          <p>alto: 100</p>
          <p>peso: 100</p>
        </div>
        <div className="item-detail-info">
          <h5>Especificaciones de importacion</h5>
          <p>largo: 100</p>
          <p>ancho: 100</p>
          <p>alto: 100</p>
          <p>peso: 100</p>
        </div>
        <div className="item-detail-info">
          <h5>ME RETRACTE DE MI COMPRA</h5>
          <p>
            en caso de que ya no quieras el producto que recibiste puedes
            realizar la devolucion de este en un periodo no mayor a 5 dias
            calendario desde su fecha de entrega, por ende el cliente debera
            asumir el valor del retorno a una de las direcciones que se le
            indicara, el valor del envio varia segun el peso y el tamaño del
            paquete
          </p>
        </div>
      </div>
    );
  }
}

export default DetailProductInfo;
