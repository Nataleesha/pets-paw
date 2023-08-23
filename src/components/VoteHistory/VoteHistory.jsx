import PropTypes from "prop-types";

import { List, ListItem } from "./VoteHistory.styled";

const VoteHistory = (history) => {
  return !history.length ? null : (
    <List>
      {history.map((vote) => {
        return <ListItem key={vote.id}></ListItem>;
      })}
    </List>
  );
};

export default VoteHistory;

VoteHistory.propTypes = {
  history: PropTypes.array.isRequired,
};
