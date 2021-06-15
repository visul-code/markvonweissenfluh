import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Container from "../components/Container";
const MandatPostWrapper = styled.div``;

const MandatPost = ({ data }) => {
  console.log(data);
  return (
    <MandatPostWrapper>
      <Container>
        <h1>{data.datoCmsMandat.title}</h1>
      </Container>
    </MandatPostWrapper>
  );
};

export const mandatQuery = graphql`
  query($slug: String!) {
    datoCmsMandat(slug: { eq: $slug }) {
      title
      subtitle
      gallery {
        gatsbyImageData
      }
      descriptionNode {
        childrenMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default MandatPost;
