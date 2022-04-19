import { FC } from "react";
import { ListGroup } from "react-bootstrap";

import { Product } from "../../../../lib/types";

export const ProductInfo: FC<IProps> = ({ product }) => {
  return (
    <>
      <ListGroup variant="flush" className="list-group">
        <ListGroup.Item className="title-details">
          {product.title}
        </ListGroup.Item>
        <ListGroup.Item className="rate-details">
          {product.rating.rate} {product.rating.counter}
        </ListGroup.Item>
        <ListGroup.Item>{product.category}</ListGroup.Item>
        <ListGroup.Item className="price-details">
          {product.price}
        </ListGroup.Item>
        <ListGroup.Item>
          <p>{product.description}</p>
        </ListGroup.Item>
      </ListGroup>
      <span className="line-separator"></span>
    </>
  );
};

type IProps = {
  product: Product;
};
