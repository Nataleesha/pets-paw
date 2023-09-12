import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

import Menu from "src/components/Menu/Menu";
import BreedsFilter from "src/components/BreedsFilter/BreedsFilter";

import { CardContainer } from "src/components/CardContainer.styled";

const Breeds = ({ breeds }) => {
  return (
    <>
      <Helmet>
        <title>Breeds</title>
      </Helmet>
      <Menu />
      <CardContainer>
        <BreedsFilter breeds={breeds} />
      </CardContainer>
    </>
  );
};

export default Breeds;

Breeds.propTypes = {
  breeds: PropTypes.array.isRequired,
};
