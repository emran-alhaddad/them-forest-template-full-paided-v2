// ** Mock Adapter
import mock from '@/@fake-db/mock'

const database = [
  {
    id: 1,
    url: { name: 'dashboards-analytics' },
    icon: 'tabler-timeline',
    title: 'Analytics Dashboard',
    category: 'dashboards',
  },
  {
    id: 2,
    url: { name: 'dashboards-ecommerce' },
    icon: 'tabler-shopping-cart',
    title: 'eCommerce Dashboard',
    category: 'dashboards',
  },
  {
    id: 3,
    url: { name: 'dashboards-crm' },
    icon: 'tabler-shopping-cart',
    title: 'CRM Dashboard',
    category: 'dashboards',
  },
  {
    id: 4,
    url: { name: 'apps-email' },
    icon: 'tabler-mail',
    title: 'Email',
    category: 'appsPages',
  },
  {
    id: 5,
    url: { name: 'apps-chat' },
    icon: 'tabler-message',
    title: 'Chat',
    category: 'appsPages',
  },
  {
    id: 6,
    url: { name: 'apps-calendar' },
    icon: 'tabler-calendar',
    title: 'Calendar',
    category: 'appsPages',
  },
  {
    id: 7,
    url: { name: 'apps-invoice-list' },
    icon: 'tabler-list',
    title: 'Invoice List',
    category: 'appsPages',
  },
  {
    id: 8,
    url: { name: 'apps-invoice-preview-id', params: { id: '5036' } },
    icon: 'tabler-file-description',
    title: 'Invoice Preview',
    category: 'appsPages',
  },
  {
    id: 9,
    url: { name: 'apps-invoice-edit-id', params: { id: '5036' } },
    icon: 'tabler-file-pencil',
    title: 'Invoice Edit',
    category: 'appsPages',
  },
  {
    id: 11,
    url: { name: 'apps-invoice-add' },
    icon: 'tabler-file-plus',
    title: 'Invoice Add',
    category: 'appsPages',
  },
  {
    id: 12,
    url: { name: 'apps-user-list' },
    icon: 'tabler-user',
    title: 'User List',
    category: 'appsPages',
  },
  {
    id: 13,
    url: { name: 'apps-user-view-id', params: { id: 21 } },
    icon: 'tabler-eye',
    title: 'User View',
    category: 'appsPages',
  },
  {
    id: 15,
    url: { name: 'pages-help-center' },
    icon: 'tabler-help',
    title: 'Help Center',
    category: 'appsPages',
  },
  {
    id: 16,
    url: { name: 'pages-user-profile-tab', params: { tab: 'profile' } },
    icon: 'tabler-user',
    title: 'User Profile - Profile',
    category: 'appsPages',
  },
  {
    id: 17,
    url: { name: 'pages-account-settings-tab', params: { tab: 'account' } },
    icon: 'tabler-user',
    title: 'Account Settings - Account',
    category: 'appsPages',
  },
  {
    id: 18,
    url: { name: 'pages-account-settings-tab', params: { tab: 'security' } },
    icon: 'tabler-lock-open',
    title: 'Account Settings - Security',
    category: 'appsPages',
  },
  {
    id: 19,
    url: { name: 'pages-account-settings-tab', params: { tab: 'billing-plans' } },
    icon: 'tabler-currency-dollar',
    title: 'Account Settings - Billing',
    category: 'appsPages',
  },
  {
    id: 20,
    url: { name: 'pages-account-settings-tab', params: { tab: 'notification' } },
    icon: 'tabler-bell',
    title: 'Account Settings - Notifications',
    category: 'appsPages',
  },
  {
    id: 21,
    url: { name: 'pages-account-settings-tab', params: { tab: 'connection' } },
    icon: 'tabler-link',
    title: 'Account Settings - Connections',
    category: 'appsPages',
  },
  {
    id: 22,
    url: { name: 'pages-pricing' },
    icon: 'tabler-currency-dollar',
    title: 'Pricing',
    category: 'appsPages',
  },
  {
    id: 23,
    url: { name: 'pages-faq' },
    icon: 'tabler-help',
    title: 'FAQ',
    category: 'appsPages',
  },
  {
    id: 24,
    url: { name: 'pages-misc-coming-soon' },
    icon: 'tabler-clock',
    title: 'Coming Soon',
    category: 'appsPages',
  },
  {
    id: 25,
    url: { name: 'pages-misc-under-maintenance' },
    icon: 'tabler-settings',
    title: 'Under Maintenance',
    category: 'appsPages',
  },
  {
    id: 26,
    url: { name: 'pages-misc-not-found' },
    icon: 'tabler-alert-circle',
    title: 'Page Not Found - 404',
    category: 'appsPages',
  },
  {
    id: 27,
    url: { name: 'pages-misc-not-authorized' },
    icon: 'tabler-users',
    title: 'Not Authorized - 401',
    category: 'appsPages',
  },
  {
    id: 28,
    url: { name: 'pages-misc-internal-server-error' },
    icon: 'tabler-list',
    title: 'Server Error - 500',
    category: 'appsPages',
  },
  {
    id: 29,
    url: { name: 'pages-authentication-login-v1' },
    icon: 'tabler-login',
    title: 'Login V1',
    category: 'appsPages',
  },
  {
    id: 30,
    url: { name: 'pages-authentication-login-v2' },
    icon: 'tabler-login',
    title: 'Login V2',
    category: 'appsPages',
  },
  {
    id: 31,
    url: { name: 'pages-authentication-register-v1' },
    icon: 'tabler-user-plus',
    title: 'Register V1',
    category: 'appsPages',
  },
  {
    id: 32,
    url: { name: 'pages-authentication-register-v2' },
    icon: 'tabler-user-plus',
    title: 'Register V2',
    category: 'appsPages',
  },
  {
    id: 42,
    icon: 'tabler-mail',
    category: 'appsPages',
    title: 'Verify Email V1',
    url: { name: 'pages-authentication-verify-email-v1' },
  },
  {
    id: 43,
    icon: 'tabler-mail',
    category: 'appsPages',
    title: 'Verify Email V2',
    url: { name: 'pages-authentication-verify-email-v2' },
  },
  {
    id: 35,
    url: { name: 'pages-authentication-forgot-password-v1' },
    icon: 'tabler-lock',
    title: 'Forgot Password V1',
    category: 'appsPages',
  },
  {
    id: 36,
    url: { name: 'pages-authentication-forgot-password-v2' },
    icon: 'tabler-lock',
    title: 'Forgot Password V2',
    category: 'appsPages',
  },
  {
    id: 37,
    url: { name: 'pages-authentication-reset-password-v1' },
    icon: 'tabler-lock',
    title: 'Reset Password V1',
    category: 'appsPages',
  },
  {
    id: 38,
    url: { name: 'pages-authentication-reset-password-v2' },
    icon: 'tabler-lock',
    title: 'Reset Password V2',
    category: 'appsPages',
  },
  {
    id: 48,
    icon: 'tabler-devices',
    category: 'appsPages',
    title: 'Two Steps V1',
    url: { name: 'pages-authentication-two-steps-v1' },
  },
  {
    id: 49,
    icon: 'tabler-devices',
    category: 'appsPages',
    title: 'Two Steps V2',
    url: { name: 'pages-authentication-two-steps-v2' },
  },
  {
    id: 41,
    url: { name: 'pages-typography' },
    icon: 'tabler-baseline',
    title: 'Typography',
    category: 'userInterface',
  },
  {
    id: 42,
    url: { name: 'pages-icons' },
    icon: 'tabler-brand-google',
    title: 'Icons',
    category: 'userInterface',
  },
  {
    id: 43,
    url: { name: 'pages-cards-card-basic' },
    icon: 'tabler-cards',
    title: 'Card Basic',
    category: 'userInterface',
  },
  {
    id: 56,
    url: { name: 'pages-cards-card-advance' },
    icon: 'tabler-cards',
    title: 'Card Advance',
    category: 'userInterface',
  },
  {
    id: 58,
    url: { name: 'pages-cards-card-statistics' },
    icon: 'tabler-chart-bar',
    title: 'Card Statistics',
    category: 'userInterface',
  },
  {
    id: 59,
    url: { name: 'pages-cards-card-widgets' },
    icon: 'tabler-id',
    title: 'Card Widgets',
    category: 'userInterface',
  },
  {
    id: 46,
    url: { name: 'pages-cards-card-actions' },
    icon: 'tabler-square-plus',
    title: 'Card Actions',
    category: 'userInterface',
  },
  {
    id: 47,
    url: { name: 'components-alert' },
    icon: 'tabler-alert-triangle',
    title: 'Alerts',
    category: 'userInterface',
  },
  {
    id: 48,
    url: { name: 'components-avatar' },
    icon: 'tabler-user-circle',
    title: 'Avatars',
    category: 'userInterface',
  },
  {
    id: 49,
    url: { name: 'components-badge' },
    icon: 'tabler-bell',
    title: 'Badges',
    category: 'userInterface',
  },
  {
    id: 50,
    url: { name: 'components-button' },
    icon: 'tabler-hand-click',
    title: 'Buttons',
    category: 'userInterface',
  },
  {
    id: 51,
    url: { name: 'components-chip' },
    icon: 'tabler-box',
    title: 'Chips',
    category: 'userInterface',
  },
  {
    id: 52,
    url: { name: 'components-dialog' },
    icon: 'tabler-square',
    title: 'Dialogs',
    category: 'userInterface',
  },
  {
    id: 53,
    url: { name: 'components-list' },
    icon: 'tabler-list',
    title: 'List',
    category: 'userInterface',
  },
  {
    id: 54,
    url: { name: 'components-menu' },
    icon: 'tabler-menu-2',
    title: 'Menu',
    category: 'userInterface',
  },
  {
    id: 55,
    url: { name: 'components-pagination' },
    icon: 'tabler-player-skip-forward',
    title: 'Pagination',
    category: 'userInterface',
  },
  {
    id: 56,
    url: { name: 'components-progress-circular' },
    icon: 'tabler-adjustments-alt',
    title: 'Progress Circular',
    category: 'userInterface',
  },
  {
    id: 83,
    url: { name: 'components-progress-linear' },
    icon: 'tabler-adjustments-alt',
    title: 'Progress Linear',
    category: 'userInterface',
  },
  {
    id: 57,
    url: { name: 'components-expansion-panel' },
    icon: 'tabler-fold',
    title: 'Expansion Panel',
    category: 'userInterface',
  },
  {
    id: 58,
    url: { name: 'components-snackbar' },
    icon: 'tabler-message',
    title: 'Snackbar',
    category: 'userInterface',
  },
  {
    id: 59,
    url: { name: 'components-tabs' },
    icon: 'tabler-square-plus',
    title: 'Tabs',
    category: 'userInterface',
  },
  {
    id: 60,
    url: { name: 'components-timeline' },
    icon: 'tabler-timeline-event',
    title: 'Timeline',
    category: 'userInterface',
  },
  {
    id: 61,
    url: { name: 'components-tooltip' },
    icon: 'tabler-message-chatbot',
    title: 'Tooltip',
    category: 'userInterface',
  },
  {
    id: 62,
    url: { name: 'forms-textfield' },
    icon: 'tabler-arrow-rotary-last-left',
    title: 'TextField',
    category: 'formsTables',
  },
  {
    id: 63,
    url: { name: 'forms-select' },
    icon: 'tabler-list-check',
    title: 'Select',
    category: 'formsTables',
  },
  {
    id: 64,
    url: { name: 'forms-checkbox' },
    icon: 'tabler-checkbox',
    title: 'Checkbox',
    category: 'formsTables',
  },
  {
    id: 65,
    url: { name: 'forms-radio' },
    icon: 'tabler-circle-dot',
    title: 'Radio',
    category: 'formsTables',
  },
  {
    id: 66,
    url: { name: 'forms-combobox' },
    icon: 'tabler-checkbox',
    title: 'Combobox',
    category: 'formsTables',
  },
  {
    id: 67,
    url: { name: 'forms-date-time-picker' },
    icon: 'tabler-calendar',
    title: 'Date Time picker',
    category: 'formsTables',
  },
  {
    id: 68,
    url: { name: 'forms-textarea' },
    icon: 'tabler-forms',
    title: 'Textarea',
    category: 'formsTables',
  },
  {
    id: 70,
    url: { name: 'forms-switch' },
    icon: 'tabler-toggle-left',
    title: 'Switch',
    category: 'formsTables',
  },
  {
    id: 71,
    url: { name: 'forms-file-input' },
    icon: 'tabler-upload',
    title: 'File Input',
    category: 'formsTables',
  },
  {
    id: 72,
    url: { name: 'forms-rating' },
    icon: 'tabler-star',
    title: 'Form Rating',
    category: 'formsTables',
  },
  {
    id: 73,
    url: { name: 'forms-slider' },
    icon: 'tabler-hand-click',
    title: 'Slider',
    category: 'formsTables',
  },
  {
    id: 74,
    url: { name: 'forms-range-slider' },
    icon: 'tabler-adjustments',
    title: 'Range Slider',
    category: 'formsTables',
  },
  {
    id: 75,
    url: { name: 'forms-form-layouts' },
    icon: 'tabler-box',
    title: 'Form Layouts',
    category: 'formsTables',
  },
  {
    id: 76,
    url: { name: 'forms-form-validation' },
    icon: 'tabler-checkbox',
    title: 'Form Validation',
    category: 'formsTables',
  },
  {
    id: 77,
    url: { name: 'charts-apex-chart' },
    icon: 'tabler-chart-line',
    title: 'Apex Charts',
    category: 'chartsMisc',
  },
  {
    id: 78,
    url: { name: 'charts-chartjs' },
    icon: 'tabler-chart-area',
    title: 'ChartJS',
    category: 'chartsMisc',
  },
  {
    id: 79,
    url: { name: 'access-control' },
    icon: 'tabler-shield',
    title: 'Access Control (ACL)',
    category: 'chartsMisc',
  },
  {
    id: 80,
    url: { name: 'pages-dialog-examples' },
    icon: 'tabler-square',
    title: 'Dialog Examples',
    category: 'appsPages',
  },
  {
    id: 81,
    url: { name: 'forms-custom-input' },
    icon: 'tabler-list-details',
    title: 'Custom Input',
    category: 'formsTables',
  },
  {
    id: 82,
    url: { name: 'forms-autocomplete' },
    icon: 'tabler-align-left',
    title: 'Autocomplete',
    category: 'formsTables',
  },
  {
    id: 83,
    url: { name: 'extensions-tour' },
    icon: 'mdi-cube-outline',
    title: 'Tour',
    category: 'userInterface',
  },
  {
    id: 84,
    url: { name: 'pages-authentication-register-multi-steps' },
    icon: 'tabler-user-plus',
    title: 'Register Multi-Steps',
    category: 'appsPages',
  },
  {
    id: 85,
    url: { name: 'wizard-examples-checkout' },
    icon: 'tabler-shopping-cart',
    title: 'Wizard - Checkout',
    category: 'appsPages',
  },
  {
    id: 86,
    url: { name: 'wizard-examples-create-deal' },
    icon: 'tabler-gift',
    title: 'Wizard - create deal',
    category: 'appsPages',
  },
  {
    id: 87,
    url: { name: 'wizard-examples-property-listing' },
    icon: 'tabler-home',
    title: 'Wizard - Property Listing',
    category: 'appsPages',
  },
  {
    id: 88,
    url: { name: 'apps-roles' },
    icon: 'tabler-shield',
    title: 'Roles',
    category: 'appsPages',
  },
  {
    id: 89,
    url: { name: 'apps-permissions' },
    icon: 'tabler-shield',
    title: 'Permissions',
    category: 'appsPages',
  },
  {
    id: 90,
    url: { name: 'tables-data-table' },
    icon: 'mdi-table',
    title: 'Data Table',
    category: 'formsTables',
  },
  {
    id: 91,
    url: { name: 'tables-simple-table' },
    icon: 'mdi-table',
    title: 'Simple Table',
    category: 'formsTables',
  },
]


