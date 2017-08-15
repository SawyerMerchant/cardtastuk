import moneyFormatter from "money-formatter";
const ITEMS_PER_PAGE = 6;

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

export const calculatePriceUnformatted = (quantity, prices) => {
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
    let price = calculatePriceUnformatted(item.list.count, item.card.price);
    total += price;
  });
  total = moneyFormatter.format("USD", total / 100);

  return total;
};

export const flashMsgs = {
  badPass: "Your passwords did not match. Please try again.",
  badLogin:
    "Could not login. Please re-enter your email and password and try again.",
  unauthenticated: "Please login first before continuing.",
  successfulUpload: "File uploaded successfully.",
  badUpload: "Something went wrong. Please check your CSV file and try again."
};

export const handlePageIncrement = router => {
  let currentPage = getParams(router.location.search).page;
  if (!currentPage) {
    return 2;
  } else {
    return Number(currentPage) + 1;
  }
};

export const handlePageDecrement = router => {
  let currentPage = getParams(router.location.search).page;
  if (!currentPage) {
    return 1;
  } else if (+currentPage === 1) {
    return 1;
  } else {
    return Number(currentPage) - 1;
  }
};

const filterByCategory = (cards, category) => {
  if (category === "") {
    return cards;
  }

  let results = [];
  cards.forEach(card => {
    if (card.category.name === category) {
      results.push(card);
    }
  });

  return results;
};

const filterByTag = (cards, tag) => {
  if (tag === "") {
    return cards;
  }

  let results = [];
  cards.forEach(card => {
    card.tags.forEach(eachTag => {
      if (eachTag.name === tag) {
        results.push(card);
      }
    });
  });

  return results;
};

export const paginateCards = (cards, page, itemsPerPage) => {
  if (page === 1) {
    return cards.slice(0, itemsPerPage);
  }

  let start = (page - 1) * itemsPerPage + 1;
  let end = page * itemsPerPage + 1;

  return cards.slice(start, end);
};

export const filterCards = (cards, router, category, tag) => {
  let filteredCards = filterByCategory(cards, category);
  filteredCards = filterByTag(filteredCards, tag);

  let page = getParams(router.location.search).page || 1;
  filteredCards = paginateCards(filteredCards, +page, ITEMS_PER_PAGE);
  return filteredCards;
};

export const cardFonts = [
  {
    name: "Dancing Script",
    cssName: "dancing-script"
  },
  {
    name: "Indie Flower",
    cssName: "indie-flower"
  },
  {
    name: "Great Vibes",
    cssName: "great-vibes"
  },
  {
    name: "Amatic SC",
    cssName: "amatic-sc"
  },
  {
    name: "Satisfy",
    cssName: "satisfy"
  },
  {
    name: "Shadows Into Light Two",
    cssName: "shadows-into-light-two"
  },
  {
    name: "Tangerine",
    cssName: "tangerine"
  }
];

export const parseSubdomain = () => {
  let host = window.location.hostname.split(".");

  if (process.env && process.env.NODE_ENV === "development") {
    if (host[0] !== "localhost") {
      return host[0];
    }

    return null;
  } else {
    if (host[0] !== "cardtastuk") {
      return host[0];
    }

    return null;
  }
};
