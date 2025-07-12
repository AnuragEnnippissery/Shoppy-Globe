import { useParams } from "react-router-dom";
import useGetData from "../utils/dummydata";
import './ProductItem.css'
function ProductDetail(){
    const params=useParams()
    console.log("id",params)
    const productData=useGetData()
    const Product=productData.filter(product=>product.id==params.id)
    console.log("product detail",Product)

    
    return(
        <>
        
        <div>
            {Product.map((item)=>{
                return(
                    <>
                        <h2>{item.title}</h2>
                        <div className="contents">
                            <div>
                                <img src={item.images[0]}alt={item.title} height="300px" width="250px"/>
                            </div>
                            <div>
                                <p className="detail-title">Rating :{item.rating}</p>
                                <h3>Brand  {item.brand}</h3>
                                <h3>Price {item.price}</h3>
                                <h3>Description {item.description}</h3>
                                <h3>Available Stock {item.stock}</h3>
                            </div>
                            
                            
                        </div>
                    
                    </>
                )
            })}
            {/* <div >
            <div className="product">
            <h3>{props.detail.title}</h3>
            <img src={props.detail.images[0]}alt={props.detail.title} height="300px" width="250px"/>
            <h3>{props.detail.rating}</h3>
            <h3>{props.detail.brand}</h3>
         </div>
        </div> */}
        
        </div>
        </>
    )
}
export default ProductDetail;