import { useState, useEffect } from "react";

export const useAppLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization and ensure minimum loading time for better UX
    const minLoadingTime = 2500; // 2.5 seconds minimum
    const startTime = Date.now();

    const finishLoading = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    // Check if all critical resources are loaded
    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
      return () => window.removeEventListener("load", finishLoading);
    }
  }, []);

  return { isLoading };
};
