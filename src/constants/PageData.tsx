import { CAREER_SVG_URLS, IMAGE_DIRECTORY_PATH, NEWSROOM_IMAGE_URLS, PRICING_IMAGE_URLS } from "./ImageUrls"

type PersonalityItemProp = {
  iconUrl: string,
  iconName: string,
  title: string,
  detail: string
}

export const PERSONALITY_ITEMS: PersonalityItemProp[] = [
  {
    iconUrl: CAREER_SVG_URLS.creative,
    iconName: 'creative_icon',
    title: 'Self-motivated',
    detail: 'We’re looking for self-motivated professionals who can define the problem rather than passively doing  the given tasks.'
  },
  {
    iconUrl: CAREER_SVG_URLS.rocket,
    iconName: 'rocket_icon',
    title: 'Creative',
    detail: 'We make new services with new technologies to make a positive impact in the world, so creative minds are important.'
  },
  {
    iconUrl: CAREER_SVG_URLS.rocket,
    iconName: 'rocket_icon',
    title: 'High standards',
    detail: 'Lowering the bar to complete the task quickly isn’t what we do. We keep the highest standards from invisible and fundamental things.'
  },
  {
    iconUrl: CAREER_SVG_URLS.creative,
    iconName: 'creative_icon',
    title: 'Ownership',
    detail: 'Freedom based on trust rather than rules with micro-management. We win and lose together and nothing here is someone else’s problem.'
  },
]

export type JobItemProps = {
  jobTitle: string,
  description: string,
  required: string[],
  preferred: string[],
  index?: number
}

export const CURRENT_JOB_OPENINGS: JobItemProps[] = [
  {
    jobTitle: 'Software Engineer',
    description: 'Research Engineers at Cochlear.ai work on various research projects using academic knowledge ' +
      'as well as practical implementation skills. We’re looking for creative and self-reliant researchers who ' +
      'wish to apply cutting-edge techniques to solve critical problems. Main responsibilities are designing, ' +
      'implementing, and evaluating algorithms, and bring them to real-world service.',
    required: [
      'Bachelor’s degree in electronic engineering, computer science, or equivalent field',
      'Strong knowledge of python, machine learning, and statistics',
      'Knowledge of TensorFlow frameworks'
    ],
    preferred: [
      'Master’s degree',
      'Experience with various production-level industrial projects',
      'A passion for AI'
    ]
  },
  {
    jobTitle: 'Research Engineer',
    description: 'Research Engineers at Cochlear.ai work on various research projects using academic knowledge ' +
      'as well as practical implementation skills. We’re looking for creative and self-reliant researchers who ' +
      'wish to apply cutting-edge techniques to solve critical problems. Main responsibilities are designing, ' +
      'implementing, and evaluating algorithms, and bring them to real-world service.',
    required: [
      'Bachelor’s degree in electronic engineering, computer science, or equivalent field',
      'Strong knowledge of python, machine learning, and statistics',
      'Knowledge of TensorFlow frameworks'
    ],
    preferred: [
      'Master’s degree',
      'Experience with various production-level industrial projects',
      'A passion for AI'
    ]
  },
  {
    jobTitle: 'Research Scientist',
    description: 'Research Engineers at Cochlear.ai work on various research projects using academic knowledge ' +
      'as well as practical implementation skills. We’re looking for creative and self-reliant researchers who ' +
      'wish to apply cutting-edge techniques to solve critical problems. Main responsibilities are designing, ' +
      'implementing, and evaluating algorithms, and bring them to real-world service.',
    required: [
      'Bachelor’s degree in electronic engineering, computer science, or equivalent field',
      'Strong knowledge of python, machine learning, and statistics',
      'Knowledge of TensorFlow frameworks'
    ],
    preferred: [
      'Master’s degree',
      'Experience with various production-level industrial projects',
      'A passion for AI'
    ]
  }
]

export const PRESS_CATEGORIES = ['All', 'Partnerships', 'Events', 'Featured in Media']

export type PressItemProps = {
  url: string,
  category: number
}

export const NEWS_CATEGORIES = ['All', 'Featured Story', 'Announcements']

export type NewsItemProps = {
  subject: string,
  category: number,
  date: string,
  summary?: string,
  imgUrls: string[],
  paragraphs: string[]
}

