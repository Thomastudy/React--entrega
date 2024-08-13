import Container from "react-bootstrap/Container";

import MyCard from "./card"

export const CardList = ({products}) => (
    <Container>
        {CargarProductos.map(product =>(
            <MyCard key={product.id} product={products}  />
        ))}
    </Container>
)