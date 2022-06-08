import './App.css';
import Navbar from './components/Navbar';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import ItemListContainer from './Containers/ItemListContainer';
import CartContextProvider from './components/CartContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContext } from './components/CartContext';
import Cart from './components/Cart';

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

          </Routes>
        </BrowserRouter>
      </CartContextProvider>




    </div>

  );
}

export default App;
