const ROOT_PATH = 'https://cochl-images.s3.ap-northeast-2.amazonaws.com/official_website'

export const IMAGE_DIRECTORY_PATH = {
  header: ROOT_PATH + '/header',
  footer: ROOT_PATH + '/footer',
  technology: ROOT_PATH + '/technology',
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
    medium: IMAGE_DIRECTORY_PATH.footer + '/footer_icon_medium.png',
    facebook: IMAGE_DIRECTORY_PATH.footer + '/footer_icon_facebook.png',
    instagram: IMAGE_DIRECTORY_PATH.footer + '/footer_icon_instagram.png',
    linkedIn: IMAGE_DIRECTORY_PATH.footer + '/footer_icon_linkedin.png',
    twitter: IMAGE_DIRECTORY_PATH.footer + '/footer_icon_twitter.png',
    github: IMAGE_DIRECTORY_PATH.footer + '/footer_icon_github.png',
  }
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