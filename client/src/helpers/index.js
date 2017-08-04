import moneyFormatter from "money-formatter";

export const getParams = query => {
  if (!query) {
    return {};
  }

  return (/^[?#]/.test(query) ? query.slice(1) : query)
    .split("&")
    .reduce((params, param) => {
      let [key, value] = param.split("=");
      params[key] = value ? decodeURIComponent(value.replace(/\+/g, " ")) : "";
      return params;
    }, {});
};

export const calculatePrice = (quantity, prices) => {
  let total;

  if (quantity >= 1 && quantity <= 25) {
    total = moneyFormatter.format("USD", prices.x25 / 100 * 25);
  } else if (quantity < 100) {
    total = moneyFormatter.format("USD", prices.x25 / 100 * quantity);
  } else if (quantity < 250) {
    total = moneyFormatter.format("USD", prices.x100 / 100 * quantity);
  } else if (quantity < 500) {
    total = moneyFormatter.format("USD", prices.x250 / 100 * quantity);
  } else if (quantity < 1000) {
    total = moneyFormatter.format("USD", prices.x500 / 100 * quantity);
  } else if (quantity < 2000) {
    total = moneyFormatter.format("USD", prices.x1000 / 100 * quantity);
  } else if (quantity >= 2000) {
    total = moneyFormatter.format("USD", prices.x2000 / 100 * quantity);
  } else {
    total = 0;
  }

  return total;
};

const _calculatePriceUnformatted = (quantity, prices) => {
  let total;
  if (quantity >= 1 && quantity <= 25) {
    total = prices.x25 * 25;
  } else if (quantity < 100) {
    total = prices.x25 * quantity;
  } else if (quantity < 250) {
    total = prices.x100 * quantity;
  } else if (quantity < 500) {
    total = prices.x250 * quantity;
  } else if (quantity < 1000) {
    total = prices.x500 * quantity;
  } else if (quantity < 2000) {
    total = prices.x1000 * quantity;
  } else if (quantity >= 2000) {
    total = prices.x2000 * quantity;
  } else {
    total = 0;
  }

  return total;
};

export const calculateTotal = cart => {
  let total = 0;

  cart.forEach(item => {
    let price = _calculatePriceUnformatted(item.list.count, item.card.price);
    total += price;
  });
  total = moneyFormatter.format("USD", total / 100);

  return total;
};

export const flashMsgs = {
  badPass: "Your passwords did not match. Please try again.",
  badLogin:
    "Could not login. Please re-enter your email and password and try again.",
  unauthenticated: "Please login first before continuing."
};
