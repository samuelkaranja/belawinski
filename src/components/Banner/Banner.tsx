import React from "react";
import "./banner.css";

type BannerProps = {
  subtitle: string;
  title: string;
};

const Banner: React.FC<BannerProps> = ({ subtitle, title }) => {
  return (
    <div className="banner">
      <h3 className="subtitle">{subtitle}</h3>
      <h1 className="title">{title}</h1>
      <a href="#" className="banner_btn">
        Learn More
      </a>
    </div>
  );
};

export default Banner;
