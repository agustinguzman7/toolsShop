import React, { useContext } from 'react'
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from 'firebase/firestore';
import db from "./firabaseConfig"
import { CartContext } from './CartContext';
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'



const Checkout = () => {

    const [data, setData] = React.useState({})

    const [orderId, setOrderId] = React.useState(false)

    const { deleteCart, calcTotal, cartList } = useContext(CartContext);

    const navegar = useNavigate()





    const handleChange = (event) => {

        const { name, value } = event.target;

        setData({ ...data, [name]: value });

    }



    const createOrder = (event) => {

        event.preventDefault()

        const orderItems = cartList.map(item => ({

            id: item.id,

            title: item.title,

            price: item.price,

            quantity: item.quantity

        }))



        let order = {

            buyer: data,

            date: serverTimestamp(),

            total: calcTotal(),

            items: orderItems

        };



        const createFirebaseOrder = async () => {

            const newOrder = doc(collection(db, "orders"));

            await setDoc(newOrder, order);

            return newOrder;

        }



        createFirebaseOrder()

            .then(result => setOrderId(result.id))

            .catch(err => console.log(err));



        cartList.forEach(async (item) => {

            const itemRef = doc(db, "items", item.id)

            await updateDoc(itemRef, {

                stock: increment(-item.quantity)

            })

        });



        deleteCart()



    }

    return (

        <div className="checkout">

            {!orderId

                ? <form onSubmit={createOrder}>

                    <h1>Checkout</h1>
                    <Form.Label>Nombre y Apellido</Form.Label>

                    <Form.Control

                        required

                        type="text"

                        name="name"

                        placeholder="Nombre y Apellido"

                        onChange={handleChange}



                    />
                    <Form.Label>Email </Form.Label>

                    <Form.Control

                        required

                        type="email"

                        name="email"

                        placeholder="Email"

                        onChange={handleChange}

                    />
                    <Form.Label>Telefono</Form.Label>

                    <Form.Control

                        required

                        type="phone"

                        name="phone"

                        placeholder="Phone"

                        onChange={handleChange}

                    />
                    <br>
                    </br>

                    <Form.Control

                        type="submit"

                        value="Finalizar compra"

                    />

                </form>

                : <>

                    <p>Muchas gracias por tu compra!</p>

                    <p>Tu orden es: {orderId}</p>

                    <button onClick={() => navegar('/')}>Volver</button>

                </>}

        </div>

    )

}



export default Checkout

