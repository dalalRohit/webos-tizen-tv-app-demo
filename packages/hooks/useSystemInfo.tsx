import React from "react";

const useSystemInfo = () => {
  const [info, setInfo] = React.useState<string>();
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    setInfo(navigator.userAgent);
  }, []);

  return info;
};

export default useSystemInfo;
