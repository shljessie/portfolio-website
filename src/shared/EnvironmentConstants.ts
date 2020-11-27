interface EnvironmentConstants {
  API_BASE_URL: string
  SDK_BASE_URL: string
  GOOGLE_ANALYTICS_TRACKING_CODE: string
}

export const ENVIRONMENT_CONSTANTS: EnvironmentConstants = (() => {
  switch (window.origin) {
    case process.env.REACT_APP_PROD_WINDOW_ORIGIN:
      return {
        API_BASE_URL: process.env.REACT_APP_PROD_API_BASE_URL as string,
        SDK_BASE_URL: process.env.REACT_APP_PROD_SDK_BASE_URL as string,
        GOOGLE_ANALYTICS_TRACKING_CODE: process.env.REACT_APP_PROD_GOOGLE_ANALYTICS_TRACKING_CODE as string
      }
    case process.env.REACT_APP_BETA_WINDOW_ORIGIN:
      return {
        API_BASE_URL: process.env.REACT_APP_BETA_API_BASE_URL as string,
        SDK_BASE_URL: process.env.REACT_APP_BETA_SDK_BASE_URL as string,
        GOOGLE_ANALYTICS_TRACKING_CODE: process.env.REACT_APP_BETA_GOOGLE_ANALYTICS_TRACKING_CODE as string
      }
    case process.env.REACT_APP_LOCAL_WINDOW_ORIGIN:
      return {
        API_BASE_URL: process.env.REACT_APP_BETA_API_BASE_URL as string,
        SDK_BASE_URL: process.env.REACT_APP_BETA_SDK_BASE_URL as string,
        GOOGLE_ANALYTICS_TRACKING_CODE: process.env.REACT_APP_BETA_GOOGLE_ANALYTICS_TRACKING_CODE as string
      }
    default:
      return {
        API_BASE_URL: '',
        SDK_BASE_URL: '',
        GOOGLE_ANALYTICS_TRACKING_CODE: ''
      }
  }
})();
