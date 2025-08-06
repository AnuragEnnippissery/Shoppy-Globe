import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './Header.css'
import {  FaShoppingCart } from 'react-icons/fa';
import { useState,useEffect } from "react";

function Header(){
    const cartItems = useSelector(state => state.cart.items);
    const [user, setUser] = useState("");

    useEffect(() => {
        const storedUser = sessionStorage.getItem("username");
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);
    return(
        <>
        <div className="container">
            <div>
            <h1 className='title'>ShoppyE Globe </h1>
            </div>
            <div>
                <nav className='navbar'>
                     {user && <p>Welcome, {user}!</p>}
                    <Link to ="/">
                        <li>Home</li>
                    </Link>
                    <Link to ="/Cart">
                        <li> <FaShoppingCart/> Cart {cartItems.length}</li>
                    </Link>
                    <Link to ="/Checkout">
                        <li>Checkout</li>
                    </Link>
                    <Link to ="/Login">
                        <li>Login</li>
                    </Link>
                    <Link to ="/Register">
                        <li>Register</li>
                    </Link>
                </nav>
            </div>
        </div>
        
        </>
    )
}
export default Header;