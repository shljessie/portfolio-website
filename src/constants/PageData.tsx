export type TechnologyItemDataProps = {
  title: string,
  description: string,
}

export const FUNCTION_ITEM_DATA: {[key: string]: TechnologyItemDataProps[]} = {
  benefits: [
    {
      title: 'How it Works',
      description: 'Deployment of your choice-- API and SDK. Run it on cloud ' +
        'or edge devices that requires no internet connection'
    },
    {
      title: 'How it Works',
      description: 'Seamlessly integrate with any app & devices. Install ' +
        'within minutes and begin to generate data flows.'
    },
    {
      title: 'How it Works',
      description: 'Unparalleled accuracy and near-zero latency. Built to ' +
        'run in noisy real world environment.'
    }
  ]
}

export type HowToDataProps = {
  step: string,
  description: string,
}

export const HOW_TO_DATA: {[key: string]: HowToDataProps[]} = {
  steps: [
    {
      step: '1   Upload File',
      description: 'Upload an audio or video file. Click to ' +
        'add media or drag and drop a file.'
    },
    {
      step: '2   Separate Audio',
      description: 'Music is detected in the numbered ' +
        'sections. Click on a number or drag a '+
        'new selection to start editing.'
    },
    {
      step: '3   Swap Music',
      description: 'We have recommended similar music to ' +
        'the music we detected in your media file ' +
        'Click on a numbered section to add music. '
    }
  ]
}

