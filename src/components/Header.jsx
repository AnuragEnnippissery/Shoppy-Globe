import { Link } from "react-router-dom";
import './Header.css'
import {  FaShoppingCart } from 'react-icons/fa';
function Header(){
    return(
        <>
        <div className="container">
            <div>
            <h1 className='title'>ShoppyE Globe </h1>
            </div>
            <div>
                <nav className='navbar'>
                    <Link to ="/">
                        <li>Home</li>
                    </Link>
                    <Link to ="/Cart">
                        <li> <FaShoppingCart/> Cart</li>
                    </Link>
                    <Link to ="/Checkout">
                        <li>Checkout</li>
                    </Link>
                </nav>
            </div>
        </div>
        
        </>
    )
}
export default Header;