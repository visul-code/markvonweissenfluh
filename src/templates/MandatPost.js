import { graphql } from "gatsby";
import React, {Fragment} from "react";
import styled from "styled-components";
import Container from "../components/Container";
import Slider from "react-slick";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SEO from "../components/seo";

const MandatPostWrapper = styled.div`
  section {
    flex-direction: column;
  }

  .slider {
    /*     margin-left: 3rem;
    margin-right: 3rem; */

    .slick-next {
      right: 25px;
      top: 90%;
    }
    .slick-prev {
      left: 25px;
      z-index: 2;
      top: 90%;
    }
  }
`;

const MandatPost = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

 
  return (
    <Fragment>
      <SEO titleTemplate={data.datoCmsMandat.title}/>
      <MandatPostWrapper>
        <Slider className="slider" {...settings}>
          {data.datoCmsMandat.gallery.map((e, index) => {
            const image = getImage(e.gatsbyImageData);
            return <GatsbyImage key={index} alt="Bild Mandat" image={image} />;
          })}
        </Slider>
        <Container>
          <h1>{data.datoCmsMandat.title}</h1>
       {data.datoCmsMandat.subtitle == "" ? null :        <p className="subtitle">{data.datoCmsMandat.subtitle}</p>}
          <div className="paragraph"
            dangerouslySetInnerHTML={{
              __html:
                data.datoCmsMandat.descriptionNode.childrenMarkdownRemark[0].html,
            }}
          ></div>
        </Container>
      </MandatPostWrapper>
    </Fragment>
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
