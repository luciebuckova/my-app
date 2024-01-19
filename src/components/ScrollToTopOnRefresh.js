import { useEffect } from "react";

const ScrollToTopOnRefresh = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollToTop();
  }, []);

  return null;
};

export default ScrollToTopOnRefresh;
