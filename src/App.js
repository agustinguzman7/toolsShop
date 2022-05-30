import './App.css';
import Navbar from './components/Navbar';
import ItemDetailContainer from './Containers/ItemDetailContainer';

const App = () => {
  return (
    <div className="App">
        <Navbar/>
        <ItemDetailContainer></ItemDetailContainer>
        
    </div>

  );
}

export default App;
