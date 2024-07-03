import axios from 'axios';

const TOKEN_PRICES_URL = 'https://interview.switcheo.com/prices.json';
const TOKEN_IMAGE_BASE_URL = 'https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/';

export const fetchTokenPrices = async () => {
  try {
    const response = await axios.get(TOKEN_PRICES_URL);
    return response.data.reduce((acc, token) => {
      acc[token.currency] = token.price;
      return acc;
    }, {});
  } catch (error) {
    console.error('Error fetching token prices', error);
    return {};
  }
};

export const getTokenImageUrl = (symbol) => `${TOKEN_IMAGE_BASE_URL}${symbol}.svg`;
