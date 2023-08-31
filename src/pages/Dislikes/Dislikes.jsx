import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { getData } from "src/utils/api";

import Menu from "src/components/Menu/Menu";

const Dislikes = () => {
  return (
    <>
      <Helmet>
        <title>Dislikes</title>
      </Helmet>
      <div>
        <Menu />
        <p>Dislikes</p>
      </div>
    </>
  );
};

export default Dislikes;
