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
    total = moneyFormatter.format("USD", prices.x25 / 100 * quantity);
  } else if (quantity <= 100) {
    total = moneyFormatter.format("USD", prices.x100 / 100 * quantity);
  } else if (quantity <= 250) {
    total = moneyFormatter.format("USD", prices.x250 / 100 * quantity);
  } else if (quantity <= 500) {
    total = moneyFormatter.format("USD", prices.x500 / 100 * quantity);
  } else if (quantity <= 1000) {
    total = moneyFormatter.format("USD", prices.x1000 / 100 * quantity);
  } else if (quantity > 1000) {
    total = moneyFormatter.format("USD", prices.x2000 / 100 * quantity);
  } else {
    total = 0;
  }

  return total;
};

export const flashMsgs = {
  badPass: "Your passwords did not match. Please try again.",
  badLogin:
    "Could not login. Please re-enter your email and password and try again.",
  unauthenticated: "Please login first before continuing."
};
