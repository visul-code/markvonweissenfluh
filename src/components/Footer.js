import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { StaticQuery, graphql } from "gatsby"
import { mediaQueries } from "../utils/MediaQuerie";

const FooterWrapper = styled.div`
  margin: 7rem 0;


section{
  justify-content: space-around;

  ${mediaQueries.lessThan("tablet")`
flex-direction: column;
  
    `}

}

  .address-block {
    white-space: pre-line

  }
`;

const Footer = ({data}) => {

  return (
    <FooterWrapper>
      <Container>

      <StaticQuery
      query={graphql`
      query FooterQuery {
        datoCmsKontakt {
      telefon
          email
          adresseGeschFtNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
      
      `}
      render={data => (

     
<>

        <address className="address-block">
   
          <div dangerouslySetInnerHTML={{__html: data.datoCmsKontakt.adresseGeschFtNode.childMarkdownRemark.html}}/>

      
      
          <a href={`tel:${data.datoCmsKontakt.telefon}`}> T: {data.datoCmsKontakt.telefon}</a> <br />
          <a href={`mailto:${data.datoCmsKontakt.email}`}>
            {data.datoCmsKontakt.email}
          </a>
          <br />
        </address>

        <p>
  <a>Disclaimer</a> <br/>
  <a>Impressum</a> <br/>
  <a href="https://ch.linkedin.com/">LinkedIn</a>
        </p>
        </>
      )}
    
    />
  
    </Container>
    </FooterWrapper>
  );
};

export default Footer;

