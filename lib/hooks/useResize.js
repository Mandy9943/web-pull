import React, { useCallback, useEffect, useState } from "react";

function useResize(breakdown) {
  const [status, setStatus] = useState(false);

  const handleResize = () => {
    setStatus(window.innerWidth <= breakdown);
  };

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
