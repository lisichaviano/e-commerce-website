import { FC } from "react";
import { Link } from "react-router-dom";

import "./styles/footer.scss";

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="/">
          <img alt="" src="/logo.png" />
        </Link>
      </div>
      <div className="copy-right">
        © 2022 Copyright:
        <a className="text-dark" href="https://foryouandyourcustomers.com/">
          foryouandyourcustomers.com
        </a>
      </div>
    </footer>
  );
};
