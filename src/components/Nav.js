import {Link} from 'react-router-dom';

// Link tells the Application what to show the user in the address bar
// Our routes in App tell the computer what to show in that situation
// each Route defines a relationship between a path and a page or component
// each Link is clickable item that shows the user the related page or component
export default function Nav (props) {
    return (
        <div className='nav'>
            <Link to='/'>
                <div>CRYPTO PRICES</div>
            </Link>
            <Link to='/currencies'>
                <div>CURRENCIES</div>
            </Link>
        </div>
    );
}