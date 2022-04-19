import { FC } from "react";
import { Figure } from "react-bootstrap";

export const ImagenDetail: FC<IProps> = ({ img }) => {
  return (
    <Figure>
      <Figure.Image width={250} height={220} alt="171x180" src={img} />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>
  );
};

type IProps = {
  img: string;
};
