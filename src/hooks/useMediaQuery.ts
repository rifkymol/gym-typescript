import { useState, useEffect } from "react";

/**
 * Purpose of this hook
 * to Pass in minimum width of string and give us(dev) boolean
 * @return @boolean
 */
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;