export const NEWS_ITEMS: NewsItemProps[] = [
  {
    subject: 'Merceides Benz partners with Cochlear.ai!',
    category: 1,
    date: '2020-07-10',
    summary: 'Merceides Benz has signed a contract to develop a new audio analysis AI software using Cochl. Sense!',
    imgUrls: NEWSROOM_IMAGE_URLS['2020_07'].Benz_Partnership,
    paragraphs: [
      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. ' +
      'Etiam augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ' +
      'ut luctus justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris ' +
      'et nisl eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum. ',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non erat ' +
      'eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In vulputate, ' +
      'magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet erat.\n' +
      'Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis tellus ' +
      'posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacusNunc ' +
      'non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis.',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non ' +
      'erat eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In ' +
      'vulputate, magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet ' +
      'erat. Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis ' +
      'tellus posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacus',

      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. Etiam ' +
      'augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ut luctus ' +
      'justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris et nisl ' +
      'eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum.'
    ]
  },
  {
    subject: 'Cochl Sense new service: Human Status is released!',
    category: 2,
    date: '2020-08-01',
    summary: 'We are excited to announce that Cochl Sense new service: Human Status is released. You can now use Cochl Sense to judge human status!',
    imgUrls: NEWSROOM_IMAGE_URLS['2020_08'].Human_Status_Release,
    paragraphs: [
      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. ' +
      'Etiam augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ' +
      'ut luctus justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris ' +
      'et nisl eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum. ',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non erat ' +
      'eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In vulputate, ' +
      'magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet erat.\n' +
      'Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis tellus ' +
      'posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacusNunc ' +
      'non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis.',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non ' +
      'erat eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In ' +
      'vulputate, magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet ' +
      'erat. Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis ' +
      'tellus posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacus',

      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. Etiam ' +
      'augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ut luctus ' +
      'justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris et nisl ' +
      'eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum.'
    ]
  },
  {
    subject: 'Cochl.Raises $ 1.9M in Series A Funding',
    category: 1,
    date: '2020-08-15',
    summary: 'Cochl has received Series A Funding that is worth 2 million!',
    imgUrls: NEWSROOM_IMAGE_URLS['2020_08'].Series_A_Funding,
    paragraphs: [
      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. ' +
      'Etiam augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ' +
      'ut luctus justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris ' +
      'et nisl eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum. ',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non erat ' +
      'eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In vulputate, ' +
      'magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet erat.\n' +
      'Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis tellus ' +
      'posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacusNunc ' +
      'non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis.',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non ' +
      'erat eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In ' +
      'vulputate, magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet ' +
      'erat. Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis ' +
      'tellus posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacus',

      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. Etiam ' +
      'augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ut luctus ' +
      'justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris et nisl ' +
      'eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum.'
    ]
  },
  {
    subject: 'Merceides Benz partners with Cochlear.ai!',
    category: 1,
    date: '2020-07-10',
    summary: 'Merceides Benz has signed a contract to develop a new audio analysis AI software using Cochl. Sense!',
    imgUrls: NEWSROOM_IMAGE_URLS['2020_07'].Benz_Partnership,
    paragraphs: [
      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. ' +
      'Etiam augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ' +
      'ut luctus justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris ' +
      'et nisl eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum. ',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non erat ' +
      'eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In vulputate, ' +
      'magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet erat.\n' +
      'Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis tellus ' +
      'posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacusNunc ' +
      'non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis.',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non ' +
      'erat eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In ' +
      'vulputate, magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet ' +
      'erat. Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis ' +
      'tellus posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacus',

      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. Etiam ' +
      'augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ut luctus ' +
      'justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris et nisl ' +
      'eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum.'
    ]
  },
  {
    subject: 'Merceides Benz partners with Cochlear.ai!',
    category: 1,
    date: '2020-07-10',
    summary: 'Merceides Benz has signed a contract to develop a new audio analysis AI software using Cochl. Sense!',
    imgUrls: NEWSROOM_IMAGE_URLS['2020_07'].Benz_Partnership,
    paragraphs: [
      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. ' +
      'Etiam augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ' +
      'ut luctus justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris ' +
      'et nisl eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum. ',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non erat ' +
      'eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In vulputate, ' +
      'magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet erat.\n' +
      'Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis tellus ' +
      'posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacusNunc ' +
      'non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis.',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non ' +
      'erat eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In ' +
      'vulputate, magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet ' +
      'erat. Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis ' +
      'tellus posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacus',

      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. Etiam ' +
      'augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ut luctus ' +
      'justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris et nisl ' +
      'eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum.'
    ]
  },
  {
    subject: 'Merceides Benz partners with Cochlear.ai!',
    category: 1,
    date: '2020-07-10',
    summary: 'Merceides Benz has signed a contract to develop a new audio analysis AI software using Cochl. Sense!',
    imgUrls: NEWSROOM_IMAGE_URLS['2020_07'].Benz_Partnership,
    paragraphs: [
      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. ' +
      'Etiam augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ' +
      'ut luctus justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris ' +
      'et nisl eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum. ',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non erat ' +
      'eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In vulputate, ' +
      'magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet erat.\n' +
      'Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis tellus ' +
      'posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacusNunc ' +
      'non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis.',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non ' +
      'erat eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In ' +
      'vulputate, magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet ' +
      'erat. Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis ' +
      'tellus posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacus',

      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. Etiam ' +
      'augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ut luctus ' +
      'justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris et nisl ' +
      'eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum.'
    ]
  },
  {
    subject: 'Merceides Benz partners with Cochlear.ai!',
    category: 1,
    date: '2020-07-10',
    summary: 'Merceides Benz has signed a contract to develop a new audio analysis AI software using Cochl. Sense!',
    imgUrls: NEWSROOM_IMAGE_URLS['2020_07'].Benz_Partnership,
    paragraphs: [
      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. ' +
      'Etiam augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ' +
      'ut luctus justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris ' +
      'et nisl eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum. ',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non erat ' +
      'eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In vulputate, ' +
      'magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet erat.\n' +
      'Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis tellus ' +
      'posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacusNunc ' +
      'non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis.',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non ' +
      'erat eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In ' +
      'vulputate, magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet ' +
      'erat. Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis ' +
      'tellus posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacus',

      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. Etiam ' +
      'augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ut luctus ' +
      'justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris et nisl ' +
      'eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum.'
    ]
  },
  {
    subject: 'Merceides Benz partners with Cochlear.ai!',
    category: 1,
    date: '2020-07-10',
    summary: 'Merceides Benz has signed a contract to develop a new audio analysis AI software using Cochl. Sense!',
    imgUrls: NEWSROOM_IMAGE_URLS['2020_07'].Benz_Partnership,
    paragraphs: [
      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. ' +
      'Etiam augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ' +
      'ut luctus justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris ' +
      'et nisl eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum. ',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non erat ' +
      'eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In vulputate, ' +
      'magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet erat.\n' +
      'Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis tellus ' +
      'posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacusNunc ' +
      'non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis.',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non ' +
      'erat eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In ' +
      'vulputate, magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet ' +
      'erat. Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis ' +
      'tellus posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacus',

      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. Etiam ' +
      'augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ut luctus ' +
      'justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris et nisl ' +
      'eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum.'
    ]
  },
  {
    subject: 'Merceides Benz partners with Cochlear.ai!',
    category: 1,
    date: '2020-07-10',
    summary: 'Merceides Benz has signed a contract to develop a new audio analysis AI software using Cochl. Sense!',
    imgUrls: NEWSROOM_IMAGE_URLS['2020_07'].Benz_Partnership,
    paragraphs: [
      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. ' +
      'Etiam augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ' +
      'ut luctus justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris ' +
      'et nisl eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum. ',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non erat ' +
      'eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In vulputate, ' +
      'magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet erat.\n' +
      'Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis tellus ' +
      'posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacusNunc ' +
      'non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis.',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non ' +
      'erat eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In ' +
      'vulputate, magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet ' +
      'erat. Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis ' +
      'tellus posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacus',

      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. Etiam ' +
      'augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ut luctus ' +
      'justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris et nisl ' +
      'eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum.'
    ]
  },
  {
    subject: 'Merceides Benz partners with Cochlear.ai!',
    category: 1,
    date: '2020-07-10',
    summary: 'Merceides Benz has signed a contract to develop a new audio analysis AI software using Cochl. Sense!',
    imgUrls: NEWSROOM_IMAGE_URLS['2020_07'].Benz_Partnership,
    paragraphs: [
      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. ' +
      'Etiam augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ' +
      'ut luctus justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris ' +
      'et nisl eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum. ',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non erat ' +
      'eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In vulputate, ' +
      'magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet erat.\n' +
      'Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis tellus ' +
      'posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacusNunc ' +
      'non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis.',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non ' +
      'erat eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In ' +
      'vulputate, magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet ' +
      'erat. Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis ' +
      'tellus posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacus',

      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. Etiam ' +
      'augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ut luctus ' +
      'justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris et nisl ' +
      'eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum.'
    ]
  },
  {
    subject: 'Merceides Benz partners with Cochlear.ai!',
    category: 1,
    date: '2020-07-10',
    summary: 'Merceides Benz has signed a contract to develop a new audio analysis AI software using Cochl. Sense!',
    imgUrls: NEWSROOM_IMAGE_URLS['2020_07'].Benz_Partnership,
    paragraphs: [
      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. ' +
      'Etiam augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ' +
      'ut luctus justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris ' +
      'et nisl eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum. ',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non erat ' +
      'eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In vulputate, ' +
      'magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet erat.\n' +
      'Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis tellus ' +
      'posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacusNunc ' +
      'non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis.',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non ' +
      'erat eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In ' +
      'vulputate, magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet ' +
      'erat. Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis ' +
      'tellus posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacus',

      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. Etiam ' +
      'augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ut luctus ' +
      'justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris et nisl ' +
      'eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum.'
    ]
  },
  {
    subject: 'Merceides Benz partners with Cochlear.ai!',
    category: 1,
    date: '2020-07-10',
    summary: 'Merceides Benz has signed a contract to develop a new audio analysis AI software using Cochl. Sense!',
    imgUrls: NEWSROOM_IMAGE_URLS['2020_07'].Benz_Partnership,
    paragraphs: [
      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. ' +
      'Etiam augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ' +
      'ut luctus justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris ' +
      'et nisl eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum. ',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non erat ' +
      'eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In vulputate, ' +
      'magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet erat.\n' +
      'Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis tellus ' +
      'posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacusNunc ' +
      'non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis.',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non ' +
      'erat eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In ' +
      'vulputate, magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet ' +
      'erat. Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis ' +
      'tellus posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacus',

      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. Etiam ' +
      'augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ut luctus ' +
      'justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris et nisl ' +
      'eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum.'
    ]
  },
  {
    subject: 'Merceides Benz partners with Cochlear.ai!',
    category: 1,
    date: '2020-07-10',
    summary: 'Merceides Benz has signed a contract to develop a new audio analysis AI software using Cochl. Sense!',
    imgUrls: NEWSROOM_IMAGE_URLS['2020_07'].Benz_Partnership,
    paragraphs: [
      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. ' +
      'Etiam augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ' +
      'ut luctus justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris ' +
      'et nisl eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum. ',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non erat ' +
      'eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In vulputate, ' +
      'magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet erat.\n' +
      'Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis tellus ' +
      'posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacusNunc ' +
      'non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis.',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non ' +
      'erat eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In ' +
      'vulputate, magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet ' +
      'erat. Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis ' +
      'tellus posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacus',

      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. Etiam ' +
      'augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ut luctus ' +
      'justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris et nisl ' +
      'eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum.'
    ]
  },
  {
    subject: 'Merceides Benz partners with Cochlear.ai!',
    category: 1,
    date: '2020-07-10',
    summary: 'Merceides Benz has signed a contract to develop a new audio analysis AI software using Cochl. Sense!',
    imgUrls: NEWSROOM_IMAGE_URLS['2020_07'].Benz_Partnership,
    paragraphs: [
      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. ' +
      'Etiam augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ' +
      'ut luctus justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris ' +
      'et nisl eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum. ',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non erat ' +
      'eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In vulputate, ' +
      'magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet erat.\n' +
      'Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis tellus ' +
      'posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacusNunc ' +
      'non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis.',

      'Curabitur sit amet sem ac tellus elementum fermentum et eu turpis. Suspendisse nunc lacus, feugiat non ' +
      'erat eget, accumsan cursus lectus. Morbi in mollis ex, ac venenatis arcu. Vivamus id eros lacus. In ' +
      'vulputate, magna vel viverra ultrices, augue lectus malesuada turpis, a laoreet purus nibh sit amet ' +
      'erat. Nunc non libero nulla. Donec nec ligula lacus. Mauris venenatis interdum tortor, rhoncus facilisis ' +
      'tellus posuere sit amet. Vivamus iaculis vestibulum odio malesuada varius. Quisque euismod tellus nec lacus',

      'Ut ac venenatis odio. Donec pellentesque felis in purus consectetur, sed interdum nulla commodo. Etiam ' +
      'augue neque, tempor quis nulla eu, ultricies iaculis ligula. Morbi tincidunt scelerisque nulla, ut luctus ' +
      'justo rutrum sit amet. Nunc nec tellus rutrum orci sagittis imperdiet. Aliquam sit amet mauris et nisl ' +
      'eleifend venenatis vel dignissim orci. Duis quis nulla sit amet ante posuere bibendum.'
    ]
  },
].sort((a: NewsItemProps, b: NewsItemProps) => { // Sort latest news first
  const aDate = new Date(a.date)
  const bDate = new Date(b.date)

  return aDate === bDate ? 0 : aDate < bDate ? 1 : -1
})

