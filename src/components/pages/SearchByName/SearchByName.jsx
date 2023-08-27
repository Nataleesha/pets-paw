import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

import { getData } from "src/utils/api";

import Menu from "src/components/Menu/Menu";
import Breadcrumbs from "src/components/Breadcrumbs/Breadcrumbs";
import NoItemFound from "src/components/NoItemFound/NoItemFound";

import { Container, NameResults, Name } from "./SearchByName.styled";

const SearchByName = () => {
  const [result, setResult] = useState([]);

  const { state } = useLocation();

  const fetchBreeds = useCallback(async () => {
    const { data } = await getData("breeds");
    return data;
  }, []);

  useEffect(() => {
    const fetchQuery = async () => {
      const res = await fetchBreeds();

      if (state) {
        const filteredBreeds = res.filter((breed) =>
          breed.name.toLowerCase().includes(state.toLowerCase())
        );

        const filteredBreedsIds = filteredBreeds.map((breed) => breed.id);

        const finalSearchResult = await getData(
          `images/search?limit=10&breed_ids=${filteredBreedsIds.join()}`
        );
        setResult(finalSearchResult.data);
        console.log(finalSearchResult.data);
      }
    };

    fetchQuery();
  }, [fetchBreeds, state]);

  return (
    <div>
      <Menu />
      <Container>
        <Breadcrumbs text="Search" />
        {state && (
          <NameResults>
            Search results for: <Name>{state}</Name>
          </NameResults>
        )}
        <div>
          {result.length ? (
            result.map((obj) => (
              <img key={obj.id} src={obj.url} alt={obj.breeds[0].name} />
            ))
          ) : (
            <NoItemFound />
          )}
        </div>
      </Container>
    </div>
  );
};

export default SearchByName;
