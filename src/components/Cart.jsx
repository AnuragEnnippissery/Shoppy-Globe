import { useSelector,useDispatch } from 'react-redux';
import { removeFromCart ,decreaseQuantity ,addToCart} from '../utils/cartSlice';
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt, FaShoppingCart } from 'react-icons/fa';
import './Cart.css'
import CartItem from './CartItem';
import {
  addToCartAsync,
  removeFromCartAsync,
  decreaseQuantityAsync,
  fetchCart
} from '../utils/cartThunk';
import { useEffect } from 'react';

function Cart(){
    const dispatch=useDispatch()
    //const user = useSelector((state) => state.auth.user);
    const userId=localStorage.getItem("id")
    //const StoredUserId="64d1a013fc13ae1234567890"
    useEffect(() => {
        if (userId && userId) {
            dispatch(fetchCart(userId));
        }
    }, [dispatch, userId]);

    const cartItems = useSelector(state => state.cart.items);
    //let userId= "64d1a013fc13ae1234567890";
    //let ProductId= "64d1a123fc13ae1234567891";
     
    const navigate=useNavigate()
    function HandleRemove(product){
        dispatch(removeFromCart(product))
        const productId=product?.id;
        dispatch(removeFromCartAsync({ userId, productId }))
    }
    function HandleDecreaseQuantity(product){
        dispatch(decreaseQuantity(product))
       const productId=product?.id;
        dispatch(decreaseQuantityAsync({ userId, productId }))
    }
    function HandleAdd(product) {
        dispatch(addToCart(product));
        //alert("123")
        console.log("message",product)
        //dispatch(addToCartAsync(userId,ProductId))
        const productId=product?.id; //product._id || product.id;  make sure this is correct
        dispatch(addToCartAsync({ userId, productId }));
    }
    function handleCheckout() {
        navigate('/Checkout'); // ✅ Navigate to checkout page
    }

    const cartTotal = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
    const roundedTotal=cartTotal.toFixed(2)
    return(
        <>
        <h3 style={{alignItems:"center"}}> Shopping Cart <FaShoppingCart/></h3>
        <div>
            {cartItems.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                cartItems.map(item => (
                <div key={item.id} className='cart-container'>
                    <div>
                        <CartItem data={item}/>   
                        {/* <p>{item.title} - ₹{item.price} x {item.quantity}</p>
                        <img src={item.images[0]}alt={item.title} height="200px" width="150px"/> */}
                    </div>
                    
                    <div className='button-group'>
                        <button onClick={()=>HandleAdd(item)}>+</button>
                        <button onClick={()=>HandleDecreaseQuantity(item)}>-</button>
                        <button onClick={()=>HandleRemove(item)}><FaTrashAlt/></button>

                    </div>
                    
                </div>
                ))
            )}
        </div>
        <div>
            {cartItems.length > 0 && (
                <>
                <h4>Total: ₹{roundedTotal}</h4>
                <button onClick={handleCheckout}>Submit</button>
                </>
      )}
        </div>
        



  

  
   

        </>
    )
}
export default Cart;