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