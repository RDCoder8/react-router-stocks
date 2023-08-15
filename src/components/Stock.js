import {useParams} from "react-router-dom"
import stocks from "../data.js"

export default function Stock(){
    //pulling symbol from the URL directory to use for the search to display the matching stock information
    const { symbol } = useParams()

try {
    //assigning stock a value of a .find output, where the symbol pulled from useParams is 
    const stock= stocks.find(stock => stock.symbol === symbol)

    if (!stock) throw new Error("Stock doesn't exist")
    return(
<div>
            <h1>{stock.symbol}</h1>
            <h1>{stock.lastPrice}</h1>
            <h1>{stock.change}</h1>
            <h1>{stock.high}</h1>
            <h1>{stock.low}</h1>
            <h1>{stock.open}</h1>
</div>

)} catch (error) {
    return <h2>{error.message}</h2>
}
}