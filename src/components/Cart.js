import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

export const Cart = () => {

    const dispatch = useDispatch();

    const handleClearCart = () => {
     dispatch(clearCart());
    };
    return (
        <div className="text-center m-10 p-10">
            <h1 className="text-2xl font-bold">Cart </h1>
            <button className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
            >Clear Cart</button>
            
        </div>
    ) 
};