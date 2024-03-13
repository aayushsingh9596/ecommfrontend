import { useSelector } from "react-redux"
import FProduct from "./FProduct";


const Cart = () => {

    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems);


  return (
    <div className="Cart">
      <div className="Cart__Products">
          {
            cartItems.map(cartItem=><FProduct product={cartItem} key={cartItem.id}/>)
          }
      </div>
      <div className="Proceed_To_Payment">
          <button className="">Proceed_To_Payment</button>
      </div>
    </div>
  )
}

export default Cart