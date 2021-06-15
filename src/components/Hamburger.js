import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalStateContext } from "../global/Context";

const StyledBurger = styled.button`
  width: 30px;
  height: 20px;
  position: relative;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      .top,
      .meat,
      .bottom {
        width: 30px;
      }
    }
  }

  .bun,
  .meat {
    pointer-events: none;
    position: absolute;
    display: block;
    width: 30px;
    background: black;
    height: 2px;
    transition: 0.3s ease all;
  }
  .top {
    top: 0%;
    width: 20px;
  }
  .meat {
    top: 50%;
    width: 25px;
  }
  .bottom {
    top: 100%;
    width: 10px;
  }
  &.open {
    .top {
      width: 30px;
      top: 50%;
      transform: rotate(45deg);
    }
    .meat {
      width: 30px;
      transform: scaleX(0);
    }
    .bottom {
      width: 30px;
      top: 50%;
      transform: rotate(-45deg);
    }
  }
`;

const Hamburger = (props) => {
  const { open, handleOpen } = useContext(GlobalStateContext);

  return (
    <StyledBurger
      aria-label="Toggle Menu"
      onClick={() => handleOpen()}
      className={`hamburger ${open ? "open" : ""}`}
    >
      <div className="bun top"></div>
      <div className="meat"></div>
      <div className="bun bottom"></div>
    </StyledBurger>
  );
};

export default Hamburger;
