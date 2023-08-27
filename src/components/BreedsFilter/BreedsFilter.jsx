import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import { getData } from "src/utils/api";
import Breadcrumbs from "src/components/Breadcrumbs/Breadcrumbs";
import Loader from "src/components/Loader/Loader";

import {
  FilterContainer,
  Select,
  SortContainer,
  AbcSort,
  GridContainer,
  ImageContainer,
  Image,
  ImageOverlay,
  TextOverlay,
  Group,
} from "./BreedsFilter.styled";

const getGridGroups = (arr) => {
  const groups = [];
  for (let i = 0; i < arr.length; i += 5) {
    groups.push(arr.slice(i, i + 5));
  }
  return groups;
};

const BreedsFilter = ({ breeds }) => {
  const [selectedBreed, setSelectedBreed] = useState("");
  const [limit, setLimit] = useState(5);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const res = await getData("images/search?limit=20&has_breeds=1");
      setImages(res.data);
    };

    getImages();
  }, []);

  const handleBreedSelect = (e) => {
    setSelectedBreed(e.target.value);
    const breedImages = async () => {
      setImages([]);
      const res = e.target.value
        ? await getData(
            `images/search?limit=20&has_breeds=1&breed_ids=${e.target.value}`
          )
        : await getData("images/search?limit=20&has_breeds=1");
      setImages(res.data);
    };
    breedImages();
  };

  const handleLimitSelect = (e) => {
    setLimit(e.target.value);
  };

  const abcSort = () => {
    const sorted = [...images].sort((a, b) => {
      const breedA = a.breeds[0].name.toLowerCase();
      const breedB = b.breeds[0].name.toLowerCase();
      return breedA < breedB ? -1 : breedA > breedB ? 1 : 0;
    });
    setImages(sorted);
  };

  const abcSortReversed = () => {
    const sorted = [...images].sort((a, b) => {
      const breedA = a.breeds[0].name.toLowerCase();
      const breedB = b.breeds[0].name.toLowerCase();
      return breedA > breedB ? -1 : breedA < breedB ? 1 : 0;
    });
    setImages(sorted);
  };

  return (
    <>
      <FilterContainer>
        <Breadcrumbs text="Breeds" />
        <Select
          name="breeds"
          value={selectedBreed}
          onChange={handleBreedSelect}
        >
          <option value="">All breeds</option>
          {!breeds
            ? null
            : breeds.map((breed) => {
                return (
                  <option key={breed.id} value={breed.id}>
                    {breed.name}
                  </option>
                );
              })}
        </Select>
        <SortContainer>
          <Select name="limit" value={limit} onChange={handleLimitSelect}>
            <option value="5">Limit: 5</option>
            <option value="10">Limit: 10</option>
            <option value="15">Limit: 15</option>
            <option value="20">Limit: 20</option>
          </Select>
          <AbcSort type="button" onClick={abcSort}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 0.195262C4.26035 -0.0650874 4.68246 -0.0650874 4.94281 0.195262L8.94281 4.19526L8 5.13807L5.13807 2.27614V20H3.80474V2.27614L0.942809 5.13807L0 4.19526L4 0.195262ZM15.1381 1.33333C14.0335 1.33333 13.1381 2.22876 13.1381 3.33333V5.33333H17.1381V3.33333C17.1381 2.22876 16.2426 1.33333 15.1381 1.33333ZM17.1381 6.66667V9.33333H18.4714V3.33333C18.4714 1.49238 16.979 9.93411e-09 15.1381 9.93411e-09C13.2971 9.93411e-09 11.8047 1.49238 11.8047 3.33333V9.33333H13.1381V6.66667H17.1381ZM11.8047 10.6667H15.8047C17.2775 10.6667 18.4714 11.8606 18.4714 13.3333C18.4714 14.1298 18.1222 14.8447 17.5686 15.3333C18.1222 15.822 18.4714 16.5369 18.4714 17.3333C18.4714 18.8061 17.2775 20 15.8047 20H11.8047V10.6667ZM15.8047 14.6667C16.5411 14.6667 17.1381 14.0697 17.1381 13.3333C17.1381 12.597 16.5411 12 15.8047 12H13.1381V14.6667H15.8047ZM13.1381 16H15.8047C16.5411 16 17.1381 16.597 17.1381 17.3333C17.1381 18.0697 16.5411 18.6667 15.8047 18.6667H13.1381V16Z"
                fill="currentColor"
              />
            </svg>
          </AbcSort>
          <AbcSort type="button" onClick={abcSortReversed}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.80474 17.7239V0H5.13807V17.7239L8 14.8619L8.94281 15.8047L4.94281 19.8047C4.81778 19.9298 4.64822 20 4.4714 20C4.29459 20 4.12502 19.9298 4 19.8047L0 15.8047L0.942809 14.8619L3.80474 17.7239ZM15.1381 1.33333C14.0335 1.33333 13.1381 2.22876 13.1381 3.33333V5.33333H17.1381V3.33333C17.1381 2.22876 16.2426 1.33333 15.1381 1.33333ZM17.1381 6.66667V9.33333H18.4714V3.33333C18.4714 1.49238 16.979 0 15.1381 0C13.2971 0 11.8047 1.49238 11.8047 3.33333V9.33333H13.1381V6.66667H17.1381ZM11.8047 10.6667H15.8047C17.2775 10.6667 18.4714 11.8606 18.4714 13.3333C18.4714 14.1298 18.1222 14.8447 17.5686 15.3333C18.1222 15.822 18.4714 16.5369 18.4714 17.3333C18.4714 18.8061 17.2775 20 15.8047 20H11.8047V10.6667ZM15.8047 14.6667C16.5411 14.6667 17.1381 14.0697 17.1381 13.3333C17.1381 12.597 16.5411 12 15.8047 12H13.1381V14.6667H15.8047ZM13.1381 16H15.8047C16.5411 16 17.1381 16.597 17.1381 17.3333C17.1381 18.0697 16.5411 18.6667 15.8047 18.6667H13.1381V16Z"
                fill="currentColor"
              />
            </svg>
          </AbcSort>
        </SortContainer>
      </FilterContainer>
      <GridContainer>
        {!images.length ? (
          <Loader />
        ) : (
          getGridGroups(images.slice(0, limit)).map((group) => {
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
          })
        )}
      </GridContainer>
    </>
  );
};

export default BreedsFilter;

BreedsFilter.propTypes = {
  breeds: PropTypes.array.isRequired,
};
