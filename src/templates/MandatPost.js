import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Container from "../components/Container";
import Slider from "react-slick";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MandatPostWrapper = styled.div`
  section {
    flex-direction: column;
  }
`;

const MandatPost = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,

    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log(data);
  return (
    <MandatPostWrapper>
      <Slider className="slider" {...settings}>
        {data.datoCmsMandat.gallery.map((e, index) => {
          const image = getImage(e.gatsbyImageData);
          return <GatsbyImage image={image} />;
        })}
      </Slider>
      <Container>
        <h1>{data.datoCmsMandat.title}</h1>
        <p className="subtitle">{data.datoCmsMandat.subtitle}</p>
        <div
          dangerouslySetInnerHTML={{
            __html:
              data.datoCmsMandat.descriptionNode.childrenMarkdownRemark[0].html,
          }}
        ></div>
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
        gatsbyImageData(height: 800)
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
