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

