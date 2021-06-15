import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 0 60px;
  box-sizing: border-box;
`;

const Container = ({ props, children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
