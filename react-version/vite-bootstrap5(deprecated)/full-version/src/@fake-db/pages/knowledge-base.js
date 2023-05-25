import mock from '../mock'

// Images Imports
import kbImg from '@src/assets/images/pages/kb-image.jpg'
import apiImg from '@src/assets/images/illustration/api.svg'
import salesImg from '@src/assets/images/illustration/sales.svg'
import emailImg from '@src/assets/images/illustration/email.svg'
import demandImg from '@src/assets/images/illustration/demand.svg'
import marketingImg from '@src/assets/images/illustration/marketing.svg'
import personalizationImg from '@src/assets/images/illustration/personalization.svg'

const data = {
  // knowledge base
  knowledgeBase: [
    {
      id: 1,
      category: 'sales-automation',
      img: salesImg,
      title: 'Sales Automation',
      desc: 'There is perhaps no better demonstration of the folly of image of our tiny world.'
    },
    {
      id: 2,
      category: 'marketing-automation',
      img: marketingImg,
      title: 'Marketing Automation',
      desc: 'Look again at that dot. That’s here. That’s home. That’s us. On it everyone you love.'
    },
    {
      id: 3,
      category: 'api-questions',
      img: apiImg,
      title: 'API Questions',
      desc: 'every hero and coward, every creator and destroyer of civilization.'
    },
    {
      id: 4,
      category: 'personalization',
      img: personalizationImg,
      title: 'Personalization',
      desc: 'It has been said that astronomy is a humbling and character experience.'
    },
    {
      id: 5,
      category: 'email-marketing',
      img: emailImg,
      title: 'Email Marketing',
      desc: 'There is perhaps no better demonstration of the folly of human conceits.'
    },
    {
      id: 6,
      category: 'demand-generation',
      img: demandImg,
      title: 'Demand Generation',
      desc: 'Competent means we will never take anything for granted.'
    }
  ],
  categoryData: [
    {
      id: 0,
      title: 'Account Settings',
      icon: 'Settings',
      iconColor: 'text-primary',
      questions: [
        {
          id: 0,
          question: 'How Secure Is My Password?',
          slug: 'how-secure-is-my-password'
        },
        {
          id: 1,
          question: 'Can I Change My Username?',
          slug: 'can-i-change-my-username'
        },
        {
          id: 2,
          question: 'Where Can I Upload My Avatar?',
          slug: 'where-can-i-upload-my-avatar'
        },
        {
          id: 3,
          question: 'How Do I Change My Timezone?',
          slug: 'how-do-i-change-my-timezone'
        },
        {
          id: 4,
          question: 'How Do I Change My Password?',
          slug: 'how-do-i-change-my-password'
        }
      ]
    },
    {
      id: 1,
      title: 'API Questions',
      icon: 'Link',
      iconColor: 'text-success',
      questions: [
        {
          id: 0,
          question: 'What Technologies Are Used?',
          slug: 'what-technologies-are-used'
        },
        {
          id: 1,
          question: 'What Are The API Limits?',
          slug: 'what-are-the-api-limits'
        },
        {
          id: 2,
          question: 'Why Was My Application Rejected?',
          slug: 'why-was-my-application-rejected?'
        },
        {
          id: 3,
          question: 'Where can I find the documentation?',
          slug: 'where-can-i-find-the-documentation'
        },
        {
          id: 4,
          question: 'How Do I Get An API Key?',
          slug: 'how-do-i-get-an-api-key?'
        }
      ]
    },
    {
      id: 2,
      title: 'Billing',
      icon: 'FileText',
      iconColor: 'text-danger',
      questions: [
        {
          id: 0,
          question: 'Can I Contact A Salés Rep?',
          slug: 'can-i-contact-a-salés-rep'
        },
        {
          id: 1,
          question: 'Do I Need To Pay VAT?',
          slug: 'do-i-needto-pay-vat'
        },
        {
          id: 2,
          question: 'Can I Get A Refund?',
          slug: 'can-i-get-a-refund'
        },
        {
          id: 3,
          question: 'Difference Annual & Monthly Billing',
          slug: 'difference-annual-monthly-billing'
        },
        {
          id: 4,
          question: 'What Happens If The Price Increases?',
          slug: 'what-happens-if-the-price-increases?'
        }
      ]
    },
    {
      id: 3,
      title: 'Copyright & Legal',
      icon: 'Lock',
      iconColor: 'text-warning',
      questions: [
        {
          id: 0,
          question: 'How Do I Contact Legal?',
          slug: 'how-do-i-contact-legal'
        },
        {
          id: 1,
          question: 'Where Are Your Offices Located?',
          slug: 'where-are-your-offices-located'
        },
        {
          id: 2,
          question: 'Who Owns The Copyright On Text?',
          slug: 'who-owns-the-copyright-on-text'
        },
        {
          id: 3,
          question: 'Our Content Policy',
          slug: 'our-content-policy'
        },
        {
          id: 4,
          question: 'How Do I File A DMCA?',
          slug: 'how-do-i-file-a-dmca'
        }
      ]
    },
    {
      id: 4,
      title: 'Mobile Apps',
      icon: 'Smartphone',
      iconColor: 'text-info',
      questions: [
        {
          id: 0,
          question: 'How Do I Download The Android App?',
          slug: 'how-do-i-download-the-android-app'
        },
        {
          id: 1,
          question: 'How To Download Our iPad App',
          slug: 'how-to-download-our-ipad-app'
        },
        {
          id: 2,
          question: 'Where Can I Upload My Avatar?',
          slug: 'where-can-i-upload-my-avatar'
        },
        {
          id: 3,
          question: 'Can I Use My Android Phone?',
          slug: 'can-i-use-my-android-phone'
        },
        {
          id: 4,
          question: 'Is There An iOS App?',
          slug: 'is-there-an-ios-app'
        }
      ]
    },
    {
      id: 5,
      title: 'Using KnowHow',
      icon: 'HelpCircle',
      iconColor: '',
      questions: [
        {
          id: 0,
          question: 'Customization',
          slug: 'customization'
        },
        {
          id: 1,
          question: 'Upgrading',
          slug: 'upgrading'
        },
        {
          id: 2,
          question: 'Customizing Your Theme',
          slug: 'customizing-your-theme'
        },
        {
          id: 3,
          question: 'Upgrading Your Theme',
          slug: 'upgrading-your-theme'
        }
      ]
    }
  ],
  questionData: {
    title: 'Why Was My Developer Application Rejected?',
    lastUpdated: '10 Dec 2018',
    relatedQuestions: [
      {
        id: 0,
        question: 'How Secure Is My Password?'
      },
      {
        id: 1,
        question: 'Can I Change My Username?'
      },
      {
        id: 2,
        question: 'Where Can I Upload My Avatar?'
      },
      {
        id: 3,
        question: 'How Do I Change My Timezone?'
      },
      {
        id: 4,
        question: 'How Do I Change My Password?'
      }
    ],
    // ! Here we have used require for image source but in API it shall be URL of live image, this is just for demo purpose
    content: `<p>It has been said that astronomy is a humbling and character-building experience. There is perhaps no better demonstration of the folly of human conceits than this distant image of our tiny world. To me, it underscores our responsibility to deal more kindly with one another, and to preserve and cherish the pale blue dot, the only home we’ve ever known. The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot. Think of the endless cruelties visited by the inhabitants of one corner of this pixel on the scarcely distinguishable inhabitants of some other corner, how frequent their misunderstandings, how eager they are to kill one another, how fervent their hatreds.</p><img class="img-fluid w-100 my-1 rounded" src="${kbImg}" /><h5 class='my-1'>Houston</h5><p>that may have seemed like a very long final phase. The auto targeting was taking us right into a … crater, with a large number of big boulders and rocks … and it required …flying manually over the rock field to find a reasonably good area.</p><ul class="list-group list-group-circle ms-2 mt-2"><li class="list-group-item"><a class="text-body" href="/" rel="noopener noreferrer" >I am a stranger. I come in peace. Take me to your leader and there will be a massive reward for you in eternity.</a></li><li class="list-group-item"><a class="text-body" href="/" rel="noopener noreferrer" >It’s just mind-blowingly awesome. I apologize, and I wish I was more articulate, but it’s hard to be articulate when your mind’s blown—but in a very good way.</a></li><li class="list-group-item"><a class="text-body" href="/" rel="noopener noreferrer" >A good rule for rocket experimenters to follow is this</a></li></ul>`
  }
}

mock.onGet('/faq/data/knowledge_base').reply(() => [200, data.knowledgeBase])
mock.onGet('/faq/data/category').reply(() => [200, data.categoryData])
mock.onGet('/faq/data/question').reply(() => [200, data.questionData])
