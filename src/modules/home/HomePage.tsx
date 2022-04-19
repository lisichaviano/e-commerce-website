import { FC } from "react";

import { Header } from "../common";
import { ProductList } from "../product/components/product-list/ProductList";
import { Hero } from "./components/Hero";

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <ProductList />
    </>
  );
};

export { HomePage };
