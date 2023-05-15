import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
const Category = () => {
  return (
    <div className="category">
      <div className="col">
        <div className="row">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img2020/fashion/WA_2020/WRS20220Celeb/2.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img2020/fashion/WA_2020/WRS20220Celeb/Aurelia.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img2020/fashion/WA_2020/WRS20220Celeb/Indya.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
      </div>
      <div className="col coll">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img2020/fashion/WA_2020/WRS20220Celeb/6.jpg"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  Sale
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img2020/fashion/WA_2020/WRS20220Celeb/celeb-Clovia2.jpg"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  Sale
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/BOTW_March15to21/CATEGORY_PAGE_ACS_Women.png"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
