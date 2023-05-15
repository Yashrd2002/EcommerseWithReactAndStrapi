import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
const Card = ({ item }) => {
  const rating = "NaN"
  return (
    <Link className="link" to={`movie/${item.show.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img2.data.attributes.url
            }
            alt=""
            className="fimg"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img.data.attributes.url
            }
            alt=""
            className="simg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="price">
          {/* <h3>${item.oldprice || item?.attributes.oldprice + 20}</h3> */}
          <h3>$20</h3>
          <h3>${item?.attributes.price }</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
