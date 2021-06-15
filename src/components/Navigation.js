import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Hamburger from "./Hamburger";
import MobileMenu from "../components/MobileMenu";
import { StaticImage } from "gatsby-plugin-image";
import { mediaQueries } from "../utils/MediaQuerie";

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

const NavigationWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.background};
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0 10rem;
  box-sizing: border-box;
  z-index: 100;

  ${mediaQueries.lessThan("tablet")`
  padding: 0 2rem;
  width: 100%;
  
    `}

  .logo-wrapper {
    flex: 1;
  }
  .link-wrapper {
    flex: 1.5;
    display: flex;
    ${mediaQueries.lessThan("tablet")`
    display: none;
    `}
  }
  .active {
    color: ${({ theme }) => theme.colors.textAlt};
    font-weight: 400;
  }
`;

const Navigation = ({ location }) => {
  /**
   * Oftentimes we'll have different UI state
   * based on the router location.  Do it here.
   */
  /*   useEffect(() => console.log(location), [location]); */

  return (
    <NavigationWrapper>
      <div className="logo-wrapper">
        <StyledLink to="/">
          <StaticImage
            src="../images/Logo_schwarz.png"
            alt="Logo von Weissenfluh"
            placeholder="none"
            height={60}
          />
        </StyledLink>
      </div>

      <MobileMenu />

      <div className="link-wrapper">
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
      </div>

      <Hamburger />
    </NavigationWrapper>
  );
};

export default Navigation;
