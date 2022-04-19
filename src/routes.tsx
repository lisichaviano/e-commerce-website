import { FC } from "react";
import { Route, Routes } from "react-router";
import { HomePage } from "./modules/home/HomePage";
import { ProductList } from "./modules/product/components/product-list/ProductList";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="products" element={<ProductList />} />
    </Routes>
  );
};

export { AppRoutes };
