import { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./style.scss";
import { Header } from "./modules/common/navbar/Header";
import { AppRoutes } from "./routes";
import ScrollToTopOnNavigation from "./modules/common/ScrollToTopOnNavigation";
import { Footer } from "./modules/common/footer/Footer";

const App: FC = () => {
  return (
    <div>
      <Router>
        <ScrollToTopOnNavigation />
        <Header />
        <div className="header-navbar">
          <AppRoutes />
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export { App };
