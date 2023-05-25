import { lazy } from 'react'

const Typography = lazy(() => import('../../views/ui-elements/typography'))
const Icons = lazy(() => import('../../views/ui-elements/icons'))
const CardsBasic = lazy(() => import('../../views/ui-elements/cards/basic'))
const CardsAdvance = lazy(() => import('../../views/ui-elements/cards/advance'))
const CardsStatistics = lazy(() => import('../../views/ui-elements/cards/statistics'))
const CardsAnalytics = lazy(() => import('../../views/ui-elements/cards/analytics'))
const CardsActions = lazy(() => import('../../views/ui-elements/cards/actions'))
const Accordion = lazy(() => import('../../views/components/accordion'))
const Alerts = lazy(() => import('../../views/components/alerts'))
const Autocomplete = lazy(() => import('../../views/components/autocomplete'))
const Avatar = lazy(() => import('../../views/components/avatar'))
const Badge = lazy(() => import('../../views/components/badge'))
const BlockUI = lazy(() => import('../../views/components/block-ui'))
const Breadcrumbs = lazy(() => import('../../views/components/breadcrumbs'))
const Buttons = lazy(() => import('../../views/components/buttons'))
const Carousel = lazy(() => import('../../views/components/carousel'))
const Collapse = lazy(() => import('../../views/components/collapse'))
const Divider = lazy(() => import('../../views/components/divider'))
const Dropdown = lazy(() => import('../../views/components/dropdowns'))
const ListGroup = lazy(() => import('../../views/components/listGroup'))
const Modal = lazy(() => import('../../views/components/modal'))
const NavComponent = lazy(() => import('../../views/components/navComponent'))
const Offcanvas = lazy(() => import('../../views/components/offcanvas'))
const Pagination = lazy(() => import('../../views/components/pagination'))
const BadgePills = lazy(() => import('../../views/components/badgePills'))
const TabPills = lazy(() => import('../../views/components/tabPills'))
const Popovers = lazy(() => import('../../views/components/popovers'))
const Progress = lazy(() => import('../../views/components/progress'))
const Spinners = lazy(() => import('../../views/components/spinners'))
const Tabs = lazy(() => import('../../views/components/tabs'))
const Timeline = lazy(() => import('../../views/components/timeline'))
const Toasts = lazy(() => import('../../views/components/toasts'))
const Tooltips = lazy(() => import('../../views/components/tooltips'))

const UiElementRoutes = [
  {
    element: <Typography />,
    path: '/ui-element/typography'
  },
  {
    element: <Icons />,
    path: '/icons/reactfeather'
  },
  {
    path: '/cards/basic',
    element: <CardsBasic />
  },
  {
    path: '/cards/advance',
    element: <CardsAdvance />
  },
  {
    path: '/cards/statistics',
    element: <CardsStatistics />
  },
  {
    path: '/cards/analytics',
    element: <CardsAnalytics />
  },
  {
    path: '/cards/action',
    element: <CardsActions />
  },
  {
    element: <Accordion />,
    path: '/components/accordion'
  },
  {
    element: <Alerts />,
    path: '/components/alerts'
  },
  {
    element: <Autocomplete />,
    path: '/components/auto-complete'
  },
  {
    element: <Avatar />,
    path: '/components/avatar'
  },
  {
    element: <Badge />,
    path: '/components/badges'
  },
  {
    element: <BlockUI />,
    path: '/components/blockui'
  },
  {
    element: <Breadcrumbs />,
    path: '/components/breadcrumbs'
  },
  {
    element: <Buttons />,
    path: '/components/buttons'
  },
  {
    element: <Carousel />,
    path: '/components/carousel'
  },
  {
    element: <Collapse />,
    path: '/components/collapse'
  },
  {
    element: <Divider />,
    path: '/components/divider'
  },
  {
    element: <Dropdown />,
    path: '/components/dropdowns'
  },
  {
    element: <ListGroup />,
    path: '/components/list-group'
  },
  {
    element: <Modal />,
    path: '/components/modals'
  },
  {
    element: <NavComponent />,
    path: '/components/nav-component'
  },
  {
    element: <Offcanvas />,
    path: '/components/offcanvas'
  },
  {
    element: <Pagination />,
    path: '/components/pagination'
  },
  {
    element: <BadgePills />,
    path: '/components/pill-badges'
  },
  {
    element: <TabPills />,
    path: '/components/pills-component'
  },
  {
    element: <Popovers />,
    path: '/components/popovers'
  },
  {
    element: <Progress />,
    path: '/components/progress'
  },
  {
    element: <Spinners />,
    path: '/components/spinners'
  },
  {
    element: <Tabs />,
    path: '/components/tabs-component'
  },
  {
    element: <Timeline />,
    path: '/components/timeline'
  },
  {
    element: <Toasts />,
    path: '/components/toasts'
  },
  {
    element: <Tooltips />,
    path: '/components/tooltips'
  }
]

export default UiElementRoutes
