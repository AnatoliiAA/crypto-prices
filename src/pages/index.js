import CoinsPrice from "../components/CoinsPrice";
import getCoinsPrice from "../api/api";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { setTokensData } from "../store/tokensSlice";
import Head from "next/head";

const Index = (data) => {
  const dispatch = useDispatch();
  dispatch(setTokensData(data.data.data));
  return (
    <>
      <Head>
        <title>Crypto prices</title>
      </Head>
      <Header />
      <CoinsPrice />
    </>
  );
};

export async function getServerSideProps(context) {
  const data = await getCoinsPrice();
  return {
    props: { data },
  };
}

export default Index;
