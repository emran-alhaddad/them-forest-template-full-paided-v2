import mock from '@/@fake-db/mock'
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import figmaLabel from '@images/icons/brands/figma-label.png'
import htmlLabel from '@images/icons/brands/html-label.png'
import reactLabel from '@images/icons/brands/react-label.png'
import sketchLabel from '@images/icons/brands/sketch-label.png'
import socialLabel from '@images/icons/brands/social-label.png'
import vueLabel from '@images/icons/brands/vue-label.png'
import xdLabel from '@images/icons/brands/xd-label.png'

const database = [
  {
    logo: '',
    name: 'Website SEO',
    date: '10 May 2021',
    leader: 'Eileen',
    team: [avatar5, avatar2, avatar3, avatar4],
    status: 38,
  },
  {
    logo: socialLabel,
    name: 'Social Banners',
    date: '03 Jan 2021',
    leader: 'Owen',
    team: [avatar1, avatar2],
    status: 45,
  },
  {
    logo: sketchLabel,
    name: 'Logo Designs',
    date: '12 Aug 2021',
    leader: 'Keith',
    team: [avatar4, avatar2, avatar5, avatar3],
    status: 92,
  },
  {
    logo: sketchLabel,
    name: 'IOS App Design',
    date: '19 Apr 2021',
    leader: 'Merlin',
    team: [avatar1, avatar5, avatar3, avatar2],
    status: 56,
  },
  {
    logo: figmaLabel,
    name: 'Figma Dashboards',
    date: '08 Apr 2021',
    leader: 'Harmonica',
    team: [avatar5, avatar4, avatar1],
    status: 25,
  },
  {
    logo: htmlLabel,
    name: 'Crypto Admin',
    date: '29 Sept 2021',
    leader: 'Allyson',
    team: [avatar3, avatar2, avatar4, avatar5],
    status: 36,
  },
  {
    logo: reactLabel,
    name: 'Create Website',
    date: '20 Mar 2021',
    leader: 'Georgia',
    team: [avatar3, avatar3, avatar2, avatar5],
    status: 72,
  },
  {
    logo: xdLabel,
    name: 'App Design',
    date: '09 Feb 2021',
    leader: 'Fred',
    team: [avatar3, avatar4, avatar5],
    status: 89,
  },
  {
    logo: xdLabel,
    name: 'Angular APIs',
    date: '17 June 2021',
    leader: 'Richard',
    team: [avatar1, avatar3, avatar4, avatar2],
    status: 77,
  },
  {
    logo: vueLabel,
    name: 'Admin Template',
    date: '06 Oct 2021',
    leader: 'Geneva',
    team: [avatar1, avatar2, avatar3, avatar5],
    status: 100,
  },
]

mock.onGet('/dashboard/analytics/projects').reply(() => [200, database])
