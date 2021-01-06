
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
    name: 'About Me',
    items: [
      {
        name: 'Creative Exploration',
        url: '/cochl-sense/'
      },
      {
        name: 'Honest Stories',
        url: '/cochl-sense/'
      },
    ]
  },
  {
    name: 'Professional',
    items: [
      {
        name: 'Timeline',
        url: '/technology/'
      },
      {
        name: 'Internship Journal',
        url: '/about-us/'
      },
    ]
  },
]
