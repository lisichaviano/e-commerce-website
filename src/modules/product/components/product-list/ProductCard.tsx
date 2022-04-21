import { FC } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { Product } from "../../../../lib/types";
import { formatMoney } from "../../../../lib/utils";

export const ProductCard: FC<IProps> = ({ product }) => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/product-details/${product.id}`;
    navigate(path);
  };

  return (
    <Card onClick={routeChange} className="product-item">
      <Card.Img variant="top" src={product.image} />
      <Card.Body style={{}}>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.category}</Card.Text>
        <Card.Text className="price-title">
          {formatMoney(product.price)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

type IProps = {
  product: Product;
};
