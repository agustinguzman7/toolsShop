import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import CartRender from './CartRender.js';
import Item from "./Item";

const Cart = () => {
    const { deleteCart } = useContext(CartContext);
    const carrito = useContext(CartContext);
    
    if (carrito.cartList.length === 0){
        return(<p>Tu carrito está vacío</p>)
    }

    return (
        <>
            {
                carrito.cartList.map(item => <CartRender key={item.id} id={item.id} price={item.price} quantity={item.quantity} title={item.title} img={item.img} />)
            }
                <button type="button" onClick={deleteCart}>Eliminar todos</button>
        </>
    );
}

export default Cart;