export type UseCaseDataProps = {
  title: string,
  details: string,
  imageUrl: string
}

export type ServiceDataProps = {
  title: string,
  details: string,
  supportedSounds: string,
  imageUrl: string,
  useCaseData: UseCaseDataProps[]
}

export const COCHL_SENSE_DATA: ServiceDataProps[] = [
  {
    title: 'Human Interaction',
    details: 'The next-generation (Reimagine) user engagement with intuitive human sounds. From touch-free sound ' +
      'control Interface to shortening mundane tasks -- delight your customers with new interactive experience.',
    supportedSounds: 'Supported sounds: Whistle, clap, knock, finger snap, and whisper.',
    imageUrl: IMAGE_DIRECTORY_PATH.cochl_sense + '/service_HI_v2.png',
    useCaseData: [
      {
        title: 'Shortcut Command',
        details: 'Do we have to say “Alexa, play music for me” every time? Use Cochl.Sense - Human interaction for ' +
          'making your shortcut commands to control IoT devices.',
        imageUrl: IMAGE_DIRECTORY_PATH.cochl_sense + '/usecase_HI_shortcut_command_1.png'
      },
      {
        title: 'Shortcut Command',
        details: 'Set the car’s navigation using a touchscreen is dangerous while driving. Cochl.Sense - ' +
          'Human interaction allows your navigation to head home with shortcut commands like whistling.',
        imageUrl: IMAGE_DIRECTORY_PATH.cochl_sense + '/usecase_HI_shortcut_command_2.png'
      },
      {
        title: 'Video Edit',
        details: 'It is common to use slate to mark the edit point for video recording. Our technology can be used ' +
          'as various slate types to make Vlog edit easier.',
        imageUrl: IMAGE_DIRECTORY_PATH.cochl_sense + '/usecase_HI_video.png'
      },
    ]
  },
  {
    title: 'Emergency Detection',
    details: 'Automated emergency detection for your smarter security system. Bring your customers peace of ' +
      'mind with a privacy-safe monitoring that detects sounds that indicate emergency, no matter where they ' +
      'are.',
    supportedSounds: 'Supported sounds: Glass-break, screaming, fire alarm, CO alarm.',
    imageUrl: IMAGE_DIRECTORY_PATH.cochl_sense + '/service_ED_v2.png',
    useCaseData: [
      {
        title: 'Accessibility',
        details: 'Fire alarm generates loud sound to let people escape from the building, but it isn’t ' +
          'useful for hearing-impaired people. Adding a fire alarm listening ability on the smartwatch ' +
          'can help hearing-impaired people to get noticed in case of fire.',
        imageUrl: IMAGE_DIRECTORY_PATH.cochl_sense + '/usecase_ED_accessibility.png'
      },
      {
        title: 'Home Security',
        details: 'Smart speakers send a notification if someone breaks a window. Glass breaking sound is obvious, ' +
          'but how about when you are away from home? Your smart speaker can be turned into a security guard, ' +
          'sending you an alert in case of a house break-in.',
        imageUrl: IMAGE_DIRECTORY_PATH.cochl_sense + '/usecase_ED_home_security.png'
      },
      {
        title: 'Public  Safety',
        details: 'Cities are getting crowded and there is an increasing number of security cameras are installed ' +
          'to monitor crimes, but it is hard to be monitored all by humans. Also, clues of crimes like screaming ' +
          'and glass breaking can’t be detected by computer vision.',
        imageUrl: IMAGE_DIRECTORY_PATH.cochl_sense + '/usecase_ED_public_safety.png'
      },
    ]
  },
  {
    title: 'Human Status',
    details: 'A context-aware solution that can recognize human status inferred from sound, such as health ' +
      'condition or a change of mood. Build a user-friendly interface that reacts to different human feelings ' +
      'and physiological activities.',
    supportedSounds: 'Supported sounds: Laughter, sigh, yawn, cough, sneeze, snoring, burping, hiccup.',
    imageUrl: IMAGE_DIRECTORY_PATH.cochl_sense + '/service_HS_v2.png',
    useCaseData: [
      {
        title: 'Mood Tracker',
        details: 'Lots of laughter or a deep sigh contains clues about the mood. Cochl.Sense - Human status allows ' +
          'you to quantify the mood which can be used for making context-based suggestions',
        imageUrl: IMAGE_DIRECTORY_PATH.cochl_sense + '/usecase_HS_mood_tracker.png'
      },
      {
        title: 'Health monitoring',
        details: 'Cough and sneeze are a symptom of respiratory diseases like cold and influenza. Unusually ' +
          'high frequency of cough and sneeze can be used for making smart thermostat to increase the room ' +
          'temperature.',
        imageUrl: IMAGE_DIRECTORY_PATH.cochl_sense + '/usecase_HS_healthcare.png'
      },
      {
        title: 'Audio Caption',
        details: 'Speech recognition for captioning is widely used, but it is not enough for understanding ' +
          'deeper context and nuance of it. Yawn, sigh, or laughter recognition can make people understand ' +
          'the meaning of sentence much more accurate, especially useful for hearing-impaired.',
        imageUrl: IMAGE_DIRECTORY_PATH.cochl_sense + '/usecase_HS_audio.png'
      },
    ]
  },
]


