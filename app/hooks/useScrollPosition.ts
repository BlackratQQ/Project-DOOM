import { useEffect } from "react";
import { useRouter } from "next/navigation";

const useScrollPosition = () => {
  const router = useRouter();

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    const handleRouteChange = () => {
      const savedPosition = localStorage.getItem("scrollPosition");
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
        localStorage.removeItem("scrollPosition");
      } else {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [router]);
};

export default useScrollPosition;
