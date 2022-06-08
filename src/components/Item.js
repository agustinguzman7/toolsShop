
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';

const Item = ({id, title, description, price, img }) => {

    const navegar = useNavigate();

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
                    
                    <Button variant="primary" size="lg" onClick={()=>navegar(`/item/${id}`)}>
                        Ver mas!</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item;