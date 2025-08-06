import { useParams } from "react-router-dom";
//import useGetData from "../utils/dummydata";
import {useGetSingleProduct} from "../utils/dummydata";
import React from "react";
import "./ProductItem.css";
function ProductDetail() {
  const params = useParams();
  const { id } = useParams();
  console.log("id", id);
  console.log("params",params)
  const product = useGetSingleProduct(id);
  //const Product = productData.filter((product) => String(product._id) === String(params.id));
  console.log("product detail", product);

  return (
    <>
      <div>
        {product?(
          <>
            <h2>{product.title}</h2>
      <div className="contents">
        <div>
          <img
            src={product.image_url}
            alt={product.title}
            height="300px"
            width="250px"
          />
        </div>
        <div>
          <h3>Rating: {product.rating}</h3>
          <h3>Brand: {product.brand}</h3>
          <h3>Price: ₹{product.price}</h3>
          <h3>Description: {product.description}</h3>
          <h3>Available Stock: {product.stock} units</h3>
        </div>
      </div>
      </>
        ):(<p>Loading product</p>)}
          

        {/* {Product.map((item) => (
          <React.Fragment key={item._id}>
            <h2>{item.title}</h2>
            <div className="contents">
              <div>
                <img
                  src={item.images[0]}
                  alt={item.title}
                  height="300px"
                  width="250px"
                />
              </div>
              <div>
                <h3>Rating: {item.rating}</h3>
                <h3>Brand: {item.brand}</h3>
                <h3>Price: ₹{item.price}</h3>
                <h3>Description: {item.description}</h3>
                <h3>Available Stock: {item.stock} units</h3>
              </div>
            </div>
          </React.Fragment>
        ))} */}
        
          

        
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
  );
}
export default ProductDetail;
