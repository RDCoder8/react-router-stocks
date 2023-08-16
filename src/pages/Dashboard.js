import { Link } from "react-router-dom";
import stocks from "../data"

export default function Dashboard(props){
    return (
        <div className="stocks">
            {/* Mapping over the stock array and singularly printing links to stocks themselves to the DOM */}
          {stocks.map((stock) => {
            // Symbol is denoted in the array which gets denoted in the URL bar
            const { name, symbol } = stock;
            return (
                //Symbol is denoted in the array which gets denoted in the URL bar
              <Link to={`/Stock/${symbol}`} key = {stock.symbol}>
                <h2>{name}</h2>
              </Link>
            );
          })}
        </div>
      );
    };