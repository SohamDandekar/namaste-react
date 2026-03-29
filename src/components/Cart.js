import { clearCart } from "../utils/cartSlice";
import ItemsList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return <div className="text-center w-6/12 mx-auto">
        <h1 className="font-bold text-2xl m-4 p-2">Cart</h1>
        <button onClick={handleClearCart} className="p-2 m-2 mx-20 bg-black text-white rounded-lg">Clear Cart</button>
        {cartItems.length === 0 && <h1>Cart is empty. Please add items to the cart!</h1>}
        <ItemsList items={cartItems} />
    </div>
}

export default Cart;