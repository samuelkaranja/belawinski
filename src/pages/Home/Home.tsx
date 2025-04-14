import React from "react";
import "./home.css";
import Banner from "../../components/Banner/Banner";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Banner subtitle={"Exclusive drink service"} title={"Belawinski Bar"} />
    </div>
  );
};

export default Home;
