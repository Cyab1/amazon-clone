import React from "react";
import "./Home.css";
import { Route } from "react-router-dom";
import Products from "../Products";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_img"
          src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
          alt="BookPic"
        />
        <Products />
      </div>
    </div>
  );
};

export default Home;
