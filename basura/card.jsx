// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

export const MyCard = ({ product }) => (
  <div class="producto">
    <div class="div--producto__imagen">
      <img class="producto__imagen" src={product.img} alt={product.title} />
    </div>
    <div class="producto__informacion">
      <p class="producto__nombre">{product.title}</p>
      <p class="producto__precio-r">
        <b>${precio}</b>
      </p>
      <button
        id={product.id}
        class="button button-add pointer"
        title="Pulsa para comprar"
      >
        <i class="fa-regular fa-heart pointer"></i> Agregar
      </button>
    </div>
  </div>
  // <Card style={{ width: '18rem' }}>
  //   <Card.Img variant="top" src={product.img} />
  //   <Card.Body>
  //     <Card.Title>{product.title}</Card.Title>
  //     <Card.Text>
  //       {product.price}
  //     </Card.Text>
  //     <Button variant="primary">Comprar</Button>
  //   </Card.Body>
  // </Card>
);
