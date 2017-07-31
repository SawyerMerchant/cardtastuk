import { combineReducers } from "redux";
// import { user } from "./auth";
// import { allUsers } from "./allUsers";
// import { specificBoard } from "./specificBoard";
import { cardsAll } from "./cardsAll";
import { currentCard } from "./currentCard";
// import { lists } from "./lists";
// import { currentCard } from "./currentCard";

const cardTastukApp = combineReducers({
  cardsAll,
  currentCard
});

export default cardTastukApp;
