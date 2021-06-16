import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalStateContext } from "../global/Context";
import { RenderLinksMobile } from "./RenderLinks";
import { mediaQueries } from "../utils/MediaQuerie";

const MobileMenuWrapper = styled.div`
  background: ${({ theme }) => theme.colors.background};
  position: fixed;
  top: 120px;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  box-sizing: border-box;
  height: calc(100%-120px);
  transition: transform 1s ease;
  transform: ${(props) =>
    props.open ? "translate(0,0)" : "translate(100%, 0)"};

  display: none;
  ${mediaQueries.lessThan("tablet")`

display: block

`}

  .link-wrapper-mobile {
    display: flex;
    flex-direction: column;
    padding: 3rem;

    a {
      font-family: ${({ theme }) => theme.fonts.secondary};
      font-size: 6rem;
      margin: 2rem 0;
    }
  }
`;

const MobileMenu = () => {
  const { open } = useContext(GlobalStateContext);

  return (
    <MobileMenuWrapper open={open}>
      <div className="link-wrapper-mobile">
        <RenderLinksMobile />
      </div>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
