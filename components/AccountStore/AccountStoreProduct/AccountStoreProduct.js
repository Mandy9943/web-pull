import React, { Component } from "react";
import Link from 'next/link';
import Button from "../../Common/Button/Button";
import Pagination from "../../Common/Pagination/Pagination";
import "./AccountStoreProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faTimes, faPaperclip, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import DataSheet from "./../../DataSheet";
import Remove from "./../../Remove";
import { getCategories, saveProduct, updateProduct } from "../../../services/productsApi";
import { getImgUrl } from "../../../lib/config"
import CKEditor from 'ckeditor4-react';

class AccountStoreProduct extends Component {

  constructor(props) {

    super(props);
    this.state = {
      title: (this.props.data && this.props.data.title ? this.props.data.title : ""),
      inputs: [],
      images: (this.props.data && this.props.data.images ? this.props.data.images : []),
      removed_images: [],
      categories: [],
      file_count: 0,
      description: (this.props.data && this.props.data.description ? this.props.data.description : ""),
      dataSheet: {
        brand: '',
        material: '',
        model: '',
        width: '',
        long: '',
        weight: '',
      },
      category_id: '',
      pick_up: true
    }

  }

  onImageChange = (key, event) => {
    let files = this.state.inputs;
    files[key].file = event.target.files[0]
    this.setState({ inputs: files })
  };

  onChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  }

  addNewFile = (e) => {
    e.preventDefault()
    let files = this.state.inputs;
    files.push({ key: this.state.file_count, file: null });
    let nextVal = this.state.file_count + 1;
    this.setState({ inputs: files, file_count: nextVal })
  }

  updateDataSheet = (key, event) => {
    let tmp = this.state.dataSheet;
    tmp[key] = event.target.value;
    this.setState({ dataSheet: tmp });
  }

  newProduct = async e => {

    e.preventDefault();

    let formData = new FormData();
    Array.from(this.state.inputs).forEach(image => {
      image.file && formData.append('image', image.file);
    });

    formData.append('category_id', e.target.category_id.value);
    formData.append('store_id', -1);
    formData.append('title', e.target.title.value);
    formData.append('price', e.target.price.value);
    formData.append('color', e.target.color.value);
    formData.append('stock', e.target.stock.value);
    formData.append('sku', e.target.sku.value);
    formData.append('description', this.state.description);
    formData.append('brand', this.state.dataSheet.brand);
    formData.append('material', this.state.dataSheet.material);
    formData.append('model', this.state.dataSheet.model);
    formData.append('width', this.state.dataSheet.width);
    formData.append('height', this.state.dataSheet.height);
    formData.append('long', this.state.dataSheet.long);
    formData.append('weight', this.state.dataSheet.weight);

    let error;
    if (this.props.data) {
      formData.append('removed_images', this.state.removed_images.join(","));
      formData.append('product_id', this.props.data.product_id);
      error = await updateProduct(formData, this.props.jwt);
    } else {
      error = await saveProduct(formData, this.props.jwt);
    }

    if (error && error.status === 200) {
      alert("Guardado correctamente.");
      setTimeout(function () {
        location.href = "/cuenta";
      }, 2000);
    } else {
      alert("Error al crear el producto.")
    }

  }

  componentDidMount() {
    getCategories()
      .then((response) => {
        let data = [];
        let category;
        for (product in response.data.products) {
          data.push(response.data.products[product]);
        }
        this.setState({ categories: data });
      });
  }

  changeCategory(cat) {
    this.setState({
      category_id: cat.value
    });
  }

  removeImg(id, e) {
    let im = this.state.images;
    this.state.removed_images.push(im[id].file_id);
    im.splice(id, 1);
    this.setState({ images: im });
  }


  render() {
    const listFiles = this.state.inputs.map((point, i) => {
      return <input type={"file"} name="images" key={i} onChange={(e) => {
        this.onImageChange(i, e)
      }} />;
    });

    const categories = this.state.categories.map((category, i) => {
      let kid = 0;
      function rec(obj, tree_n) {
        if (obj.parent) {
          let i;
          let more = [];
          for (i = 0; i < obj.parent.length; i++) {
            more.push(rec(obj.parent[i], tree_n + 1))
          }
          let c = <option value={obj.category_id} key={kid++}>{
            Array(tree_n + 1).join("  -  ")
          }{obj.name}</option>
          return <>{c}{more.map((cat, i) => {
            return cat
          })}
          </>
        } else return <option value={obj.category_id} key={kid++}>{
          Array(tree_n + 1).join("  -  ")
        }{obj.name}</option>
      }
      return rec(category, 0)
    });

    const imagesList = this.state.images.map((img, i) => {
      return <div className="img-uploaded">

        <a onClick={(e) => { this.removeImg(i, e); }}><FontAwesomeIcon icon={faTimes} /></a>

        <img src={getImgUrl(img.url)} />
      </div>
    });

    return (
      <div className="account-store-product-wrap">
        <form onSubmit={this.newProduct}>
          <div className="back-btn">
            <Link href="/cuenta">
              <a>
                <p className="seller-reputations-icon">
                  <FontAwesomeIcon icon={faAngleLeft} />
                </p>
                <p>Volver</p>
              </a>
            </Link>
          </div>
          <div className="account-store-product-header">
            <h1>{this.state.title ? this.state.title : "Producto"}</h1>
          </div>
          <div className="account-store-product-info-1">
            <label>Titulo del producto</label>
            <input defaultValue={this.props.data ? this.props.data.title : ""} type="text" name={"title"} onChange={this.onChangeTitle} />
          </div>

          <div className="account-store-product-info-2">
            <label>Categoría</label>
            <select value={this.state.category_id !== '' ? this.state.category_id : (this.props.data ? this.props.data.category_id : '')}
              onChange={this.changeCategory.bind(this)}
              name={"category_id"}>
              <option value={""}>- Seleccione una categoría -</option>
              {categories}
            </select>
          </div>
          <CKEditor
            onChange={evt => this.setState({ description: evt.editor.getData() })}
            data={this.props.data ? this.props.data.description : ''} />
          <div className="account-store-product-info-2">
            <label>Precio</label>
            <input defaultValue={this.props.data ? this.props.data.price : ''} type="text" name={"price"} />
          </div>
          <Remove call={this.updateDataSheet} title="Retiro en persona" />
          <div className="account-store-product-wrap-add-info">

            <div className="account-store-product-photos-features">
              <h3>Caracteristicas del producto</h3>
              <div className="account-store-product-wrap-add-photo">
                <div>
                  <h4>Fotos</h4>
                </div>
                <div className="account-store-product-wrap-gallery">
                  {imagesList}
                </div>
                <div>
                  <div className="upload-file" id="dynamicInput">
                    {listFiles}
                  </div>
                  <button onClick={this.addNewFile} className="main-button">
                    <p>Agregar</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="s">
              <div className="account-store-product-info-1">
                <label>Color</label>
                <input defaultValue={this.props.data ? this.props.data.color : ''} name={"color"} type="text" />
              </div>
              <div className="account-store-product-info-1">
                <label>Cantidad</label>
                <input defaultValue={this.props.data ? this.props.data.stock : ''} name="stock" type="number" />
              </div>
              <div className="account-store-product-info-1">
                <label>Codigo universal del producto</label>
                <input defaultValue={this.props.data ? this.props.data.sku : ''} name="sku" type="text" />
              </div>
            </div>
          </div>
          <div className="account-store-product-wrap-section-2">
            <DataSheet call={this.updateDataSheet} title="Ficha tecnica" />
          </div>
          <div className="remove-form-group">
            <button type={"submit"}>Guardar</button>
            <button className="cancel-btn"><p>Cancelar</p></button>
          </div>
        </form>
      </div>
    );
  }
}

export default AccountStoreProduct;
