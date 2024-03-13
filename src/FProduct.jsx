import { useDispatch } from "react-redux";
import "./FProduct.css";
import { addItem } from "./store/cartSlice";

const FProduct = ({product}) => {
  const dispatch=useDispatch();
  return (
    <div className="FProduct">
        <img className="FProduct__Image" src={product?.image} alt=""/> 
        <h3>{product?.title}</h3>
        <h3>{product?.price}</h3>
        <h3>{product?.category}</h3>
        {/* <p>{product?.description}</p> */}
        <div>
        <button onClick={()=>{
          dispatch(addItem(product));
        }}>Add to Cart</button>
        <button>Buy Now</button>
        </div>

    </div>
  )
}

export default FProduct