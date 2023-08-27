import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { nanoid } from "nanoid";

import { getData } from "src/utils/api";
import { getGridGroups } from "src/utils/gridDivision";

import Menu from "src/components/Menu/Menu";
import Breadcrumbs from "src/components/Breadcrumbs/Breadcrumbs";
import NoItemFound from "src/components/NoItemFound/NoItemFound";
import Loader from "src/components/Loader/Loader";

import {
  Container,
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
    setLoading(true);
    const fetchQuery = async () => {
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
        {loading ? (
          <Loader />
        ) : (
          <div>
            {result.length ? (
              getGridGroups(result).map((group) => {
                return (
                  <Group key={nanoid()}>
                    {group.map((image) => {
                      return (
                        <ImageContainer key={image.id}>
                          <Image src={image.url} alt="cat" />
                          <ImageOverlay>
                            <TextOverlay>{image.breeds[0].name}</TextOverlay>{" "}
                          </ImageOverlay>
                        </ImageContainer>
                      );
                    })}
                  </Group>
                );
              })
            ) : (
              <NoItemFound />
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default SearchByName;
