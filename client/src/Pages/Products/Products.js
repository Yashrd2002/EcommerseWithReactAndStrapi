import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../Components/List/List";
import "./Products.css";
import useFetch from "../../hooks/useFetch";

function Products() {
  const catId = parseInt(useParams().id);
  const [maxPrice, setmaxPrice] = useState(1000);
  const [sort, setsort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/subcategories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const ischecked = e.target.checked;
    setSelectedSubCats(
      ischecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };
  console.log(selectedSubCats);

  return (
    <div className="products">
      <div className="left">
        <div className="filter">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id="1"
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filter">
          <h2>Filter by price</h2>
          <div className="inputItem">
            0
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setmaxPrice(e.target.value)}
            />
            {maxPrice}
          </div>
        </div>
        <div className="filter">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setsort("asc")}
            />
            <label htmlFor="asc">Price(Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setsort("desc")}
            />
            <label htmlFor="desc">Price(higest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="img"
          src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  );
}

export default Products;
