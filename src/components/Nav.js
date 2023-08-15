//This is another component from react-router-dom, but it will link to certain pages when someone clicks on a navitem
//Link is creating a place for the user to click, Route routes the link to the separate page
import {Link} from "react-router-dom"

//Link tells the Application what to show the user in the address bar
//Our routes in App tell the computer what to show in that situation
//Each route defines a relationship between a path and a page or component
//Each Link is a clickable item that shows the user the related page or component
export default function Nav (props){
    return(
        <div className="nav">
            {/* We define in App.js that "/" means the Main page */}
            {/* THESE LINKS WILL NOT WORK UNLESS THE ROUTES ARE IN THE ROUTES IN APP.JS */}
            <Link to="/">
                <div>
                    STOCK PRICES
                </div>
            </Link>
            <Link to="/Dashboard">
                <div>
                    STOCKS
                </div>
                </Link>
            <Link to = "/About">
                <div>
                    ABOUT
                </div>
            </Link>
            
        </div>
    )
}