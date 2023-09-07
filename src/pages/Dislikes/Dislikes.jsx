import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { getData } from "src/utils/api";

import Menu from "src/components/Menu/Menu";
import Breadcrumbs from "src/components/Breadcrumbs/Breadcrumbs";

import { CardContainer } from "src/components/CardContainer.styled";

const Dislikes = () => {
  return (
    <>
      <Helmet>
        <title>Dislikes</title>
      </Helmet>
      <div>
        <Menu />
        <CardContainer>
          <Breadcrumbs text="Dislikes" />
          <p>Dislikes</p>
        </CardContainer>
      </div>
    </>
  );
};

export default Dislikes;
