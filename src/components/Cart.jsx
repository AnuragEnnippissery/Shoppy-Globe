import { useSelector,useDispatch } from 'react-redux';
import { removeFromCart ,decreaseQuantity ,addToCart} from '../utils/cartSlice';
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt, FaShoppingCart } from 'react-icons/fa';
import './Cart.css'

function Cart(){
    const cartItems = useSelector(state => state.cart.items);
     const dispatch=useDispatch()
     const navigate=useNavigate()
    function HandleRemove(product){
        dispatch(removeFromCart(product))
    }
    function HandleDecreaseQuantity(product){
        dispatch(decreaseQuantity(product))
    }
    function HandleAdd(product) {
        dispatch(addToCart(product));
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
                        <p>{item.title} - ₹{item.price} x {item.quantity}</p>
                        <img src={item.images[0]}alt={item.title} height="200px" width="150px"/>
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