export type PricingItemDataProps = {
  title: string,
  description: string,
  contactMethod: string,
  iconUrl: string,
  iconSubtitle?: string,
  buttonText: string,
  buttonLink: string,
  isExternal?: boolean,
  bulletTexts: string[],
  headerColor?: string
}

export const PRICING_ITEM_DATA: {[key: string]: PricingItemDataProps} = {
  starter: {
    title: 'Starter',
    description: 'For academic / non- commercial projects',
    contactMethod: 'Free',
    iconUrl: PRICING_IMAGE_URLS.cube,
    iconSubtitle: 'No credit card required',
    buttonText: 'get started',
    buttonLink: 'https://dashboard.cochlear.ai/sign-in',
    isExternal: true,
    bulletTexts: [
      '1 Cochl. Sense service ',
      '2 hours of inputs per month free',
      '+ additional $0.012/ minute',
      'Support via email ',
    ]
  },
  enterprise: {
    title: 'Enterprise',
    description: 'Enterpise license for commercial use',
    contactMethod: 'Contact Us',
    iconUrl: PRICING_IMAGE_URLS.cubes,
    buttonText: 'talk to an expert',
    buttonLink: '/contact-us',
    isExternal: false,
    bulletTexts: [
      'Customized service',
      'Custom pricing',
      'SDK available',
      'Dedicated email& slack support',
    ]
  }
}

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
  ],
  special: [
    {
      title: 'Machine listening, beyond speech recognition',
      description: 'The sounds other than speech has been considered as ' +
        'noise because it is too complicated to analyze. Or only a simple ' +
        'sound recognitions were available with lots of false alarms. We ' +
        'are making a sound AI system for machine listening, based on deep ' +
        'learning from scratch to mimic human’s auditory perception.'
    },
    {
      title: 'Audio in, information out - It’s as simple as that',
      description: 'All the difficult signal processing and machine ' +
        'learning techniques are hidden in our system. No experts ' +
        'required, just pour your audio into our system, it returns ' +
        'the analyzed result that is ready-to-use.'
    },
    {
      title: 'Running either on the cloud or on-premise',
      description: 'Our cloud API allows powerful sound AI ' +
        'system to be running on any environment with just a ' +
        'few lines of code. If there’s no internet or privacy is ' +
        'your main concern, you can use on-premise SDK, fully optimized ' +
        'using our latest research on downsizing techniques with a minimum ' +
        'performance drop.'
    },
    {
      title: 'No microphone dependency, not requiring high-quality audio ' +
        'either',
      description: 'It is generalized auditory intelligence, just like ' +
        'how human hears. Removing microphone dependency allows it to ' +
        'work on any products and services without extra work, also it ' +
        'is designed to be working on a noisy environment, even for the ' +
        'sound recorded from low-end microphones.'
    },
    {
      title: 'Built by one of the leading research groups in the field',
      description: 'We are a consecutive winner of IEEE DCASE ’17 ’18, ' +
        'the most prestigious competition in the sound AI, ranked first ' +
        'among 558 teams on Kaggle. Also, named as a top 4 AI startup in ' +
        'autonomous systems by NVIDIA.'
    }
  ]
}

