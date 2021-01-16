

export type TermsConditionsProps = {
  title: string,
  description: any,
}

export const TERMS_CONDITIONS_DATA: TermsConditionsProps[] =[
  {
    title:'What is your main focus of study?',
    description: 'Currently, I am a sophmore at Cornell University majoring in Information Science. '+
    'Here I am pursuing a concentration in Data Science & Interactive Technologies with a minor in Biometry and Statistics. ' +
    'I am passionate about machine learning, data interaction, and exploring new ways of understanding information and the world ' +
    'around us with new technologies.'
  },
  {
    title:'What past projects have you done? ',
    description: 'My past projects are related to Machine Learning and Interactive Technology.' +
    ' I have worked mostly on NLP with sentiment analysis and NLP with BERT but I am also interested in other aspects of Machine Learning. ' + 
    ' On campus I am part of Cornell Data Science and I worked on projects like ' +
    ' MyCourseIndex (mycourseindex.com) and Coronavirus Analysis with Twitter. ' +
    ' I have worked for 6 months as a Software engineer at a sound recognition machine learning company developing various programs ' +
    ' such as Mercedes Benz User Experience with Machine Learning, Music Swapper, and Prime. ' + 
    ' I have also created data visualizations with D3.js and developed 3d data visualizations with Webgl and THREE.js'
  },
  {
    title:'What are you passionate about?',
    description: 'I am passionate about creating new ways of interacting with data and information ' +
    'In addition to this, I hope to contribute in developing data technologies to combat social issues ' +
    'such as sustainability, diversity in tech, and education equality.' 
  },
  {
    title:'What are you doing these days?',
    description: 'I am currently in Seoul,Gangnam Korea working at Cochl. a machine learning company specializing in' + 
    ' non-verbal sound recoginition. I plan to take online course in Korea for the Spring 2021 semester'
  },
]


export type TimeLineDataProps = {
  month: string,
  title: string,
  isLeft: boolean,
}

export const ABOUT_US_TIMELINE_DATA: TimeLineDataProps[] = [
  {
    month: '2020. 06',
    title: 'Raised Series A Funding',
    isLeft: false
  },
  {
    month: '2019. 07',
    title: 'Release of Cochl. Sense Edge SDK',
    isLeft: true
  },
  {
    month: '2018. 04',
    title: 'Release of Cochl. Sense Cloud API',
    isLeft: false
  },
  {
    month: '2017. 08',
    title: 'Raised Seed Funding',
    isLeft: true
  },
  {
    month: '2017. 07',
    title: 'Establishment of the Company',
    isLeft: false
  },
]