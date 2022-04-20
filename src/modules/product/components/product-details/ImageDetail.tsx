import { FC } from "react";
import { Figure } from "react-bootstrap";

import "../../styles/image-detail.scss";

export const ImagenDetail: FC<IProps> = ({ img }) => {
  return (
    <Figure className="image-detail">
      <Figure.Image src={img} />
    </Figure>
  );
};

type IProps = {
  img: string;
};
