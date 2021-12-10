import React, { useCallback, useEffect, useState } from "react";

function useResize(breakdown) {
  const [status, setStatus] = useState(true);

  const handleResize = useCallback(() => {
    setStatus(window.innerWidth <= breakdown);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return status;
}

export default useResize;
