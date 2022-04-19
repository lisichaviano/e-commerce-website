import { FC } from "react";
import { Figure } from "react-bootstrap";

import "../../styles/product-details.scss";

export const ImagenDetail: FC<IProps> = ({ img }) => {
  return (
    <Figure>
      <Figure.Image className="image-detail" src={img} />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>
  );
};

type IProps = {
  img: string;
};
