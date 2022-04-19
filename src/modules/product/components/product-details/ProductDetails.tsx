import { FC } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Product } from "../../../../lib/types";
import { productsSelector } from "../../redux/selectors";
import { ImagenDetail } from "./ImagenDetail";
import { ProductInfo } from "./ProductInfo";
import "../../styles/product-details.scss";

export const ProductDetails: FC = () => {
  const { productId } = useParams();
  const products: Product[] = useSelector(productsSelector);

  const product = products.find(
    (product) => productId && product.id === Number(productId)
  );

  return (
    <div>
      {product && (
        <div className="product-details">
          <ImagenDetail img={product.image} />
          <ProductInfo product={product} />
        </div>
      )}
    </div>
  );
};
