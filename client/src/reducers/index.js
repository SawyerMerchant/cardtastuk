import { combineReducers } from "redux";
import { cardsAll } from "./cardsAll";
import { currentCard } from "./currentCard";
import { cardMessage } from "./cardMessage";

const cardTastukApp = combineReducers({
  cardsAll,
  currentCard,
  cardMessage
});

export default cardTastukApp;
