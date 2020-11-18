const ROOT_PATH = 'https://cochl-images.s3.ap-northeast-2.amazonaws.com/official_website'

export const IMAGE_DIRECTORY_PATH = {
  header: ROOT_PATH + '/header',
  footer: ROOT_PATH + '/footer',
  career: ROOT_PATH + '/career',
  newsroom: ROOT_PATH + '/newsroom',
  news: ROOT_PATH + '/newsroom/news',
  cochl_sense: ROOT_PATH + '/products/cochl_sense',
  technology: ROOT_PATH + '/technology',
  about_us: ROOT_PATH + '/about_us',
  employee: ROOT_PATH + '/employee',
  main: ROOT_PATH + '/main'
}

type HeaderImageUrlsProps = {
  logo: string
}

export const HEADER_IMAGE_URLS: {[key: string]: HeaderImageUrlsProps} = {
  light: {
    logo: IMAGE_DIRECTORY_PATH.header + '/header_logo_light.png',
  },
  dark: {
    logo: IMAGE_DIRECTORY_PATH.header + '/header_logo_dark.png',
  }
}

export const FOOTER_IMAGE_URLS = {
  logo: IMAGE_DIRECTORY_PATH.footer + '/footer_logo.png',
  sns: {
    medium: IMAGE_DIRECTORY_PATH.footer + '/footer_icon_facebook.png',
    facebook: IMAGE_DIRECTORY_PATH.footer + '/footer_icon_facebook.png',
    instagram: IMAGE_DIRECTORY_PATH.footer + '/footer_icon_instagram.png',
    linkedIn: IMAGE_DIRECTORY_PATH.footer + '/footer_icon_linkedin.png',
    twitter: IMAGE_DIRECTORY_PATH.footer + '/footer_icon_twitter.png',
    github: IMAGE_DIRECTORY_PATH.footer + '/footer_icon_github.png',
  }
}

export const CAREER_SVG_URLS = {
  creative: IMAGE_DIRECTORY_PATH.career + '/career_icon_creative.png',
  rocket: IMAGE_DIRECTORY_PATH.career + '/career_icon_rocket.png',
}

export const NEWSROOM_IMAGE_URLS = {
  '2020_07': {
    'Benz_Partnership': [
      IMAGE_DIRECTORY_PATH.news + '/2020_07' + '/Benz_Partnership/main.png',
    ],
  },
  '2020_08': {
    'Series_A_Funding': [
      IMAGE_DIRECTORY_PATH.news + '/2020_08' + '/Series_A_Funding/main.png',
    ],
    'Human_Status_Release': [
      IMAGE_DIRECTORY_PATH.news + '/2020_08' + '/Human_Status_Release/main.png',
    ]
  }
}

export const PRICING_IMAGE_URLS = {
  cube: IMAGE_DIRECTORY_PATH.cochl_sense + '/cube_v2.png',
  cubes: IMAGE_DIRECTORY_PATH.cochl_sense + '/cubes_v2.png',
}

export const TECHNOLOGY_IMAGE_URLS = {
  benefits: [
    IMAGE_DIRECTORY_PATH.technology + '/tech_benefits_1.mp4',
    IMAGE_DIRECTORY_PATH.technology + '/tech_benefits_2.mp4',
    IMAGE_DIRECTORY_PATH.technology + '/tech_benefits_3.mp4'
  ],
  special: [
    IMAGE_DIRECTORY_PATH.technology + '/tech_special_1.gif',
    IMAGE_DIRECTORY_PATH.technology + '/tech_special_2.png',
    IMAGE_DIRECTORY_PATH.technology + '/tech_special_3.png',
    IMAGE_DIRECTORY_PATH.technology + '/tech_special_4.gif',
    IMAGE_DIRECTORY_PATH.technology + '/tech_special_5.png',
  ]
}

export const ABOUT_US_IMAGE_URLS = {
  main: IMAGE_DIRECTORY_PATH.about_us + '/about_us_main.png',
  employee_background: IMAGE_DIRECTORY_PATH.about_us + '/about_us_background.png',
}

export const EMPLOYEE_IMAGE_URLS = {
  linkedIn: IMAGE_DIRECTORY_PATH.employee + '/employee_linkedin_logo.png',
  google: IMAGE_DIRECTORY_PATH.employee + '/employee_linkedin_logo.png'
}

export const MAIN_IMAGE_URLS = {
  technology: IMAGE_DIRECTORY_PATH.main + '/main_technology.mp4',
  investors: [
    IMAGE_DIRECTORY_PATH.main + '/main_investors_1.png',
    IMAGE_DIRECTORY_PATH.main + '/main_investors_2.png',
    IMAGE_DIRECTORY_PATH.main + '/main_investors_3.png',
    IMAGE_DIRECTORY_PATH.main + '/main_investors_4.png'
  ],
  industries: [
    IMAGE_DIRECTORY_PATH.main + '/main_industries_1.png',
    IMAGE_DIRECTORY_PATH.main + '/main_industries_2.png',
    IMAGE_DIRECTORY_PATH.main + '/main_industries_3.png',
    IMAGE_DIRECTORY_PATH.main + '/main_industries_4.png',
    IMAGE_DIRECTORY_PATH.main + '/main_industries_5.png',
  ]
}
