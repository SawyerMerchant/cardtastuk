import { combineReducers } from "redux";
import { cardsAll } from "./cardsAll";
import { currentCard } from "./currentCard";
import { cardMessage } from "./cardMessage";
import { user } from "./user";
import { listsAll } from "./listsAll";
import { currentList } from "./currentList";
import { shoppingCart } from "./shoppingCart";

const cardTastukApp = combineReducers({
  cardsAll,
  currentCard,
  cardMessage,
  user,
  listsAll,
  currentList,
  shoppingCart
});

export default cardTastukApp;
