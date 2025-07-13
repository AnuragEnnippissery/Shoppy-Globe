import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './Header.css'
import {  FaShoppingCart } from 'react-icons/fa';

function Header(){
    const cartItems = useSelector(state => state.cart.items);
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
                        <li> <FaShoppingCart/> Cart {cartItems.length}</li>
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