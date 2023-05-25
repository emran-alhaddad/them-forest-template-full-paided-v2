// ** Icons Import
import { FileText, Circle, Square, UserCheck } from 'react-feather'

export default [
  {
    id: 'pages',
    title: 'Pages',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'accountSettings',
        title: 'Account Settings',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/account-settings'
      },
      {
        id: 'profile',
        title: 'Profile',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/profile',
        collapsed: true
      },
      {
        id: 'faq',
        title: 'FAQ',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/faq'
      },
      {
        id: 'knowledgeBase',
        title: 'Knowledge Base',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/knowledge-base',
        parentOf: ['/pages/knowledge-base/category/questions', '/pages/knowledge-base/category']
      },
      {
        id: 'pricing',
        title: 'Pricing',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/pricing'
      },
      {
        id: 'license',
        title: 'License',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/license'
      },
      {
        id: 'api-key',
        title: 'API Key',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/api-key'
      },
      {
        id: 'blog',
        title: 'Blog',
        icon: <Circle size={12} />,
        children: [
          {
            id: 'blogList',
            title: 'List',
            permissions: ['admin', 'editor'],
            navLink: '/pages/blog/list'
          },
          {
            id: 'blogDetail',
            title: 'Detail',
            permissions: ['admin', 'editor'],
            navLink: '/pages/blog/detail'
          },
          {
            id: 'blogEdit',
            title: 'Edit',
            permissions: ['admin', 'editor'],
            navLink: '/pages/blog/edit'
          }
        ]
      },
      {
        id: 'mailTemplate',
        title: 'Mail Template',
        icon: <Circle size={12} />,
        children: [
          {
            id: 'welcomeTemp',
            title: 'Welcome',
            permissions: ['admin', 'editor'],
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-welcome.html',
            newTab: true,
            externalLink: true
          },
          {
            id: 'resetPassTemp',
            title: 'Reset Password',
            permissions: ['admin', 'editor'],
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-reset-password.html',
            newTab: true,
            externalLink: true
          },
          {
            id: 'verifyEmailTemp',
            title: 'Verify Email',
            permissions: ['admin', 'editor'],
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-verify-email.html',
            newTab: true,
            externalLink: true
          },
          {
            id: 'deactivateAccountTemp',
            title: 'Deactivate Account',
            permissions: ['admin', 'editor'],
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-deactivate-account.html',
            newTab: true,
            externalLink: true
          },
          {
            id: 'invoiceMailTemp',
            title: 'Invoice',
            permissions: ['admin', 'editor'],
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-invoice.html',
            newTab: true,
            externalLink: true
          },
          {
            id: 'promotionalMailTemp',
            title: 'Promotional',
            permissions: ['admin', 'editor'],
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-promotional.html',
            newTab: true,
            externalLink: true
          }
        ]
      },
      {
        id: 'miscellaneous',
        title: 'Miscellaneous',
        icon: <Circle size={12} />,
        children: [
          {
            id: 'comingSoon',
            title: 'Coming Soon',
            permissions: ['admin', 'editor'],
            navLink: '/misc/coming-soon',
            newTab: true
          },

          {
            id: 'notAuthorized',
            title: 'Not Authorized',
            permissions: ['admin', 'editor'],
            navLink: '/misc/not-authorized',
            newTab: true
          },
          {
            id: 'maintenance',
            title: 'Maintenance',
            permissions: ['admin', 'editor'],
            navLink: '/misc/maintenance',
            newTab: true
          },
          {
            id: 'error',
            title: 'Error',
            permissions: ['admin', 'editor'],
            navLink: '/misc/error',
            newTab: true
          }
        ]
      }
    ]
  },
  {
    id: 'authentication',
    title: 'Authentication',
    icon: <UserCheck size={20} />,
    children: [
      {
        id: 'login',
        title: 'Login',
        icon: <Circle size={12} />,
        children: [
          {
            id: 'login-basic',
            title: 'Basic',
            permissions: ['admin', 'editor'],
            navLink: '/pages/login-basic',
            newTab: true
          },
          {
            id: 'login-cover',
            title: 'Cover',
            permissions: ['admin', 'editor'],
            navLink: '/pages/login-cover',
            newTab: true
          }
        ]
      },
      {
        id: 'register',
        title: 'Register',
        icon: <Circle size={12} />,
        children: [
          {
            id: 'register-basic',
            title: 'Basic',
            permissions: ['admin', 'editor'],
            navLink: '/pages/register-basic',
            newTab: true
          },
          {
            id: 'register-cover',
            title: 'Cover',
            permissions: ['admin', 'editor'],
            navLink: '/pages/register-cover',
            newTab: true
          },
          {
            id: 'multi-steps-register',
            title: 'Multi-Steps',
            permissions: ['admin', 'editor'],
            navLink: '/pages/register-multi-steps',
            newTab: true
          }
        ]
      },
      {
        id: 'forgot-password',
        title: 'Forgot Password',
        icon: <Circle size={12} />,
        children: [
          {
            id: 'forgotPassword-basic',
            title: 'Basic',
            permissions: ['admin', 'editor'],
            navLink: '/pages/forgot-password-basic',
            newTab: true
          },
          {
            id: 'forgotPassword-cover',
            title: 'Cover',
            permissions: ['admin', 'editor'],
            navLink: '/pages/forgot-password-cover',
            newTab: true
          }
        ]
      },
      {
        id: 'resetPassword',
        title: 'Reset Password',
        icon: <Circle size={12} />,
        children: [
          {
            id: 'resetPassword-basic',
            title: 'Basic',
            permissions: ['admin', 'editor'],
            navLink: '/pages/reset-password-basic',
            newTab: true
          },
          {
            id: 'resetPassword-cover',
            title: 'Cover',
            permissions: ['admin', 'editor'],
            navLink: '/pages/reset-password-cover',
            newTab: true
          }
        ]
      },
      {
        id: 'verify-email',
        title: 'Verify Email',
        icon: <Circle size={12} />,
        children: [
          {
            id: 'verify-email-basic',
            title: 'Basic',
            permissions: ['admin', 'editor'],
            navLink: '/pages/verify-email-basic',
            newTab: true
          },
          {
            id: 'verify-email-cover',
            title: 'Cover',
            permissions: ['admin', 'editor'],
            navLink: '/pages/verify-email-cover',
            newTab: true
          }
        ]
      },
      {
        id: 'two-step',
        title: 'Two Steps',
        icon: <Circle size={12} />,
        children: [
          {
            id: 'two-steps-basic',
            title: 'Basic',
            permissions: ['admin', 'editor'],
            navLink: '/pages/two-steps-basic',
            newTab: true
          },
          {
            id: 'two-steps-cover',
            title: 'Cover',
            permissions: ['admin', 'editor'],
            navLink: '/pages/two-steps-cover',
            newTab: true
          }
        ]
      }
    ]
  },
  {
    id: 'modal-examples',
    title: 'Modal Examples',
    icon: <Square size={12} />,
    permissions: ['admin', 'editor'],
    navLink: '/pages/modal-examples'
  }
]
