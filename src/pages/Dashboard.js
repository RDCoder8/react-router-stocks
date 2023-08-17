import { Link } from "react-router-dom";
import stocks from "../data"

export default function Dashboard(props){
    return (
        <div className="stocks">
          {stocks.map((stock) => {
            return (
              <Link to={`/Stock/${stock.symbol}`} key = {stock.symbol}>
                <h2>{stock.name}</h2>
                <p>{stock.symbol}</p>
              </Link>
            );
          })}
        </div>
      );
    };