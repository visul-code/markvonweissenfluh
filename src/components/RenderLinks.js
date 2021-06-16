import React, { useContext } from "react";
import { Link } from "gatsby";
import { GlobalStateContext } from "../global/Context";
import styled from "styled-components";

const StyledLink = styled((props) => <Link {...props} />)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 2rem;
  font-weight: 300;
  margin-right: 5rem;

  :hover {
    color: ${({ theme }) => theme.colors.textAlt};
  }
`;

export const RenderLinksDesktop = () => {
  return (
    <>
      <StyledLink activeClassName="active" to="/uebermich">
        Über mich
      </StyledLink>
      <StyledLink activeClassName="active" to="/mandate">
        Mandate
      </StyledLink>
      <StyledLink activeClassName="active" to="/partner">
        Partner
      </StyledLink>
      <StyledLink activeClassName="active" to="/kontakt">
        Kontakt
      </StyledLink>
    </>
  );
};

export const RenderLinksMobile = () => {
  const { handleOpen } = useContext(GlobalStateContext);

  return (
    <>
      <StyledLink
        onClick={() => {
          handleOpen();
        }}
        activeClassName="active"
        to="/uebermich"
      >
        Über mich
      </StyledLink>
      <StyledLink
        onClick={() => {
          handleOpen();
        }}
        activeClassName="active"
        to="/mandate"
      >
        Mandate
      </StyledLink>
      <StyledLink
        onClick={() => {
          handleOpen();
        }}
        activeClassName="active"
        to="/partner"
      >
        Partner
      </StyledLink>
      <StyledLink
        onClick={() => {
          handleOpen();
        }}
        activeClassName="active"
        to="/kontakt"
      >
        Kontakt
      </StyledLink>
    </>
  );
};
