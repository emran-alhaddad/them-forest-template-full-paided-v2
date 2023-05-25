export default [
  {
    title: 'Pages',
    icon: { icon: 'tabler-file' },
    children: [
      {
        title: 'User Profile',
        icon: { icon: 'tabler-user-circle' },
        to: { name: 'pages-user-profile-tab', params: { tab: 'profile' } },
      },
      {
        title: 'Account Settings',
        icon: { icon: 'tabler-settings' },
        to: { name: 'pages-account-settings-tab', params: { tab: 'account' } },
      },
      { title: 'FAQ', icon: { icon: 'tabler-help' }, to: 'pages-faq' },
      { title: 'Help Center', icon: { icon: 'tabler-lifebuoy' }, to: 'pages-help-center' },
      { title: 'Pricing', icon: { icon: 'tabler-diamond' }, to: 'pages-pricing' },
      {
        title: 'Misc',
        icon: { icon: 'tabler-3d-cube-sphere' },
        children: [
          { title: 'Coming Soon', to: 'pages-misc-coming-soon' },
          { title: 'Under Maintenance', to: 'pages-misc-under-maintenance', target: '_blank' },
          { title: 'Page Not Found - 404', to: 'pages-misc-not-found', target: '_blank' },
          { title: 'Not Authorized - 401', to: 'pages-misc-not-authorized', target: '_blank' },
          { title: 'Server Error - 500', to: 'pages-misc-internal-server-error', target: '_blank' },
        ],
      },
      {
        title: 'Authentication',
        icon: { icon: 'tabler-lock' },
        children: [
          {
            title: 'Login',
            children: [
              { title: 'Login v1', to: 'pages-authentication-login-v1', target: '_blank' },
              { title: 'Login v2', to: 'pages-authentication-login-v2', target: '_blank' },
            ],
          },
          {
            title: 'Register',
            children: [
              { title: 'Register v1', to: 'pages-authentication-register-v1', target: '_blank' },
              { title: 'Register v2', to: 'pages-authentication-register-v2', target: '_blank' },
              { title: 'Register Multi-Steps', to: 'pages-authentication-register-multi-steps', target: '_blank' },
            ],
          },
          {
            title: 'Verify Email',
            children: [
              { title: 'Verify Email v1', to: 'pages-authentication-verify-email-v1', target: '_blank' },
              { title: 'Verify Email v2', to: 'pages-authentication-verify-email-v2', target: '_blank' },
            ],
          },
          {
            title: 'Forgot Password',
            children: [
              { title: 'Forgot Password v1', to: 'pages-authentication-forgot-password-v1', target: '_blank' },
              { title: 'Forgot Password v2', to: 'pages-authentication-forgot-password-v2', target: '_blank' },
            ],
          },
          {
            title: 'Reset Password',
            children: [
              { title: 'Reset Password v1', to: 'pages-authentication-reset-password-v1', target: '_blank' },
              { title: 'Reset Password v2', to: 'pages-authentication-reset-password-v2', target: '_blank' },
            ],
          },
          {
            title: 'Two Steps',
            children: [
              { title: 'Two Steps v1', to: 'pages-authentication-two-steps-v1', target: '_blank' },
              { title: 'Two Steps v2', to: 'pages-authentication-two-steps-v2', target: '_blank' },
            ],
          },
        ],
      },
      {
        title: 'Wizard Pages',
        icon: { icon: 'tabler-forms' },
        children: [
          { title: 'Checkout', to: { name: 'wizard-examples-checkout' } },
          { title: 'Property Listing', to: { name: 'wizard-examples-property-listing' } },
          { title: 'Create Deal', to: { name: 'wizard-examples-create-deal' } },
        ],
      },
      { title: 'Dialog Examples', icon: { icon: 'tabler-square' }, to: 'pages-dialog-examples' },
    ],
  },
]
