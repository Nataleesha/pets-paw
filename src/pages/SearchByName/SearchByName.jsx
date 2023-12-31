import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import { Helmet } from "react-helmet-async";

import { getData } from "src/utils/api";
import { getGridGroups } from "src/utils/gridDivision";

import Menu from "src/components/Menu/Menu";
import Breadcrumbs from "src/components/Breadcrumbs/Breadcrumbs";
import NoItemFound from "src/components/NoItemFound/NoItemFound";
import Loader from "src/components/Loader/Loader";

import { CardContainer } from "src/components/CardContainer.styled";
import {
  NameResults,
  Name,
  Group,
  ImageContainer,
  Image,
  ImageOverlay,
  TextOverlay,
} from "./SearchByName.styled";

const SearchByName = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const { state } = useLocation();

  const fetchBreeds = useCallback(async () => {
    const { data } = await getData("breeds");
    return data;
  }, []);

  useEffect(() => {
    const fetchQuery = async () => {
      setLoading(true);
      const res = await fetchBreeds();

      if (state) {
        const filteredBreeds = res.filter((breed) =>
          breed.name.toLowerCase().includes(state.toLowerCase())
        );

        const filteredBreedsIds = filteredBreeds.map((breed) => breed.id);

        const finalSearchResult = await getData(
          `images/search?limit=20&breed_ids=${filteredBreedsIds.join()}`
        );
        setResult(finalSearchResult.data);
        setLoading(false);
      }
    };

    fetchQuery();
  }, [fetchBreeds, state]);

  const greedImages = getGridGroups(result).map((group) => {
    return (
      <Group key={nanoid()}>
        {group.map((image) => {
          return (
            <ImageContainer key={image.id}>
              <Link to={`/breeds/${image.breeds[0].id}`}>
                <Image src={image.url} alt="cat" />
                <ImageOverlay>
                  <TextOverlay>{image.breeds[0].name}</TextOverlay>{" "}
                </ImageOverlay>
              </Link>
            </ImageContainer>
          );
        })}
      </Group>
    );
  });

  return (
    <>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <Menu />
      <CardContainer>
        <Breadcrumbs text="Search" />
        {state && (
          <NameResults>
            Search results for: <Name>{state}</Name>
          </NameResults>
        )}
        {loading ? (
          <Loader />
        ) : (
          <div>{result.length ? greedImages : <NoItemFound />}</div>
        )}
      </CardContainer>
    </>
  );
};

export default SearchByName;
