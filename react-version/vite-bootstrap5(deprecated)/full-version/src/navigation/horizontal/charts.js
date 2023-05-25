// ** Icons Import
import { BarChart2, Circle } from 'react-feather'

export default [
  {
    id: 'chartsGroup',
    title: 'Charts',
    icon: <BarChart2 />,
    children: [
      {
        id: 'apex',
        title: 'Apex',
        icon: <Circle />,
        navLink: '/charts/apex'
      },
      {
        id: 'chartJs',
        title: 'ChartJS',
        icon: <Circle />,
        navLink: '/charts/chartjs'
      },
      {
        id: 'recharts',
        title: 'Recharts',
        icon: <Circle />,
        navLink: '/charts/recharts'
      }
    ]
  }
]
