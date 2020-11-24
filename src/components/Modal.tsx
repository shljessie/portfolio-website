import { SIDE_MENU_TRANSITION } from "../constants/GlobalStyles"
import styled from 'styled-components';

type ModalProps = {
  isSideMenuOpen: boolean
}

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
