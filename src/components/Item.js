
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const Item = ({id, title, description, price, img }) => {

    

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img width="600"
        height="300" variant="top" src={img} />
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
                    <Link to={`/item/${id}`}><Button variant="primary" size="lg">
                        Ver mas!</Button></Link>
                    
                </Card.Body>
            </Card>
        </>
    )
}

export default Item;