import React from "react"
import styled from 'styled-components';
import theme from "../theme"

type StyledBurgerProps = {
  isOpen: boolean
}
const BURGER_MENU_BUTTON_SIZE = '24px'

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${ BURGER_MENU_BUTTON_SIZE };
  height: ${ BURGER_MENU_BUTTON_SIZE };
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 15;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: inherit;
    height: 2px;
    background: ${(props: StyledBurgerProps ) => props.isOpen ? theme.palette.primary.dark : theme.palette.primary.light};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 2.3px;
    
    :first-child {
      transform: ${(props: StyledBurgerProps ) => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${(props: StyledBurgerProps ) => props.isOpen ? '0' : '1'};
      transform: ${(props: StyledBurgerProps ) => props.isOpen ? 'translateX(-20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${(props: StyledBurgerProps ) => props.isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const BurgerMenu = (props: Props) => {
  const { isSideMenuOpen, setIsSideMenuOpen } = props

  return (
    <StyledBurger isOpen={isSideMenuOpen} onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

type Props = {
  isSideMenuOpen: boolean,
  setIsSideMenuOpen: (isOpen: boolean) => void
}

export default BurgerMenu
