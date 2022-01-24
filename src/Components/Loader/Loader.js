import React from "react";
import { Audio } from "react-loader-spinner";
import { LoaderStyles } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderStyles>
      <Audio color="#3f51b5" height={80} width={80} />
    </LoaderStyles>
  );
};

export const BtnLoader = () => {
  return (
    <LoaderStyles>
      <Audio color="#3f51b5" height={80} width={80} />
    </LoaderStyles>
  );
};
export default Loader;
