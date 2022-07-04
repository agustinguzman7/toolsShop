import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import CartRender from './CartRender.js';





const Cart = () => {

    const { deleteCart, calcSubtotal, calcTotal, calcTaxes } = useContext(CartContext);

    const carrito = useContext(CartContext);

    const navegar = useNavigate()





    if (carrito.cartList.length === 0) {

        return (

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

        <div >

            {

                carrito.cartList.map(item => <CartRender key={item.id} id={item.id} price={item.price} quantity={item.quantity} title={item.title} img={item.img} />)

            }



            <div className="Cart">

                <h3>Carrito</h3>
                <h4>Subtotal: ${calcSubtotal()}</h4>
                <h4>Taxes: ${calcTaxes()}</h4>
                <h4>Total: ${calcTotal()}</h4>
                <div className="BotonesCart">
                 <Button variant="primary" type="button" onClick={() => navegar('/checkout')}>Checkout</Button>
                 <Button variant="primary" type="button" onClick={deleteCart}>Eliminar todos</Button>   
                </div>

                
                
            </div>





        </div>

    );

}



export default Cart;