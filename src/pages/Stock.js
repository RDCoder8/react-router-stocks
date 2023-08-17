import { useParams } from "react-router-dom";
import stocks from "../data.js";

export default function Stock() {
  const { symbol } = useParams();

  try {
    const stock = stocks.find((stock) => stock.symbol === symbol);

    if (!stock) throw new Error("Stock doesn't exist");
    return (
      <div>
        <h1>{stock.name}</h1>
        <h2>Symbol: {stock.symbol}</h2>
        <h3>Price: {stock.lastPrice}</h3>
        <h3>Change: {stock.change}</h3>
        <h3>High: {stock.high}</h3>
        <h3>Low: {stock.low}</h3>
        <h3>Open: {stock.open}</h3>
      </div>
    );
  } catch (error) {
    return <h2>{error.message}</h2>;
  }
}
