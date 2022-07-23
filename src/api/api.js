const BASE_URL =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
const API_KEY = "7bc93bda-c1ab-4e5e-83ed-d7d33295a067";

const getCoinsPrice = async () => {
  const response = await fetch(BASE_URL, {
    headers: {
      "X-CMC_PRO_API_KEY": API_KEY,
    },
  });
  const data = await response.json();
  return data;
};

export default getCoinsPrice;
