import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import { List, ListItem } from "./VoteHistory.styled";

const VoteHistory = ({ history }) => {
  return !history.length ? null : (
    <List>
      {history.slice(0, 10).map((vote) => {
        return (
          <ListItem key={nanoid()}>
            <p>{vote.time}</p>
            <p>
              Image ID: <b>{vote.id}</b> was {vote.action}
            </p>
          </ListItem>
        );
      })}
    </List>
  );
};

export default VoteHistory;

VoteHistory.propTypes = {
  history: PropTypes.array.isRequired,
};
