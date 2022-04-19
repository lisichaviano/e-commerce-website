import { FC } from "react";

import "./style.scss";
import { HomePage } from "./modules/home/HomePage";

const App: FC = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export { App };
