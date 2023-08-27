import { useState, useEffect } from "react";

import { getData } from "src/utils/api";

import Menu from "src/components/Menu/Menu";

const Dislikes = () => {
  return (
    <div>
      <Menu />
      <p>Dislikes</p>
    </div>
  );
};

export default Dislikes;
