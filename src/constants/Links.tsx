import React from "react"

export type NavLinkItem = {
  name: string,
  url?: string,
  isExternalLink?: boolean,
  items?: NavLinkItem[]
}

export const HEADER_NAV_LINK_ITEMS: NavLinkItem[] = [
  {
    name: 'Log in',
    url: '/log-in/'
  },
  {
    name: 'Tutorial',
    url: '/tutorial/'
  },
]

export const FOOTER_NAV_LINK_ITEMS: NavLinkItem[] = [
  {
    name: 'Products',
    items: [
      {
        name: 'Cochl. Sense',
        url: '/cochl-sense/'
      }
    ]
  },
  {
    name: 'Company',
    items: [
      {
        name: 'Technology',
        url: '/technology/'
      },
      {
        name: 'Stories',
        url: '/about-us/'
      },
      {
        name: 'Newsroom',
        url: '/newsroom/'
      },
      {
        name: 'Press',
        url: '/press/'
      },
      {
        name: 'Career opportunities',
        url: '/career/'
      }
    ]
  },
  {
    name: 'Support',
    items: [
      {
        name: 'Let\'s Talk',
        url: '/contact-us/'
      }
    ]
  }
]
