import React from "react"
import styled from 'styled-components';
import { SIDE_MENU_TRANSITION } from "../constants/GlobalStyles"

type ModalProps = {
  isSideMenuOpen: boolean
}

// setting theme if not using MUI
// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
export const Modal = styled.div`
  position: absolute;
  background-color: #000;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  transition: opacity ${SIDE_MENU_TRANSITION.duration}s linear;
  opacity: ${(props: ModalProps) => props.isSideMenuOpen ? '0.5' : '0'};
  visibility: ${(props: ModalProps) => props.isSideMenuOpen ? 'visible' : 'hidden'};
  z-index: 5;
`;