export const TagData = {
  humanInteraction: [
    'Clap',
    'Finger_snap',
    'Knock',
    'Whisper',
    'Whistling'
  ]
}

export type EmployeeItemProps = {
  imgUrl?: string,
  index?: number,
  name: string,
  title: string,
  slogan: string,
  details: string,
  linkedIn: string,
  google?: string
}

export const ABOUT_US_EMPLOYEE_DATA: EmployeeItemProps[] = [
  {
    imgUrl: IMAGE_DIRECTORY_PATH.about_us + '/about_us_subin_cut.png',
    name: 'Subin Lee',
    title: 'Co-founder & COO',
    slogan: 'Samsara and Baraka.',
    details: 'Subin is a co-founder and COO at Cochlear.ai. He obtained ' +
      'B.S in Electrical Engineering and B.B.A from Sogang University. ' +
      'With his passion for audio engineering, he joined Music and Audio ' +
      'Research Group, Seoul National University in 2013 and is currently ' +
      'pursuing PhD degree. His interests are focused on discovering ' +
      'emotional and disease (major depressive disorder, schizophrenia) ' +
      'from the human voice and building a perfect cloud-based AI platform ' +
      'one day. He loves Arsenal, Mets, Jets, FC Seoul and Williams F1 racing.',
    linkedIn: 'https://www.linkedin.com/in/subin-lee-b0182a62/',
    google: 'https://scholar.google.com/citations?user=wpno6c4AAAAJ&hl=en'
  },
  {
    imgUrl: IMAGE_DIRECTORY_PATH.about_us + '/about_us_yoonchang_cut.png',
    name: 'Dr. Yoonchang Han',
    title: 'Co-founder & CEO',
    slogan: 'There is no such thing as a dream too big',
    details: 'Yoonchang is responsible for the management and research ' +
      'direction of Cochlear.ai. He studied Electronic Engineering at ' +
      'King’s College London and Digital Audio and Music System ' +
      'Engineering at Queen Mary, University of London. Following ' +
      'graduation from QMUL with MEng First-class honours degree in ' +
      '2011, he joined Music and Audio Research Group, Seoul National ' +
      'University. He obtained PhD degree with best PhD thesis award ' +
      'in 2017, then founded Cochlear.ai with his colleagues.',
    linkedIn: 'https://www.linkedin.com/in/yoonchanghan/',
    google: 'https://scholar.google.com/citations?user=Ay1HDlYAAAAJ&hl=en'
  },
  {
    imgUrl: IMAGE_DIRECTORY_PATH.about_us + '/about_us_jungsoo_cut.png',
    name: 'Dr. Jeongsoo Park',
    title: 'Co-founder & Research Scientist',
    slogan: 'Supercalifragilisticexpialidocious nerd',
    details: 'Jeongsoo is a co-founder and research scientist at ' +
      'Cochlear.ai. He obtained his B.S. and M.S. degree in Electrical ' +
      'Engineering from Seoul National University in 2010 and 2012, ' +
      'respectively. Fascinated by the possibility of audio engineering, ' +
      'he joined Music and Audio Research Group, Seoul National ' +
      'University in 2012 and received PhD degree in 2018. His main ' +
      'research interest is audio-related machine learning approaches; ' +
      'but he is also attracted to their go-to-market strategy.',
    linkedIn: 'https://www.linkedin.com/in/jeongsoo-park-a9b488119/',
    google: 'https://scholar.google.co.kr/citations?user=Vmmga4sAAAAJ&hl=ko'
  },
  {
    imgUrl: IMAGE_DIRECTORY_PATH.about_us + '/about_us_hyungi_cut.png',
    name: 'Hyungui Lim',
    title: 'Co-founder & Research Scientist',
    slogan: 'Because I\'m happy!',
    details: 'Hyungui Lim is a co-founder and research scientist at ' +
      'Cochlear.ai. He received his B.S. in Electronic Engineering from ' +
      'Konkuk University(2014) and M.S. in Music and Audio Research Group, ' +
      'Seoul National University(2017). He was a bandleader and music ' +
      'producer who produced several albums. His passion for audio and ' +
      'music led him to co-found Cochlear.ai. He is passionate about ' +
      'managing the entire research engineering process, including data ' +
      'collection/analysis and model creation/deployment.',
    linkedIn: 'https://www.linkedin.com/in/hyun-gui-lim-072497125/',
    google: 'https://scholar.google.co.kr/citations?user=nW_ovQkAAAAJ&hl=ko'
  },
  {
    imgUrl: IMAGE_DIRECTORY_PATH.about_us + '/about_us_ilyoung_cut.png',
    name: 'Dr. Il-young Jeong',
    title: 'Co-founder & Research Scientist',
    slogan: 'Understanding and expanding the limit',
    details: 'Il-Young is a co-founder and research scientist at ' +
      'Cochlear.ai. During his B.S and M.S degree at Sogang University, ' +
      'he studied various speech signal processing techniques. After ' +
      'joining the Music and Audio Research Group, Seoul National ' +
      'University for his Ph.D., he sought to expand his research area ' +
      'into general audio signals such as music and environmental sounds, ' +
      'even machine learning techniques. He also loves to play board games, ' +
      'travel on a shoestring, and drink beer.',
    linkedIn: 'https://www.linkedin.com/in/il-young-jeong-88731299/',
    google: 'https://scholar.google.co.kr/citations?user=XRYPc5YAAAAJ&hl=en'
  },
  {
    imgUrl: IMAGE_DIRECTORY_PATH.about_us + '/about_us_donmoon_cut.png',
    name: 'Donmoon Lee',
    title: 'Co-founder & Research Scientist',
    slogan: 'No Regrets',
    details: 'Donmoon is a co-founder and research scientist at ' +
      'Cochlear.ai. He obtained a B.E. degree in Bio-System Engineering ' +
      'in 2014 from Seoul National University. With his interest in music ' +
      'and audio engineering, he obtained an M.E. degree in 2016 at Music ' +
      'and Audio Research Group (MARG), Seoul National University. Now, ' +
      'he is a Ph.D. candidate in MARG. He is into machine learning ' +
      'techniques for imperfect learning environments such as weak ' +
      'supervised, semi-supervised, or self-supervised learning. And he ' +
      'believes that advanced technology can solve many real-world problems.',
    linkedIn: 'https://www.linkedin.com/in/donmoon-lee-391973140/',
    google: 'https://scholar.google.com/citations?user=X4khbEMAAAAJ&hl=ko'
  },
  {
    imgUrl: IMAGE_DIRECTORY_PATH.about_us + '/about_us_ben_cut.png',
    name: 'Benjamin Chabanne',
    title: 'Developer',
    slogan: 'No half measures',
    details: 'Benjamin Chabanne is a developer at Cochlear.ai. He graduated ' +
      'from École Nationale Supérieure de Techniques Avancées (ENSTA Paris) ' +
      'in 2019 with a M.S in cyber-physical systems design. Just after ' +
      'finishing his sutdies, he came to live and work in Seoul. Passionate ' +
      'about programming, clean code, open source, he arrived in the early ' +
      'stage of C ochlear.ai where he could invest time in ' +
      'various part of the internal software system. He is now mainly ' +
      'focusing on creating a stable and scalable platform.',
    linkedIn: 'https://www.linkedin.com/in/benjamin-chabanne/',
  },
  {
    imgUrl: IMAGE_DIRECTORY_PATH.about_us + '/about_us_hyojeong_cut.png',
    name: 'Hyojeong Kim',
    title: 'UX Designer',
    slogan: 'What is not started today is never finished tomorrow',
    details: 'Hyojeong is a Product Designer at  Cochlear.ai. She received ' +
      'a Bachelor in Fine Art and obtained a teacher’s certificate from ' +
      'Hansung University in 2014. She graduated as a UX Design(M.P.S) ' +
      'and Interactive Art at Maryland Institute College of Art in ' +
      'Baltimore where she has acquired a well-rounded skill set and ' +
      'experience working with a wide range of multimedia, web, and ' +
      'wireframe software. As a designer with a Fine Art background, she ' +
      'is constantly discovering new worlds and styles to contribute to ' +
      'her’s passion at the intersection of art, technology, and business.',
    linkedIn: 'https://www.linkedin.com/in/hyojeong-kim-6478b5132/'
  },
  {
    imgUrl: IMAGE_DIRECTORY_PATH.about_us + '/about_us_yunji_cut.png',
    name: 'Yunji Chung',
    title: 'UX Designer',
    slogan: 'Turn one day into day one.',
    details: 'Yun Ji is a UX designer at Cochlear.ai. She graduated from ' +
      'Emory University with a Bachelor in Business Administration in ' +
      '2020 and will be entering Carnegie Mellon University to receive ' +
      'her Masters in Human-Computer Interaction in 2021. She has ' +
      'previously designed and conducted research at The Coca-Cola ' +
      'Company, Mailchimp, and Orderspot. As a designer with a business ' +
      'background, she is passionate about utilizing design thinking ' +
      'coupled with strategic thinking to innovatively solve problems.',
    linkedIn: 'https://www.linkedin.com/in/yunjichung/'
  },
  {
    imgUrl: IMAGE_DIRECTORY_PATH.about_us + '/about_us_suyoung_cut.png',
    name: 'Suyoung Lee',
    title: 'Business Development Manager',
    slogan: 'Don\'t find fault. Find a remedy.',
    details: 'Suyoung is a Business Development Manager at Cochlear.ai. ' +
      'She graduated from Hanyang University with dual degrees in English ' +
      'and Information Systems. Before joining the team, she gained ' +
      'extensive experience in corporate analysis and customer management ' +
      'through her internships at Reuters, Bloomberg, followed by VMware ' +
      'where she worked as full-time as a Technical Account Manager. As a ' +
      'Business Development Manager, she strives to reimagine industries ' +
      'and develop strategies for business success.',
    linkedIn: 'https://www.linkedin.com/in/suyoung-lee-747102101/'
  },
  {
    name: 'Nayeon Kim',
    title: 'Business Analyst',
    slogan: 'Always be prepared to give the reason for the hope that you have',
    details: 'Nayeon is a business analyst at Cochlear.ai. She holds B.S. ' +
      'and M.S. in electrical engineering from Columbia University. ' +
      'Before joining Cochlear.ai, Nanni worked as a management consultant ' +
      'in New York City, where she gained broad experience solving ' +
      'complex strategic issues, developing strategic investment business ' +
      'cases, and improving business processes for clients in various ' +
      'industries. She is currently pursuing both JD and MBA at Penn Law ' +
      'and The Wharton School to develop well-rounded business acumen with ' +
      'expertise in technology, law, and finance.',
    linkedIn: 'https://www.linkedin.com/in/nannikim/'
  },
  {
    name: 'Interested in joining the team?',
    title: 'Explore Be part of our story',
    slogan: '',
    details: '',
    linkedIn: '',
  },
]

