import styles from "../styles/coin-price-plate.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

const CoinPricePlate = ({
  name,
  price,
  symbol,
  priceChange,
  sortByPrice,
  sortByPriceChange,
}) => {
  return (
    <div className={styles.price_plate} key={symbol}>
      <span className={`${styles.ceil} ${styles.price_plate__symbol}`}>
        {symbol}
      </span>

      <span className={styles.ceil}>{name}</span>

      <span
        className={`${styles.ceil} ${sortByPrice ? styles.clickable : ""}`}
        onClick={sortByPrice}
      >
        {price}
        {sortByPrice && (
          <FontAwesomeIcon className={styles.sort_icon} icon={faSort} />
        )}
      </span>

      <span
        className={`${styles.ceil} ${styles.price_plate__change} ${
          typeof priceChange === "number" && priceChange > 0
            ? styles.price_plate__change_green
            : typeof priceChange === "number" && priceChange < 0
            ? styles.price_plate__change_red
            : ""
        } ${sortByPriceChange ? styles.clickable : ""}`}
        onClick={sortByPriceChange}
      >
        {typeof priceChange === "number" ? priceChange.toFixed(3) : priceChange}
        {sortByPriceChange && (
          <FontAwesomeIcon className={styles.sort_icon} icon={faSort} />
        )}
      </span>
    </div>
  );
};

export default CoinPricePlate;
