import { useState, useEffect } from "react";

import Menu from "src/components/Menu/Menu";
import BreedsFilter from "src/components/BreedsFilter/BreedsFilter";

import { getData } from "src/utils/api";

import { Container } from "./Breeds.styled";

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    getBreedsList();
  }, []);

  const getBreedsList = async () => {
    const res = await getData("breeds");

    const breedsInfo = res.data.map((breed) => {
      return {
        id: breed.id,
        name: breed.name,
      };
    });

    console.log(breedsInfo);

    setBreeds(breedsInfo);
  };

  return (
    <>
      <Menu />
      <Container>
        <BreedsFilter breeds={breeds} />
      </Container>
    </>
  );
};

export default Breeds;
