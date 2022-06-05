import './App.css';
import Navbar from './components/Navbar';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import ItemListContainer from './Containers/ItemListContainer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContext } from './components/CartContex';

const App = () => {
  return (
    <div className="App">
      <CartContext.Provider value={"coder"}>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />

          </Routes>
        </BrowserRouter>
      </CartContext.Provider>




    </div>

  );
}

export default App;
