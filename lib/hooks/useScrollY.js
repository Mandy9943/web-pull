import React, { useCallback, useEffect, useState } from "react";

function useScrollY(breakdown, defaultValue) {
  const [scroll, setScroll] = useState(defaultValue);

  const handlerScroll = useCallback(() => {
    const offset = window.scrollY;
    if (offset > breakdown) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, [handlerScroll]);

  return scroll;
}

export default useScrollY;
