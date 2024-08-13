import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const MyCard =({product}) => 
   (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.price}
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );