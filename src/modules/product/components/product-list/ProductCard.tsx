import { FC } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { Product } from "../../../../lib/types";
// import { Link } from "react-router-dom";

export const ProductCard: FC<IProps> = ({ product }) => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/product-details/${product.id}`;
    navigate(path);
  };

  return (
    // <Link to={`/product-details/${product.id}`}>
    <Card onClick={routeChange} className="product-item">
      <Card.Img variant="top" src={product.image} />
      <Card.Body style={{}}>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.category}</Card.Text>
        <Card.Text className="price-title">{product.price}</Card.Text>
      </Card.Body>
    </Card>
    // </Link>
  );
};

type IProps = {
  product: Product;
};
