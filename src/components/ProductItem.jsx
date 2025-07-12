import './ProductItem.css'
import { useNavigate } from 'react-router-dom';
function ProductItem(props){
    const navigate = useNavigate();
    function HandleCardClick(){
        navigate(`/ProductList/${props.detail.id}`)

    }
    const handleAddToCartClick = (e) => {
        e.stopPropagation(); //  Stop from bubbling to card click
        props.addtoCart(props.detail);
    };
    //onClick={()=>props.addtoCart(props.detail)}
    return(
        <>
        <div >
            <div className="product" onClick={HandleCardClick}>
                <h3>{props.detail.title}</h3>
                <img src={props.detail.images[0]}alt={props.detail.title} height="300px" width="250px"/>
                {/* <h3>{props.detail.rating}</h3> */}
                <h3>₹ {props.detail.price}</h3>
                <button className='button' onClick={handleAddToCartClick}>Add to cart</button> 

            </div>
        </div>
        
        </>
    )
}
export default ProductItem;