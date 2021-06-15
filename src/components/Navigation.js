import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Hamburger from "./Hamburger";
import MobileMenu from "../components/MobileMenu";

const NavigationWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Navigation = ({ location }) => {
  /**
   * Oftentimes we'll have different UI state
   * based on the router location.  Do it here.
   */
  useEffect(() => console.log(location), [location]);

  return (
    <NavigationWrapper>
      <MobileMenu />
      <Hamburger />
      <Link to="/">Home</Link>
      <Link to="/page1">Page 1</Link>
      <Link to="/page2">Page 2</Link>
    </NavigationWrapper>
  );
};

export default Navigation;
