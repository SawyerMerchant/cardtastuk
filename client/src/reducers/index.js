import { combineReducers } from "redux";
// import { user } from "./auth";
// import { allUsers } from "./allUsers";
// import { specificBoard } from "./specificBoard";
import { cards } from "./cards";
// import { lists } from "./lists";
// import { currentCard } from "./currentCard";

const cardTastukApp = combineReducers({
  cards
});

export default cardTastukApp;
