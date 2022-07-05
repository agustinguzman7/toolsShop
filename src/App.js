import './App.css';
import Navbar from './components/Navbar';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import ItemListContainer from './Containers/ItemListContainer';
import CartContextProvider from './components/CartContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import Checkout from './components/CheckOut';



const App = () => {

  return (

    <div className="App">

      <CartContextProvider>



        <BrowserRouter>

          <Navbar />

          <Routes>

            <Route path='/' element={<ItemListContainer />} />

            <Route path='/category/:category' element={<ItemListContainer />} />

            <Route path='/item/:id' element={<ItemDetailContainer />} />

            <Route path='/cart' element={<Cart/>}/>

            <Route path='/checkout' element={<Checkout/>}/>



          </Routes>

        </BrowserRouter>

      </CartContextProvider>









    </div>



  );

}



export default App;
