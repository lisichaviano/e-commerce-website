import { FC } from "react";
import { Link } from "react-router-dom";

import "./styles/footer.scss";

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="/">
          <img alt="" src="/logo.png" />
          The Store
        </Link>
      </div>
      <div className="copy-right-content">
        <div className="copy-right-text">
          © 2022 Copyright:&nbsp;
          <a className="text-dark" href="https://foryouandyourcustomers.com/">
            foryouandyourcustomers.com
          </a>
        </div>
        <div className="social-media-links">
          <Link className="social-media-text" to="#">
            Legal Stuff
          </Link>
          <span className="separator"> | </span>
          <Link className="social-media-text" to="#">
            Privacy Policy
          </Link>
          <span className="separator"> | </span>
          <Link className="social-media-text" to="#">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};
