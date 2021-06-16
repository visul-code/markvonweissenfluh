import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Container from "../components/Container";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { mediaQueries } from "../utils/MediaQuerie";
const MandatWrapper = styled.div`
  section {
    flex-direction: column;
  }

  .overview-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;

    ${mediaQueries.lessThan("tablet")`
  grid-template-columns: 1fr ;


`}
  }
`;

const Mandate = ({ data }) => {
  console.log(data);

  return (
    <MandatWrapper>
      <Container>
        <h1>Mandate</h1>
        <p className="subtitle">{data.datoCmsMandate.subtitle}</p>

        <div className="overview-wrapper">
          {data.datoCmsMandate.mandat.map((e, index) => {
            const image = getImage(e.previewImage.gatsbyImageData);

            return (
              <div key={index}>
                <Link to={e.slug}>
                  <GatsbyImage alt={e.previewImage.alt} image={image} />
                </Link>
                <p>{e.title}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </MandatWrapper>
  );
};

export default Mandate;

export const mandatQuery = graphql`
  {
    datoCmsMandate {
      subtitle
      mandat {
        slug
        subtitle
        title
        previewImage {
          gatsbyImageData(aspectRatio: 1)
          alt
        }
        gallery {
          gatsbyImageData
          alt
        }
      }
    }
  }
`;
