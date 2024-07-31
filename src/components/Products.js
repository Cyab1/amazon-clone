import React from "react";
import "./Products.css";
import Product from "./Product";
//import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
    <div className="products_row">
      <Product
        id="1"
        title="SAMSUNG Galaxy Tab A9+ Tablet 11” 64GB Android Tablet, Big Screen, Quad Speakers, Upgraded Chipset, Multi Window Display, Slim, Light, Durable Design, US Version, 2024, Graphite"
        image="https://m.media-amazon.com/images/I/31oCHHgQVaL._AC_SR400,600_.jpg"
        rating={4.5}
        price={169.99}
      />
       <Product
        id="2"
        title="SAMSUNG Galaxy Tab A9+ Tablet 11” 64GB Android Tablet, Big Screen, Quad Speakers, Upgraded Chipset, Multi Window Display, Slim, Light, Durable Design, US Version, 2024, Graphite"
        image="https://m.media-amazon.com/images/I/31oCHHgQVaL._AC_SR400,600_.jpg"
        rating={4.5}
        price={145.99}
      />
    </div>
    
    <div className="product_row">
    <Product
        id="3"
        title="SAMSUNG Galaxy Tab A9+ Tablet 11” 64GB Android Tablet, Big Screen, Quad Speakers, Upgraded Chipset, Multi Window Display, Slim, Light, Durable Design, US Version, 2024, Graphite"
        image="https://m.media-amazon.com/images/I/31oCHHgQVaL._AC_SR400,600_.jpg"
        rating={4.5}
        price={150.99}
      />
    </div>
    </>
  );
};

export default Products;
