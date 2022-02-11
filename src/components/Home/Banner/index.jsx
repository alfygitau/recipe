import React from "react";
import "./styles.css";
import bannerImg from "./banner.png";
import Logo from "../../common/Logo";

const Banner = () => {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <div className="content-main">
          <h1>Delicious food for your cravings</h1>
          <p>We make fresh and healthy meals with different recipes</p>
          <button>
            View Menu <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
      <img src={bannerImg} alt="banner" className="header-img" />
    </header>
  );
};

export default Banner;
