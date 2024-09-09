import Container from "react-bootstrap/Container";

import MyCard from "../src/components/card"

export const CardList = ({products}) => (
    <Container>
        {CargarProductos.map(product =>(
            <MyCard key={product.id} product={products}  />
        ))}
    </Container>
)