import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

import { GridContainer, Group, ImageContainer, Image } from "./Grid.styled";

const Grid = ({ images }) => {
  const getGridGroups = (arr) => {
    const groups = [];
    for (let i = 0; i < arr.length; i += 5) {
      groups.push(arr.slice(i, i + 5));
    }
    return groups;
  };

  return (
    <GridContainer>
      {getGridGroups(images).map((group) => {
        return (
          <Group key={nanoid()}>
            {group.map((image) => {
              return (
                <ImageContainer key={image.id}>
                  <Image src={image.url} alt="cat" />
                </ImageContainer>
              );
            })}
          </Group>
        );
      })}
    </GridContainer>
  );
};

export default Grid;

Grid.propTypes = {
  images: PropTypes.array.isRequired,
};
