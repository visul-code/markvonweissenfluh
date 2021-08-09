import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import React, {Fragment} from "react";
import styled from "styled-components";
import Container from "../components/Container";
import SEO from "../components/seo";
import { mediaQueries } from "../utils/MediaQuerie";

const AboutWrapper = styled.div`
  section {
    flex-direction: column;
  }

  .portrait-wrapper {
    background-color: white;
    display: grid;
    grid-template-columns: 500px 1fr;
    grid-template-rows: 1fr;

    ${mediaQueries.lessThan("tablet")`

display: flex;
flex-direction: column;

`}

    .image {
   /*    margin: 0 3rem; */
    }
    .text {
      margin: 4rem;
    }
  }

  .quote-block {
    margin: 4rem 0;
    .quote-text {
      font-size: 2rem;
  font-weight: 300;
  line-height: 3rem;
      column-count: 1;
      column-gap: 10rem;
      ${mediaQueries.lessThan("tablet")`

column-count: 1;
column-gap: 0;

`}
      p {
        margin: 0;
      }
    }
  }
`;

const About = ({ data: { portrait, quotes } }) => {
  const image = getImage(portrait.portrait);
  console.log(quotes);
  return (
    <Fragment>
      <SEO titleTemplate="Über mich"/>
      <AboutWrapper>
        <Container>
          <h1>Mark W. von Weissenfluh</h1>
          <div className="portrait-wrapper">
            <GatsbyImage
              className="image"
              alt="Portrait Image"
              image={image}
            />
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: portrait.portraitTextNode.childMarkdownRemark.html,
              }}
            ></div>
          </div>
          {quotes.aboutQuotes.map((e, index) => {
            return (
              <div className="quote-block" key={index}>
                <h2>{e.title}</h2>
                <div
                  className="quote-text"
                  dangerouslySetInnerHTML={{
                    __html: e.textNode.childMarkdownRemark.html,
                  }}
                ></div>
              </div>
            );
          })}
        </Container>
      </AboutWrapper>
    </Fragment>
  );
};

export default About;

export const aboutQuery = graphql`
  {
    portrait: datoCmsAbout {
      portraitTextNode {
        childMarkdownRemark {
          html
        }
      }
      portrait {
        gatsbyImageData(layout: CONSTRAINED)
        alt
      }
    }

    quotes: datoCmsAbout {
      aboutQuotes {
        title
        textNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
