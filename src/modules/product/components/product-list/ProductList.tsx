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
    loadProducts().then((products) => dispatch(setProducts(products)));
  }, [dispatch]);

  return (
    <div>
      <h1 className="title-product-list">Product List</h1>
      <div className="card-group">
        <ul className="product-list">
          {products.map((product) => (
            <li>
              <ProductCard product={product} key={product.id} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
