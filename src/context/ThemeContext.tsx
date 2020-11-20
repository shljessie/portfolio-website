import React, { Dispatch, SetStateAction, useEffect, useState } from "react"

declare global {
  interface Window {
    MediaRecorder: any;
    webkitAudioContext: any;
  }
}

type EnvironmentConstants = {
  SERVER_BASE_URL: string
  GOOGLE_ANALYTICS_TRACKING_CODE: string
  GATSBY_API_URL: string
}

const initialEnvironmentConstants: EnvironmentConstants = {
  SERVER_BASE_URL: '',
  GOOGLE_ANALYTICS_TRACKING_CODE: '',
  GATSBY_API_URL: ''
}

type ThemeContextType = {
  headerTheme: string,
  setHeaderTheme: Dispatch<SetStateAction<HeaderThemeType>>,
  mimeType: string,
  audioContext: AudioContext | undefined,
  audioAnalyzer: AnalyserNode | undefined,
  resetAudioAnalyzer: () => void,
  environmentConstants: EnvironmentConstants
}

const initialState = {
  headerTheme: 'dark',
  setHeaderTheme: (() => null) as Dispatch<SetStateAction<HeaderThemeType>>,
  mimeType: 'wav',
  audioContext: undefined,
  audioAnalyzer: undefined,
  resetAudioAnalyzer: () => null,
  environmentConstants: initialEnvironmentConstants
}

export let ThemeContext = React.createContext<ThemeContextType>(
  initialState
);

export type HeaderThemeType = 'dark'


function getEnvironmentConstants(): EnvironmentConstants {
  console.log('## window.origin: ', window.origin)
  console.log('## process.env.BETA_WINDOW_ORIGIN: ', process.env.BETA_WINDOW_ORIGIN)

  switch (window.origin) {
    case process.env.PROD_WINDOW_ORIGIN:
      return {
        SERVER_BASE_URL: process.env.PROD_SERVER_BASE_URL as string,
        GOOGLE_ANALYTICS_TRACKING_CODE: process.env.REACT_APP_PROD_GOOGLE_ANALYTICS_TRACKING_CODE as string,
        GATSBY_API_URL: process.env.PROD_GATSBY_API_URL as string,
      }
    case process.env.BETA_WINDOW_ORIGIN:
      console.log('## process.env.BETA_SERVER_BASE_URL: ', process.env.BETA_SERVER_BASE_URL)
      return {
        SERVER_BASE_URL: process.env.BETA_SERVER_BASE_URL as string,
        GOOGLE_ANALYTICS_TRACKING_CODE: process.env.REACT_APP_BETA_GOOGLE_ANALYTICS_TRACKING_CODE as string,
        GATSBY_API_URL: process.env.BETA_GATSBY_API_URL as string,
      }
    case process.env.LOCAL_WINDOW_ORIGIN_DEV:
      return {
        SERVER_BASE_URL: process.env.LOCAL_SERVER_BASE_URL as string,
        GOOGLE_ANALYTICS_TRACKING_CODE: process.env.REACT_APP_BETA_GOOGLE_ANALYTICS_TRACKING_CODE as string,
        GATSBY_API_URL: process.env.BETA_GATSBY_API_URL as string,
      }
    case process.env.LOCAL_WINDOW_ORIGIN_STATIC:
      console.log('wow: ', process.env.LOCAL_SERVER_BASE_URL)
      return {
        SERVER_BASE_URL: process.env.LOCAL_SERVER_BASE_URL as string,
        GOOGLE_ANALYTICS_TRACKING_CODE: process.env.REACT_APP_BETA_GOOGLE_ANALYTICS_TRACKING_CODE as string,
        GATSBY_API_URL: process.env.BETA_GATSBY_API_URL as string,
      }
    default:
      return {
        SERVER_BASE_URL: '',
        GOOGLE_ANALYTICS_TRACKING_CODE: '',
        GATSBY_API_URL: ''
      }
  }
}

// What the hell is theme provider? It is used to share props without passing. Read below.
// https://typeofnan.dev/toggling-light-dark-theme-in-react-with-usecontext/
export const ThemeContextProvider = ({ children }: Props) => {
  const [headerTheme, setHeaderTheme] = useState<HeaderThemeType>('dark')
  const [mimeType, setMimeType] = useState('wav')
  const [audioContext, setAudioContext] = useState<AudioContext | undefined>(undefined)
  const [audioAnalyzer, setAudioAnalyzer] = useState<AnalyserNode | undefined>(undefined)
  const [environmentConstants, setEnvironmentConstants] = useState<EnvironmentConstants>(initialEnvironmentConstants)

  useEffect(() => {
    // Environmental constants
    setEnvironmentConstants(getEnvironmentConstants())
    console.log('## hello: ', getEnvironmentConstants())
    console.log('## window.origin: ', window.origin)

    // Audio context
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    setAudioContext(audioCtx)
    const analyser = audioCtx.createAnalyser()
    setAudioAnalyzer(analyser)

    // Media recorder
    if (window.MediaRecorder && window.MediaRecorder.isTypeSupported) {
      if (window.MediaRecorder.isTypeSupported('audio/webm')) { // && isChrome
        setMimeType('webm')
        return
      }
      if (window.MediaRecorder.isTypeSupported('audio/ogg')) { // && isFirefox
        setMimeType('ogg')
        return
      }
    }
  }, [window])

  function resetAudioAnalyzer() {
    if (audioContext) {
      const analyser = audioContext.createAnalyser()
      console.log('## resetAudioAnalyzer: ', analyser)

      setAudioAnalyzer(analyser)
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        headerTheme,
        setHeaderTheme,
        mimeType,
        audioContext,
        audioAnalyzer,
        resetAudioAnalyzer ,
        environmentConstants
      }}
    >
      { children }
    </ThemeContext.Provider>
  )
}

type Props = {
  children: React.ReactNode
}


