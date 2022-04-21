import { Product } from "../../lib/types";

const loadProducts: () => Promise<Product[]> = () =>
  fetch("https://fakestoreapi.com/products/category/sds").then((res) =>
    res.json()
  );

export { loadProducts };
