export default [
  {
    title: 'User Interface',
    icon: { icon: 'tabler-color-swatch' },
    children: [
      {
        title: 'Icons',
        icon: { icon: 'tabler-brand-tabler' },
        to: 'pages-icons',
      },
      {
        title: 'Typography',
        icon: { icon: 'tabler-square-letter-t' },
        to: 'pages-typography',
      },
      {
        title: 'Cards',
        icon: { icon: 'tabler-id' },
        children: [
          { title: 'Basic', to: 'pages-cards-card-basic' },
          { title: 'Advance', to: 'pages-cards-card-advance' },
          { title: 'Statistics', to: 'pages-cards-card-statistics' },
          { title: 'Widgets', to: 'pages-cards-card-widgets' },
          { title: 'Actions', to: 'pages-cards-card-actions' },
        ],
      },
      {
        title: 'Components',
        icon: { icon: 'tabler-toggle-left' },
        children: [
          { title: 'Alert', to: 'components-alert' },
          { title: 'Avatar', to: 'components-avatar' },
          { title: 'Badge', to: 'components-badge' },
          { title: 'Button', to: 'components-button' },
          { title: 'Chip', to: 'components-chip' },
          { title: 'Dialog', to: 'components-dialog' },
          { title: 'Expansion Panel', to: 'components-expansion-panel' },
          { title: 'List', to: 'components-list' },
          { title: 'Menu', to: 'components-menu' },
          { title: 'Pagination', to: 'components-pagination' },
          { title: 'Progress Circular', to: 'components-progress-circular' },
          { title: 'Progress Linear', to: 'components-progress-linear' },
          { title: 'Snackbar', to: 'components-snackbar' },
          { title: 'Tabs', to: 'components-tabs' },
          { title: 'Timeline', to: 'components-timeline' },
          { title: 'Tooltip', to: 'components-tooltip' },
        ],
      },
    ],
  },
]
