import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import CartRender from './CartRender.js';
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from 'firebase/firestore';
import db from "./firabaseConfig"

const Cart = () => {
    const { deleteCart, calcSubtotal, calcTotal, calcTaxes } = useContext(CartContext);
    const carrito = useContext(CartContext);
    
    const createOrder = () => {
        
        const orderItems = carrito.cartList.map(item => ({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity
        }))
        
        let order = {
            buyer: {
                name: "ANONIMO",
                email: "ANONIMO@gmail.com",
                phone: "49436635"
            },
            date: serverTimestamp(),
            total: calcTotal(),
            items: orderItems
        };

        const createFirebaseOrder= async () => {
            const newOrder = doc(collection(db,"orders"));
            await setDoc(newOrder, order);
            return newOrder;
        }

        createFirebaseOrder()
            .then(result => alert('Your order was successfully placed. Order ID is ' + result.id))
            .catch(err => console.log(err));

        carrito.cartList.forEach(async (item) => {
            const itemRef = doc(db,"items",item.id)
            await updateDoc(itemRef,{
                stock: increment(-item.quantity)
            })
        });

        carrito.deleteCart()

    }

    if (carrito.cartList.length === 0){
        return(
        <>
        <h1>Tu carrito esta vacío</h1>
        <div>
            <Link to="/">
                <button type="button">Continue Shopping</button>
            </Link>
        </div>
        </>
        )
    }

    return (
        <>
            {
                carrito.cartList.map(item => <CartRender key={item.id} id={item.id} price={item.price} quantity={item.quantity} title={item.title} img={item.img} />)
            }
            
                    <div>
                        <div>Carrito</div>
                        <div>Subtotal: ${calcSubtotal()}</div>
                        <div>Taxes: ${calcTaxes()}</div>
                        <div >Total: ${calcTotal()}</div>
                        <button type="button" onClick={createOrder}>Checkout</button>
                    </div>
                
                <button type="button" onClick={deleteCart}>Eliminar todos</button>
        </>
    );
}

export default Cart;