import { combineReducers } from "redux";
import { cardsAll } from "./cardsAll";
import { currentCard } from "./currentCard";
import { cardMessage } from "./cardMessage";
import { user } from "./user";

const cardTastukApp = combineReducers({
  cardsAll,
  currentCard,
  cardMessage,
  user
});

export default cardTastukApp;
