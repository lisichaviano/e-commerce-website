import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { productByIdSelector } from "../../redux/selectors";
import { ImagenDetail } from "./ImagenDetail";
import { ProductInfo } from "./ProductInfo";
import "../../styles/product-details.scss";
import { setProducts } from "../../redux/actions";
import { loadProducts } from "../../services";

export const ProductDetails: FC = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(productByIdSelector(Number(productId)));

  useEffect(() => {
    if (!product) {
      loadProducts().then((products) => dispatch(setProducts(products)));
    }
  }, [product, dispatch]);

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
