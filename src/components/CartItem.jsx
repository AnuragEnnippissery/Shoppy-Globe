function CartItem(props){
    console.log("cart item",props)
    return(
        <>
        {props?(
            <>
             <p>{props.data.title} - ₹{props.data.price} x {props.data.quantity}</p>
        <img src={props.data.image}alt={props.data.title} height="200px" width="150px"/>
        </>

        ):(<p>Loading  Cart product's</p>)}
       
        </>
    )
}
export default CartItem