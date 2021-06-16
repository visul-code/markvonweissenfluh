import React from "react";
import styled from "styled-components";
import Container from "./Container";
const FooterWrapper = styled.div`
  margin: 7rem 0;

  .address-block {
    a {
      text-decoration: underline 2px solid
        ${({ theme }) => theme.colors.primary};
      text-underline-offset: 0.5rem;
      color: inherit;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <address className="address-block">
          <b> ADVERA Advisory & Consulting GmbH</b> <br />
          Bolligenstrasse 94
          <br />
          CH - 3065 Bolligen bei Bern
          <br />
          <a href="tel:+41 31 311 43 43"> T: +41 31 311 43 43</a> <br />
          <a href="mailto: contact@vonweissenfluh.com">
            contact@vonweissenfluh.com
          </a>
          <br />
        </address>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
