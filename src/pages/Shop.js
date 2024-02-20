import React from "react";
import Banner from "../components/banner/Banner";
import Popular from "../components/popular/Popular";
import Offer from "../components/offer/Offer";
import NewCollections from "../components/newcollections/NewCollections";
import Newsletter from "../components/newsletter/Newsletter";

const Shop = () => {
  return (
    <div>
      <Banner />
      <Popular />
      <Offer />
      <NewCollections />
      <Newsletter />
    </div>
  );
};

export default Shop;
