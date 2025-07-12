import { useSelector } from 'react-redux';

function Checkout() {
  const cartItems = useSelector(state => state.cart.items);

  const cartTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const roundedTotal=cartTotal.toFixed(2)
  return (
    <div>
      <h2> Final Checkout Details</h2>
      {cartItems.length === 0 ? (
        <p>No items to checkout</p>
      ) : (
        <ol>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.title} - ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
            </li>
          ))}
        </ol>
      )}
      <h3>Total: ₹{roundedTotal}</h3>
    </div>
  );
}

export default Checkout;
