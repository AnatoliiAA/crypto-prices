import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectData,
  sortTokensByPrice,
  sortTokensByPriceChange,
} from "../store/tokensSlice";
import CoinPricePlate from "./CoinPricePlate";

const CoinsPrice = () => {
  const tokensData = useSelector(selectData);
  const [descendingByPrice, setDescendingByPrice] = useState(false);
  const [descendingByPriceChange, setDescendingByPriceChange] = useState(false);
  const dispatch = useDispatch();

  const handleSortByPrice = () => {
    dispatch(sortTokensByPrice(descendingByPrice));
    setDescendingByPrice((prevState) => !prevState);
  };

  const handleSortByPriceChange = () => {
    dispatch(sortTokensByPriceChange(descendingByPriceChange));
    setDescendingByPriceChange((prevState) => !prevState);
  };

  return (
    <>
      <CoinPricePlate
        symbol={"Symbol"}
        name={"Coin name"}
        price={"Coin price in USD"}
        priceChange={"Price change in 1 hour, %"}
        sortByPrice={handleSortByPrice}
        sortByPriceChange={handleSortByPriceChange}
      />
      {tokensData.map((coin) => {
        return (
          <CoinPricePlate
            key={coin.symbol}
            symbol={coin.symbol}
            name={coin.name}
            price={coin.quote.USD.price}
            priceChange={coin.quote.USD.percent_change_1h}
          />
        );
      })}
    </>
  );
};

export default CoinsPrice;