export type TimeLineDataProps = {
  month: string,
  title: string,
  isLeft: boolean,
}

export const ABOUT_US_TIMELINE_DATA: TimeLineDataProps[] = [
  {
    month: '2020. 08',
    title: 'Sense API - Human Status ',
    isLeft: true
  },
  {
    month: '2020. 06',
    title: 'Series A funding',
    isLeft: false
  },
  {
    month: '2020. 05',
    title: 'Beta 2-19.6, V1 release',
    isLeft: true
  },
  {
    month: '2020. 04',
    title: 'Sense API - Human Interaction',
    isLeft: false
  },
  {
    month: '2019. 07',
    title: 'Sense API - Emergency detection',
    isLeft: true
  },
  {
    month: '2018. 11',
    title: 'Alpha 18.04, Beta1',
    isLeft: false
  },
  {
    month: '2018. 08',
    title: 'Seed funding',
    isLeft: true
  },
  {
    month: '2017. 07',
    title: 'Foundation',
    isLeft: false
  },
]

export type AboutUsHistoryDataProps = {
  title: string,
  subtitle: string,
  year: number
}

export const ABOUT_US_HISTORY_DATA: {[key: string]: AboutUsHistoryDataProps[]} = {
  awards: [
    {
      title: 'GITEX Future Stars',
      subtitle: 'Supernova Challenge 결승',
      year: 2019
    },
    {
      title: 'IEEE Detection and Classification of Acoustic Scene',
      subtitle: 'Task2 (General purpose audio tagging, 1st)',
      year: 2018
    },
    {
      title: 'South by Southwest (SXSW) 2018 Showcase',
      subtitle: 'SM엔터테인먼트, 한국콘텐츠진흥원',
      year: 2018
    },
    {
      title: 'NVIDIA Inception Award',
      subtitle: '자동화시스템 분야 Top 4 AI 스타트업',
      year: 2018
    },
    {
      title: 'IEEE Detection and Classification of Acoustic Scene',
      subtitle: 'Task1 (Acoustic scene classification, 2nd)',
      year: 2017
    },
  ],
  talks: [
    {
      title: 'NVIDIA GPU Technology Conference',
      subtitle: 'San Jose, CA',
      year: 2019
    },
    {
      title: 'South by Southwest (SXSW) 2019 Talk-session',
      subtitle: 'Austin, TX',
      year: 2018
    },
    {
      title: 'Slush 100, Slush',
      subtitle: 'Helsinki, Finland',
      year: 2018
    },
    {
      title: 'JCDecaux Pitch Contest, Viva Technology',
      subtitle: 'Paris, France',
      year: 2018
    },
    {
      title: 'NVIDIA GPU Technology Conference',
      subtitle: 'San Jose, CA',
      year: 2018
    },
  ]
}

