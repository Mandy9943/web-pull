import React, { Component } from "react";
import "./ListCategory.css";

class ListCategory extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }
  componentDidMount() {
    fetch("https://picsum.photos/v2/list")
      .then((r) => r.json())
      .then((r) => this.setState({ data: r }));
  }
  render() {
    const Class = this.props.format == "grid" ? "grid" : "list";
    return (
      <div className="wrap-list-category">
        <div className={Class}>
          {this.state.data && this.state.data.length > 0 ? (
            this.props.format == "grid" ? (
              this.state.data.map((product, i) => (
                <div key={i} className="temp-card">
                  <h3>{product.author}</h3>
                  <img src={product.download_url} className="img" />
                  <a href={product.url} target="_blank">
                    <p>click to see</p>
                  </a>
                </div>
              ))
            ) : (
              this.state.data.map((product, i) => (
                <div key={i} className="temp-list">
                  <h3>{product.author}</h3>
                  <img src={product.download_url} className="img" />
                  <a href={product.url} target="_blank">
                    <p>click to see</p>
                  </a>
                </div>
              ))
            )
          ) : (
            <div>cargando...</div>
          )}
        </div>
      </div>
    );
  }
}
export default ListCategory;
