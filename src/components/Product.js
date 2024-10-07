import React, { useContext } from "react";
import "./Product.css";
import ShoppingContext from "./Context/shopping/shoppingContext";

const Product = ({ id, title, image, rating, price }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { addToBasket } = shoppingContext;

  const addToCartHandler = () => {
    addToBasket({ item: { id, title, image, rating, price } });
  };
  return (
    <div className="product" key={id}>
      <img src={image} alt="" />
      <div className="product_info">
        <p>{title}</p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐️</p>
            ))}
        </div>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <button className="product_button" onClick={addToCartHandler}>
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
