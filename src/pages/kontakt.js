import React from "react";
import styled from "styled-components";
import Container from "../components/Container";
import { graphql } from "gatsby";
const ContactWrapper = styled.div`

section{

  flex-direction: column;


address{    white-space: pre-line}


}
.map{
width: 100%;
height: 600px;
border: none;
margin: 5rem 0;

}

`;



const Contact = ({data}) => {
  const lat = data.datoCmsKontakt.standort.latitude
  const long = data.datoCmsKontakt.standort.longitude
  console.log(data.datoCmsKontakt.standort.latitude)
  return (
    <ContactWrapper>
      <Container>
        <h1>Kontakt</h1>
    
<address>
  <div dangerouslySetInnerHTML={{__html: data.datoCmsKontakt.adresseGeschFtNode.childMarkdownRemark.html}}/>
  <a href={`tel:${data.datoCmsKontakt.telefon}`}> T: {data.datoCmsKontakt.telefon}</a> <br />
          <a href={`mailto:${data.datoCmsKontakt.email}`}>
            {data.datoCmsKontakt.email}
          </a>
</address>

<address>
<p>Privat</p>
  <div dangerouslySetInnerHTML={{__html: data.datoCmsKontakt.adressePrivatNode.childMarkdownRemark.html}}/>
</address>

      </Container>
      <iframe title="location" className="map" 
       src={`https://maps.google.com/maps?q=${lat}, ${long}&z=15&output=embed`}
        loading="lazy"></iframe>
{/* <iframe src={`https://maps.google.com/maps?q=${lat}, ${long}&z=15&output=embed`} width="360" height="270" frameborder="0" ></iframe> */}
    </ContactWrapper>
  );
};

export default Contact;

export const kontaktQuery = graphql`
{
  datoCmsKontakt {
    email
    telefon
    adresseGeschFtNode {
      childMarkdownRemark {
        html
      }
    }
    standort {
      latitude
      longitude
    }
    adressePrivatNode {
      childMarkdownRemark {
        html
      }
    }
  }
}

`;




