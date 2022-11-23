import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-ResaleHolder`;
  }, [title]);
};

export default useTitle;
