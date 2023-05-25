// ** Icons Import
import {
  Key,
  User,
  Info,
  Mail,
  File,
  Unlock,
  Circle,
  Square,
  FileText,
  Settings,
  Clipboard,
  DollarSign,
  HelpCircle
} from 'react-feather'

export default [
  {
    id: 'pages',
    title: 'Pages',
    icon: <FileText />,
    children: [
      {
        id: 'authentication',
        title: 'Authentication',
        icon: <Unlock />,
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
            title: 'Reset Password',
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
        id: 'accountSettings',
        title: 'Account Settings',
        icon: <Settings />,
        navLink: '/pages/account-settings'
      },
      {
        id: 'profile',
        title: 'Profile',
        icon: <User />,
        navLink: '/pages/profile',
        collapsed: true
      },
      {
        id: 'faq',
        title: 'FAQ',
        icon: <HelpCircle />,
        navLink: '/pages/faq'
      },
      {
        id: 'knowledgeBase',
        title: 'Knowledge Base',
        icon: <Info />,
        navLink: '/pages/knowledge-base',
        parentOf: ['/pages/knowledge-base/category/questions', '/pages/knowledge-base/category']
      },

      {
        id: 'pricing',
        title: 'Pricing',
        icon: <DollarSign />,
        navLink: '/pages/pricing'
      },
      {
        id: 'license',
        title: 'License',
        icon: <FileText />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/license'
      },
      {
        id: 'api-key',
        title: 'API Key',
        icon: <Key />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/api-key'
      },
      {
        id: 'blog',
        title: 'Blog',
        icon: <Clipboard />,
        children: [
          {
            id: 'blogList',
            title: 'List',
            icon: <Circle />,
            navLink: '/pages/blog/list'
          },
          {
            id: 'blogDetail',
            title: 'Detail',
            icon: <Circle />,
            navLink: '/pages/blog/detail'
          },
          {
            id: 'blogEdit',
            title: 'Edit',
            icon: <Circle />,
            navLink: '/pages/blog/edit'
          }
        ]
      },

      {
        id: 'mailTemplate',
        title: 'Mail Template',
        icon: <Mail />,
        children: [
          {
            id: 'welcomeTemp',
            title: 'Welcome',
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-welcome.html',
            externalLink: true
          },
          {
            id: 'resetPassTemp',
            title: 'Reset Password',
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-reset-password.html',
            externalLink: true
          },
          {
            id: 'verifyEmailTemp',
            title: 'Verify Email',
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-verify-email.html',
            externalLink: true
          },
          {
            id: 'deactivateAccountTemp',
            title: 'Deactivate Account',
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-deactivate-account.html',
            externalLink: true
          },
          {
            id: 'invoiceMailTemp',
            title: 'Invoice',
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-invoice.html',
            externalLink: true
          },
          {
            id: 'promotionalMailTemp',
            title: 'Promotional',
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-promotional.html',
            externalLink: true
          }
        ]
      },

      {
        id: 'miscellaneous',
        title: 'Miscellaneous',
        icon: <File />,
        children: [
          {
            id: 'comingSoon',
            title: 'Coming Soon',
            icon: <Circle />,
            navLink: '/misc/coming-soon',
            newTab: true
          },

          {
            id: 'notAuthorized',
            title: 'Not Authorized',
            icon: <Circle />,
            navLink: '/misc/not-authorized',
            newTab: true
          },
          {
            id: 'maintenance',
            title: 'Maintenance',
            icon: <Circle />,
            navLink: '/misc/maintenance',
            newTab: true
          },
          {
            id: 'error',
            title: 'Error',
            icon: <Circle />,
            navLink: '/misc/error',
            newTab: true
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
  }
]
