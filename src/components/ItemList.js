import Card from 'react-bootstrap/Card';
import  Item  from "./Item";



const ItemList = ({productList}) => {

    return (
        <>
          {productList.map(item => 
            <Item
            title={item.title}
            description={item.description}
            price={"$" + item.price}
            img={item.img}
            />)}
        </>
    )
}
export default ItemList;