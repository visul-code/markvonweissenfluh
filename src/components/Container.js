import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../utils/MediaQuerie";

const ContainerWrapper = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 0 60px;
  box-sizing: border-box;

  ${mediaQueries.lessThan("tablet")`

padding: 0 1rem;

`}
`;

const Container = ({ props, children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
