import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalStateContext } from "../global/Context";

const MobileMenuWrapper = styled.div`
  backdrop-filter: blur(5px);
  background: rgba(11, 11, 11, 0.1);
  position: fixed;
  top: 80px;
  left: 0;
  bottom: 0;
  width: 100%;
  height: calc(100%-80px);
  transition: transform 1s ease-in-out;
  transform: ${(props) =>
    props.open ? "translate(0,0)" : "translate(100%, 0)"};
`;

const MobileMenu = () => {
  const { open } = useContext(GlobalStateContext);

  return <MobileMenuWrapper open={open}></MobileMenuWrapper>;
};

export default MobileMenu;
