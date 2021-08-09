import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";

const IndexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const IndexPage = () => {
  return (
    <IndexWrapper>
      <SEO/>
      <h1>Willkommen</h1>
      <p>Diese seite ist noch zu gestalten</p>
    </IndexWrapper>
  );
};

export default IndexPage;
