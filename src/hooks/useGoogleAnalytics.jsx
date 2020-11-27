import {ENVIRONMENT_CONSTANTS} from "../shared/EnvironmentConstants";
import ReactGA from 'react-ga'

const init = () => {
  ReactGA.initialize(ENVIRONMENT_CONSTANTS.GOOGLE_ANALYTICS_TRACKING_CODE)
}

const pageView = (path = window.location.pathname + window.location.search) => {
    ReactGA.pageview(path)
}

const gaEvent = (category, action, label, value) => {
    ReactGA.event({
        category: category,
        action: action,
        label: label,
        value: value
    })
}

const gaEventWithoutLabel = (category, action, value) => {
  ReactGA.event({
    category: category,
    action: action,
    value: value
  })
}

export default {
  init,
  pageView,
  gaEvent,
  gaEventWithoutLabel
}