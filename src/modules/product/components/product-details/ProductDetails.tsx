import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { productByIdSelector } from "../../redux/selectors";
import { ImagenDetail } from "./ImageDetail";
import { ProductInfo } from "./ProductInfo";
import "../../styles/product-details.scss";
import { setProducts } from "../../redux/actions";
import { loadProducts } from "../../services";
import { CartButton } from "./CartButton";

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
        <>
          <div className="product-details">
            <div className="product-details-img-btn">
              <ImagenDetail img={product.image} />
              <CartButton productId={product.id} />
            </div>
            <ProductInfo product={product} />
          </div>
        </>
      )}
    </div>
  );
};
