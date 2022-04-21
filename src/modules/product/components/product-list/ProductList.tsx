import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Product } from "../../../../lib/types";
import { setProducts } from "../../redux/actions";
import { productsSelector } from "../../redux/selectors";
import { loadProducts } from "../../services";
import { ProductCard } from "./ProductCard";
import "../../styles/product-list.scss";

export const ProductList: FC = () => {
  const dispatch = useDispatch();
  const products: Product[] = useSelector(productsSelector);

  useEffect(() => {
    if (!products || products.length === 0) {
      loadProducts().then((data) => dispatch(setProducts(data)));
    }
  }, [dispatch, products]);

  return (
    <div className="product-list-container">
      <h1 className="title-product-list">Product List</h1>
      {!products || products.length === 0 ? (
        <span className="product-list-validation">
          There are no products in the store
        </span>
      ) : (
        <div className="card-group">
          <ul className="product-list">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
