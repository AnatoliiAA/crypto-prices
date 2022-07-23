import styles from "../styles/header.module.scss";

function Header() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Crypto Coins Prices</h1>
    </div>
  );
}

export default Header;
