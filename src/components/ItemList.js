import Card from 'react-bootstrap/Card';
import  Item  from "./Item";

const producto = [
    {id:'01',title:'Rotomartillo PROFACTOR', description:'Connected-Ready SDS-plus® Bulldog™ de 18 V y 1-1/4', price:'41549',stock:5, img:'https://www.boschtools.com/us/es/ocsmedia/optimized/full/cordlessrotaryhammersdsmax18vGBH18V45CK24boschbeauty(4).png'},
    {id:'02',title:'Sierra caladora de mano',description:'18 V (herramienta básica)',price:'22440',stock:5 , img:'https://www.boschtools.com/us/es/ocsmedia/optimized/full/cordlessjigsaw18vGST18V47boschbeautyshot(4).png'},
    {id:'03',title:'CEPILLOS',description:'3-1/4" y 18 V (herramienta básica)',price:'33799',stock:8, img:'https://www.boschtools.com/us/es/ocsmedia/optimized/full/PLH181(2).png'}, 
    
];

const ItemList = () => {

    return (
        <>
          {producto.map(item => 
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