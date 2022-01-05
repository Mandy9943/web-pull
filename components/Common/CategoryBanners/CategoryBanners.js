import React, { Component } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import "./CategoryBanners.css";
import { baseUrl } from "../../../lib/config";
import { getFront } from "../../../lib/request";
import Image from "next/image";
import Spinner from "../Spinner";

class CategoryBanners extends Component {
  constructor(props) {
    super(props);
    this.state = { loadedBanners: false };
  }

  formatFiles(arrFiles) {
    return arrFiles.map((file) => {
      if (isNaN(parseInt(file.substr(0, 1)))) {
      }
    });
  }

  componentDidMount() {
    getFront("/getBanners/" + this.props.category.replace(/-/g, " ")).then(
      (response) => {
        if (response.data.files.length > 0) {
          this.setState({ loadedBanners: true, files: response.data.files });
        } else {
          this.setState({ loadedBanners: false, files: [] });
        }
      }
    );
  }

  render() {
    return (
      <div className="category-banners">
        {this.state.loadedBanners && (
          <>
            <h3 className="title">Compra por categoría</h3>
            <div className="group-category">
              {this.state.files.map((file, i) => {
                let category = file.split("/");
                category = category[category.length - 1];

                if (!isNaN(category.substr(0, 1))) {
                  category = category.split(".")[1];
                }
                return (
                  <section key={i} className="item">
                    <a
                      href={
                        "/categoria/" +
                        category
                          .replace(/^[, ]+|[, ]+$|[, ]+/g, "-")
                          .trim()
                          .toLowerCase()
                      }
                      className="miniCardCategory"
                    >
                      {/* <Spinner/> */}
                      <div className="anullProperties">
                        <Image
                          layout="fill"
                          src={baseUrl + file}
                          alt={category.replace(/-/g, " ")}
                          placeholder="blur"
                        />
                      </div>
                      {/* // <img src={'http://localhost' + file} alt={category.replace(/-/g, " ")}/> */}
                    </a>
                  </section>
                );
              })}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default CategoryBanners;
