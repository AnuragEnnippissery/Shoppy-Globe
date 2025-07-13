function CartItem(props){
    return(
        <>
        <p>{props.data.title} - ₹{props.data.price} x {props.data.quantity}</p>
        <img src={props.data.images[0]}alt={props.data.title} height="200px" width="150px"/>

        </>
    )
}
export default CartItem