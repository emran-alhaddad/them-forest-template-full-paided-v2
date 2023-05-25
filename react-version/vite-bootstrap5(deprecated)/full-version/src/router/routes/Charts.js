import { lazy } from 'react'

const ApexCharts = lazy(() => import('../../views/charts/apex'))
const ChartJS = lazy(() => import('../../views/charts/chart-js'))
const Recharts = lazy(() => import('../../views/charts/recharts'))

const ChartMapsRoutes = [
  {
    path: '/charts/apex',
    element: <ApexCharts />
  },
  {
    path: '/charts/chartjs',
    element: <ChartJS />
  },
  {
    path: '/charts/recharts',
    element: <Recharts />
  }
]

export default ChartMapsRoutes
