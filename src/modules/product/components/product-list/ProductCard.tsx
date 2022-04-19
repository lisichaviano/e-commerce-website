import { FC } from "react";
import { Card } from "react-bootstrap";
import { Product } from "../../../../lib/types";

export const ProductCard: FC<IProps> = ({ product }) => {
  return (
    <Card className="product-item">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.category}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

type IProps = {
  product: Product;
};
