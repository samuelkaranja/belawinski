import React from "react";
import "./home.css";
import Banner from "../../components/Banner/Banner";
import Offers from "../../components/Offers/Offers";
import Cocktail from "../../components/Cocktail/Cocktail";
import Pricing from "../../components/Pricing/Pricing";
import ThreeDViewSection from "../../components/3D/ThreeDViewSection";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Banner
        subtitle={"Exclusive drink service and music"}
        title={"Belawinski Bar and restaurant"}
      />
      <ThreeDViewSection />
      <Offers />
      <Cocktail />
      <Pricing />
    </div>
  );
};

export default Home;
