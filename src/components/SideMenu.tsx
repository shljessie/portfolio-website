import { SIDE_MENU_PADDING_RIGHT, SIDE_MENU_TRANSITION } from "../constants/GlobalStyles"
import { makeStyles, useMediaQuery } from "@material-ui/core"

import { HorizontalDelimiter } from "./Delimiters"
import { NavLinkItem } from "../constants/Links"
import React from "react"
import UnstyledLink from "./UnstyledLink"
import styled from 'styled-components';
import theme from "../theme"

const SIDE_MENU_ITEM_HEIGHT = 34
const SIDE_MENU_WIDTH_LARGE = 300
const SIDE_MENU_WIDTH_SMALL = 240


const useStyles = makeStyles(theme => ({
  menu: {
    width: SIDE_MENU_WIDTH_SMALL,
    [theme.breakpoints.up('sm')]: {
      width: SIDE_MENU_WIDTH_LARGE
    },
  },
  menuItem: {
    alignItems: 'center',
    textTransform: 'none',
  }
}))

type StyledMenuProps = {
  isOpen: boolean
}

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #000;
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform ${SIDE_MENU_TRANSITION.duration}s ${SIDE_MENU_TRANSITION.property};
  transform: ${(props: StyledMenuProps) => props.isOpen ? 'translateX(0%)' : 'translateX(100%)'};

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #000;
    text-decoration: none;
    transition: color ${SIDE_MENU_TRANSITION.duration}s ${SIDE_MENU_TRANSITION.property};
    
    @media (max-width: 600px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${ theme.palette.action.hover }};
    }
  
  z-index: 10;
`


type SideMenuItemsProps = {
  item: NavLinkItem
}

const SideMenuItems = (props: SideMenuItemsProps) => {
  const classes = useStyles()

  const { item } = props

  return (
    <>
      {
        item.items
          ? item.items.map((subItem) => (
            <SideMenuItems item={subItem}/>
          ))
          : <>
            <UnstyledLink
              className={classes.menuItem}
              name={item.name}
              href={item.url}
              variant='body1'
              height={SIDE_MENU_ITEM_HEIGHT}
              color={'white'}
            />
            <HorizontalDelimiter length='100%' margin={theme.spacing(0, 0)}/>
          </>
      }
    </>
  )
}

const SideMenu = (props: Props) => {

  const classes = useStyles()

  const { isSideMenuOpen, items } = props

  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  })

  return (
    <StyledMenu isOpen={isSideMenuOpen} className={classes.menu}>
        <div style={{ margin: `${ theme.spacing(10)}px ${SIDE_MENU_PADDING_RIGHT}px 0` }}>
          {
            items.map((item, i) => <SideMenuItems item={item}/>)
          }
        </div>
    </StyledMenu>
  )
}

type Props = {
  isSideMenuOpen: boolean,
  items: NavLinkItem[]
}
export default SideMenu
