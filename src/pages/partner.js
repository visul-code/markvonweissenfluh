import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Container from "../components/Container";
const PartnerWrapper = styled.div`
  section {
    flex-direction: column;
  }

  .subtitle {
    font-size: 3.5rem;
    line-height: 4.5rem;
  }

  .partner-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-row-gap: 4rem;
    grid-column-gap: 4rem;

    .content {
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 300;
    }
  }
`;

const Partner = ({ data }) => {
  console.log(data);
  return (
    <PartnerWrapper>
      <Container>
        <h1>Partner</h1>
        <p className="subtitle">{data.datoCmsPartner.subtitle}</p>

        <div className="partner-wrapper">
          {data.datoCmsPartner.partner.map((e, index) => {
            return (
              <div key={index}>
                <h2>{e.title}</h2>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: e.descriptionNode.childMarkdownRemark.html,
                  }}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </PartnerWrapper>
  );
};

export default Partner;

export const partnerQuery = graphql`
  {
    datoCmsPartner {
      subtitle
      partner {
        title
        descriptionNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
