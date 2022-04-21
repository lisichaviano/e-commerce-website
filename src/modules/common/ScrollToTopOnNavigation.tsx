import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnNavigation: FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollToTopOnNavigation;
