import {Link} from "react-router-dom"


export default function Nav (props){
    return(
        <div className="nav">
            <Link to="/">
                <div>
                    HOME
                </div>
            </Link>
            <Link to="/Stock">
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