import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';

const Item = ({title,description,price,img}) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>

                <Card.Body>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <ItemCount stock="5" initial={1} onAdd/>
                    
                </Card.Body>
            </Card>
        </>
    )
}

export default Item;