import { createContext } from "react";

const voteContext = createContext({
  candiates: [],
  dispatch: () => {},
  totalVotes: 0,
});

export default voteContext;
