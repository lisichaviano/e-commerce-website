import { FC } from "react";
import { ListGroup } from "react-bootstrap";
import ReactStars from "react-stars";

import { Product } from "../../../../lib/types";
import { formatMoney } from "../../../../lib/utils";
import "../../styles/product-info.scss";

export const ProductInfo: FC<IProps> = ({ product }) => {
  return (
    <>
      <ListGroup variant="flush" className="list-group-info">
        <ListGroup.Item className="title-details">
          {product.title}
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="rate-details">
            <div>
              <ReactStars
                count={5}
                value={product.rating.rate}
                size={18}
                color2={"#ffd700"}
                edit={false}
              />
            </div>
            <div>({product.rating.count})</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>{product.category}</ListGroup.Item>
        <ListGroup.Item className="price-details">
          {formatMoney(product.price)}
        </ListGroup.Item>
        <ListGroup.Item>
          <p>{product.description}</p>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

type IProps = {
  product: Product;
};
