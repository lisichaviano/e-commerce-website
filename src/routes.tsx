import { FC } from "react";
import { Route, Routes } from "react-router";
import { HomePage } from "./modules/home/HomePage";
import { ProductDetails } from "./modules/product/components/product-details/ProductDetails";
import { ProductList } from "./modules/product/components/product-list/ProductList";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="products" element={<ProductList />} />
      <Route path="product-details/:productId" element={<ProductDetails />} />
    </Routes>
  );
};

export { AppRoutes };
