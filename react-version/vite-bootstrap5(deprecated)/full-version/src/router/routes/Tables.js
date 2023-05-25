import { lazy } from 'react'

const Reactstrap = lazy(() => import('../../views/tables/reactstrap'))
const DTBasic = lazy(() => import('../../views/tables/data-tables/basic'))
const DTAdvance = lazy(() => import('../../views/tables/data-tables/advance'))

const TablesRoutes = [
  {
    path: '/tables/reactstrap',
    element: <Reactstrap />
  },
  {
    path: '/datatables/basic',
    element: <DTBasic />
  },
  {
    path: '/datatables/advance',
    element: <DTAdvance />
  }
]

export default TablesRoutes
