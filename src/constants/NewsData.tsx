export const PRESS_CATEGORIES = ['All', 'Partnerships', 'Events']

export type PressItemProps = {
  url: string,
  category: number
}

export const NEWS_CATEGORIES = ['All','Announcements']

export type NewsItemProps = {
  subject: string,
  category: number,
  date: string,
  summary?: string,
  imgUrls: any,
  paragraphs: string[]
}

export const NEWS_ITEMS: NewsItemProps[] = [
  {
    subject: 'Merceides Benz partners with Cochl.!',
    category: 1,
    date: '2020-07-10',
    summary: 'Merceides Benz has signed a contract to develop a new audio analysis AI software using Cochl. Sense!',
    imgUrls: '',
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
    imgUrls: "NEWSROOM_IMAGE_URLS['2020_08'].Human_Status_Release",
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
    summary: 'With video cameras that act as eyes and microphones as ears, security robots have emerged as an effective solution for automating security operations....',
    imgUrls: "NEWSROOM_IMAGE_URLS['2020_08'].Series_A_Funding",
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
].sort((a: NewsItemProps, b: NewsItemProps) => { 
  const aDate = new Date(a.date)
  const bDate = new Date(b.date)

  return aDate === bDate ? 0 : aDate < bDate ? 1 : -1
})



