import { FC } from "react";

import { ProductList } from "../product/components/product-list/ProductList";
import { Hero } from "./components/Hero";

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <ProductList />
    </>
  );
};

export { HomePage };
