import { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./style.scss";
import { Header } from "./modules/common/navbar/Header";
import { AppRoutes } from "./routes";
import ScrollToTopOnNavigation from "./modules/common/ScrollToTopOnNavigation";

const App: FC = () => {
  return (
    <div>
      <Router>
        <ScrollToTopOnNavigation />
        <Header />
        <div className="header-navbar">
          <AppRoutes />
        </div>
      </Router>
    </div>
  );
};

export { App };
