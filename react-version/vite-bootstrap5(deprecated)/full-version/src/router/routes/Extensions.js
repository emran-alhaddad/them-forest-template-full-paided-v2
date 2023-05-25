import { lazy } from 'react'

const Tour = lazy(() => import('../../views/extensions/tour'))
const Swiper = lazy(() => import('../../views/extensions/swiper'))
const Ratings = lazy(() => import('../../views/extensions/ratings'))
const Sliders = lazy(() => import('../../views/extensions/sliders'))
const I18nComponent = lazy(() => import('../../views/extensions/i18n'))
const Pagination = lazy(() => import('../../views/extensions/pagination'))
const SweetAlert = lazy(() => import('../../views/extensions/sweet-alert'))
const DragAndDrop = lazy(() => import('../../views/extensions/drag-and-drop'))
const AccessControl = lazy(() => import('../../views/extensions/access-control'))
const ReactHotToast = lazy(() => import('../../views/extensions/react-hot-toasts'))
const CopyToClipboard = lazy(() => import('../../views/extensions/copy-to-clipboard'))
const ImportComponent = lazy(() => import('../../views/extensions/import-export/Import'))
const ExportComponent = lazy(() => import('../../views/extensions/import-export/Export'))
const ExportSelected = lazy(() => import('../../views/extensions/import-export/ExportSelected'))

const ExtensionsRoutes = [
  {
    element: <SweetAlert />,
    path: '/extensions/sweet-alert'
  },
  {
    element: <ReactHotToast />,
    path: '/extensions/react-hot-toasts'
  },
  {
    element: <Sliders />,
    path: '/extensions/slider'
  },
  {
    element: <DragAndDrop />,
    path: '/extensions/drag-and-drop'
  },
  {
    element: <Tour />,
    path: '/extensions/tour'
  },
  {
    element: <CopyToClipboard />,
    path: '/extensions/clipboard'
  },
  {
    element: <Swiper />,
    path: '/extensions/swiper'
  },
  {
    path: '/access-control',
    element: <AccessControl />,
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  },
  {
    element: <Ratings />,
    path: '/extensions/ratings'
  },
  {
    element: <Pagination />,
    path: '/extensions/pagination'
  },
  {
    element: <ImportComponent />,
    path: '/extensions/import'
  },
  {
    element: <ExportComponent />,
    path: '/extensions/export'
  },
  {
    element: <ExportSelected />,
    path: '/extensions/export-selected'
  },
  {
    element: <I18nComponent />,
    path: '/extensions/i18n'
  }
]

export default ExtensionsRoutes
