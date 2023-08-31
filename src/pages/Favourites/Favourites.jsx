import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { getData } from "src/utils/api";

import Menu from "src/components/Menu/Menu";

const Favourites = () => {
  return (
    <>
      <Helmet>
        <title>Favourites</title>
      </Helmet>
      <div>
        <Menu />
        <p>Favorites</p>
      </div>
    </>
  );
};

export default Favourites;