export type MainIndustryDataProps = {
  tabName: string,
  title: string,
  details: string,
}

export const MAIN_INDUSTRY_DATA: MainIndustryDataProps[] = [
  {
    tabName: 'Media',
    title: 'Automatic media analysis',
    details: 'There are tons of video and music which are difficult to ' +
      'manually handle. From video captioning to music analysis, machine ' +
      'listening technology makes things automatic and more accessible.',
  },
  {
    tabName: 'Heavy industry',
    title: 'Monitoring conditions of machines',
    details: 'Operating sound of the machine contains an important clue ' +
      'about the malfunction. Applying our machine listening technology ' +
      'on your machine sound can identify also prevent it.',
  },
  {
    tabName: 'Smart home',
    title: 'Intelligent home automation',
    details: 'From doorbell to smart speaker, there are increasing numbers ' +
      'of IoT devices at home. Our platform can be used for context-aware ' +
      'for controlling IoT devices automatically.',
  },
  {
    tabName: 'Automotive',
    title: 'Cars with listening ability',
    details: 'Sound is only used for a phone call in a car, also only ' +
      'Lidar, Radar, and Camera are heavily used for autonomous cars. ' +
      'Machine listening can be applied for monitoring both inside ' +
      'and outside of the car to provide appropriate services to ' +
      'passengers and drivers.',
  },
  {
    tabName: 'Healthcare',
    title: 'Extract clues of illness from the sound',
    details: 'Sound contains many clues about the condition of human. ' +
      'Our machine listening platform can be used for automated monitoring ' +
      'of the health condition of people.',
  },
]
