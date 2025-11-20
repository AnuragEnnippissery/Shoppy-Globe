import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
    const cartItems = useSelector(state => state.cart.items);
    const [user, setUser] = useState("");
    const [open, setOpen] = useState(false); // mobile navbar toggle

    useEffect(() => {
        const storedUser = localStorage.getItem("username");
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    return (
        <>
            <div className="container">

                {/* Logo */}
                <h1 className="title">ShoppyE Globe</h1>

                {/* Hamburger Icon (Small Screen) */}
                <button className="menu-btn" onClick={() => setOpen(!open)}>
                    {open ? <FaTimes /> : <FaBars />}
                </button>

                {/* Navigation */}
                <nav className={`navbar ${open ? "show" : ""}`}>
                    {user && <p className="welcome">Welcome, {user}!</p>}

                    <Link to="/" onClick={() => setOpen(false)}>
                        <li>Home</li>
                    </Link>

                    <Link to="/Cart" onClick={() => setOpen(false)}>
                        <li><FaShoppingCart /> Cart {cartItems.length}</li>
                    </Link>

                    <Link to="/Checkout" onClick={() => setOpen(false)}>
                        <li>Checkout</li>
                    </Link>

                    <Link to="/Login" onClick={() => setOpen(false)}>
                        <li>Login</li>
                    </Link>

                    <Link to="/Register" onClick={() => setOpen(false)}>
                        <li>Register</li>
                    </Link>
                </nav>
            </div>
        </>
    );
}

export default Header;
