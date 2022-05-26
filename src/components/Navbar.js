import Navbars from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import ItemListContainer from '../Containers/ItemListContainer';
const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-cyan ">
        <div className="container-fluid">
          <img width="60"
        height="60" src='https://media.istockphoto.com/vectors/spanner-and-screwdriver-tools-icon-isolated-on-white-background-tool-vector-id1129844997?k=20&m=1129844997&s=170667a&w=0&h=Lf2Ia1UTgeBXULikOySEHVNLUHqemAW0mO5P7u3fpLg='></img>
          <a className="navbar-brand" href="#">Tools-SHOP</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Ofertas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Herramientas de Mano</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Herramientas Electricas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Accesorios</a>
              </li>
            </ul>
            <div className='CardWidget'>
              <CartWidget />
            </div>

          </div>
        </div>
      </nav>
    </div>


  )
}

export default Navbar;