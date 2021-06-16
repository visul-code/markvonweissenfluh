import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Hamburger from "./Hamburger";
import MobileMenu from "../components/MobileMenu";
import { StaticImage } from "gatsby-plugin-image";
import { mediaQueries } from "../utils/MediaQuerie";
import { RenderLinksDesktop } from "../components/RenderLinks";

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

  
    `}

  .logo-wrapper {
    flex: 1;
  }
  .link-wrapper-desktop {
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
        <Link to="/">
          <StaticImage
            src="../images/Logo_schwarz.png"
            alt="Logo von Weissenfluh"
            placeholder="none"
            height={60}
          />
        </Link>
      </div>

      <MobileMenu />

      <div className="link-wrapper-desktop">
        <RenderLinksDesktop />
      </div>

      <Hamburger />
    </NavigationWrapper>
  );
};

export default Navigation;
