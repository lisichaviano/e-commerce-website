import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import "./style.scss";
import { Header } from "./modules/common";
import { AppRoutes } from "./routes";
import ScrollToTopOnNavigation from "./modules/common/components/ScrollToTopOnNavigation";

const App: FC = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTopOnNavigation />
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export { App };