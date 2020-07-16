import React, { createContext, useState } from "react";

import Spinner from "../Components/Spinner/Spinner";

export const LoaderContext = createContext({
  loading: false,
  openLoader: () => {},
  closeLoader: () => {},
});

const LoaderContextProvider = (props) => {
  const [loading, setLoading] = useState(false);

  const openLoaderHandler = () => {
    setLoading(true);
  };

  const closeLoaderHandler = () => {
    setLoading(false);
  };

  return (
    <LoaderContext.Provider
      value={{
        loading: loading,
        openLoader: openLoaderHandler,
        closeLoader: closeLoaderHandler,
      }}
    >
      {loading && <Spinner />}
      {props.children}
    </LoaderContext.Provider>
  );
};

export default LoaderContextProvider;