// ** GET Search Data
// eslint-disable-next-line sonarjs/cognitive-complexity
mock.onGet('/app-bar/search').reply(config => {
  const { q = '' } = config.params
  const queryLowered = q.toLowerCase()

  const exactData = {
    dashboards: [],
    appsPages: [],
    userInterface: [],
    formsTables: [],
    chartsMisc: [],
  }

  const includeData = {
    dashboards: [],
    appsPages: [],
    userInterface: [],
    formsTables: [],
    chartsMisc: [],
  }

  database.forEach(obj => {
    const isMatched = obj.title.toLowerCase().startsWith(queryLowered)
    if (isMatched && exactData[obj.category].length < 5)
      exactData[obj.category].push(obj)
  })
  database.forEach(obj => {
    const isMatched = !obj.title.toLowerCase().startsWith(queryLowered) && obj.title.toLowerCase().includes(queryLowered)
    if (isMatched && includeData[obj.category].length < 5)
      includeData[obj.category].push(obj)
  })

  const categoriesCheck = []

  Object.keys(exactData).forEach(category => {
    if (exactData[category].length > 0)
      categoriesCheck.push(category)
  })
  if (categoriesCheck.length === 0) {
    Object.keys(includeData).forEach(category => {
      if (includeData[category].length > 0)
        categoriesCheck.push(category)
    })
  }
  const resultsLength = categoriesCheck.length === 1 ? 5 : 3
  const mergedData = []

  Object.keys(exactData).forEach(element => {
    if (exactData[element].length || includeData[element].length) {
      const r = exactData[element].concat(includeData[element]).slice(0, resultsLength)

      r.unshift({ header: element, title: element })
      mergedData.push(...r)
    }
  })
  
  return [200, [...mergedData]]
})
