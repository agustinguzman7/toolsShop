import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './Containers/ItemListContainer';
const App = () => {
  return (
    <div className="App">
        <Navbar/>
        <ItemListContainer greeting={'Mi futuro catalogo'}/>
    </div>

  );
}

export default App;
