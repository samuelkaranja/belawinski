import React from "react";
import "./home.css";
import Banner from "../../components/Banner/Banner";
import Offers from "../../components/Offers/Offers";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Banner subtitle={"Exclusive drink service"} title={"Belawinski Bar"} />
      <Offers />
    </div>
  );
};

export default Home;
