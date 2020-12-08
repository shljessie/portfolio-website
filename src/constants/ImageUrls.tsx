const ROOT_PATH = 'https://cochl-images.s3.ap-northeast-2.amazonaws.com/music-swapper'

export const IMAGE_DIRECTORY_PATH = {
  header: ROOT_PATH + '/header',
  footer: ROOT_PATH + '/footer',
  technology: ROOT_PATH + '/technology',
  general: ROOT_PATH + '/general',
  main: ROOT_PATH + '/main',
  howto: ROOT_PATH + '/main/howto',
}

export const HEADER_IMAGE_URL = {
  logo: IMAGE_DIRECTORY_PATH.header + '/header_logo_dark.png',
}

export const MAIN_IMAGE_URL = {
  scroll: IMAGE_DIRECTORY_PATH.main + '/scroll.png',
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


export const HOW_TO_IMAGE_URLS = {
  steps: [
    IMAGE_DIRECTORY_PATH.howto + '/howto_step_one.png',
    IMAGE_DIRECTORY_PATH.howto + '/howto_step_two.png',
    IMAGE_DIRECTORY_PATH.howto + '/howto_step_three.png'
  ]
}


export const GENERAL_IMAGE_URLS = {
  backToTop: IMAGE_DIRECTORY_PATH.general + '/back_to_top_icon.png',
}