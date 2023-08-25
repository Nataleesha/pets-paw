import { useState, useEffect } from "react";

import { getData } from "src/utils/api";

import Menu from "src/components/Menu/Menu";

const SearchByName = () => {
  return (
    <div>
      <Menu />
      <p>Searcg by name</p>
    </div>
  );
};

export default SearchByName;
