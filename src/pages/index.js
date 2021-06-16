import React from "react";
import styled from "styled-components";

const IndexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IndexPage = () => {
  return (
    <IndexWrapper>
      <h1>Willkommen</h1>
      <p>Diese seite ist noch zu gestalten</p>
    </IndexWrapper>
  );
};

export default IndexPage;
