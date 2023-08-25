import { useState, useEffect } from "react";

import { getData } from "src/utils/api";

import Menu from "src/components/Menu/Menu";

const Favourites = () => {
  return (
    <div>
      <Menu />
      <p>Favorites</p>
    </div>
  );
};

export default Favourites;
