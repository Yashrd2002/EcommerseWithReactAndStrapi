import React from "react";
import "./FeaturedProducts.css";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div>
      <div className="featuredProducts">
        <div className="top">
          <h1>{type} Products</h1>
        </div>
        <div className="bottom">
          {error
            ? "error"
            : loading
            ? "loading.."
            : data?.map((item) => {
                return <Card item={item} key={item.id} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
