import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import ProductItem from "./ProductItem"
import './ProductItem.css'
import useGetData from "../utils/dummydata"
import { useDispatch } from 'react-redux';
import {addToCart} from "../utils/cartSlice";

function ProductList(){
    // let[data,setData]=useState([])
    // useEffect(()=>{
    //     async function GetProduct(){
    //         let data =await fetch("https://dummyjson.com/products")
    //         let response=await data.json()
    //         console.log("data",response)
    //         console.log(response.products[0].title)
    //         setData(response.products)
    //     }
    //     GetProduct()
    // },[])
    let data=useGetData()
    let dispatch=useDispatch()
    const [filteredProducts,setFilteredProducts] = useState([]);
    useEffect(() => {
        setFilteredProducts(data); // set initial filtered list when data is loaded
    }, [data]);
    //console.log("filtered Products",filteredProducts)
    function handleSearch(e) {
        const query = e.target.value.toLowerCase();
    
        const searched = data.filter(product =>
            product?.title?.toLowerCase().includes(query) ||
            product?.brand?.toLowerCase().includes(query)
        );
        setFilteredProducts(searched);
        console.log(searched)
    }
    function handleAdd(product){
        //console.log("item added",product)
        dispatch(addToCart(product));

    }
    return(
        <>
        
        <div className="searchbar">
            <input type="text"placeholder="product name" onChange={handleSearch}/>
        </div>
        <div className="product-container">
            {filteredProducts.map((prod)=>{
            return(
                

                
                
                    <ProductItem key={prod.id} detail={prod} addtoCart={handleAdd} />
                
                            )
        })}
        </div>
        
        </>
    )
}
export default ProductList;