import mock from '../mock'

// Images Imports
import slider02 from '@src/assets/images/slider/02.jpg'
import slider06 from '@src/assets/images/slider/06.jpg'
import slider04 from '@src/assets/images/slider/04.jpg'
import slider03 from '@src/assets/images/slider/03.jpg'
import slider09 from '@src/assets/images/slider/09.jpg'
import slider10 from '@src/assets/images/slider/10.jpg'
import banner22 from '@src/assets/images/banner/banner-22.jpg'
import banner27 from '@src/assets/images/banner/banner-27.jpg'
import banner39 from '@src/assets/images/banner/banner-39.jpg'
import banner35 from '@src/assets/images/banner/banner-35.jpg'
import banner12 from '@src/assets/images/banner/banner-12.jpg'

// Avatar Imports
import avatar3 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import avatar7 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import avatar9 from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import avatar13 from '@src/assets/images/portrait/small/avatar-s-13.jpg'
import avatar14 from '@src/assets/images/portrait/small/avatar-s-14.jpg'

const data = {
  // blog list
  blogList: [
    {
      img: slider02,
      title: 'The Best Features Coming to iOS and Web design',
      id: 1,
      avatar: avatar7,
      userFullName: 'Ghani Pradita',
      blogPosted: 'Jan 10, 2020',
      tags: ['Quote', 'Fashion'],
      excerpt: 'Donut fruitcake soufflé apple pie candy canes jujubes croissant chocolate bar ice cream.',
      comment: 76
    },
    {
      img: slider06,
      title: 'Latest Quirky Opening Sentence or Paragraph',
      id: 2,
      avatar: avatar9,
      userFullName: 'Jorge Griffin',
      blogPosted: 'Jan 10, 2020',
      tags: ['Gaming', 'Video'],
      excerpt: 'Apple pie caramels lemon drops halvah liquorice carrot cake. Tiramisu brownie lemon drops.',
      comment: 2100
    },
    {
      img: slider04,
      title: 'Share an Amazing and Shocking Fact or Statistic',
      id: 3,
      avatar: avatar3,
      userFullName: 'Claudia Neal',
      blogPosted: 'Jan 10, 2020',
      tags: ['Gaming', 'Food'],
      excerpt: 'Tiramisu jelly-o chupa chups tootsie roll donut wafer marshmallow cheesecake topping.',
      comment: 243
    },
    {
      img: slider03,
      title: 'Withhold a Compelling Piece of Information',
      id: 4,
      avatar: avatar14,
      userFullName: 'Fred Boone',
      blogPosted: 'Jan 10, 2020',
      tags: ['Video'],
      excerpt: 'Croissant apple pie lollipop gingerbread. Cookie jujubes chocolate cake icing cheesecake.',
      comment: 10
    },
    {
      img: slider09,
      title: 'Unadvertised Bonus Opening: Share a Quote',
      id: 5,
      avatar: avatar13,
      userFullName: 'Billy French',
      blogPosted: 'Jan 10, 2020',
      tags: ['Quote', 'Fashion'],
      excerpt: 'Muffin liquorice candy soufflé bear claw apple pie icing halvah. Pie marshmallow jelly.',
      comment: 319
    },
    {
      img: slider10,
      title: 'Ships at a distance have Every Man’s Wish on Board',
      id: 6,
      avatar: avatar13,
      userFullName: 'Helena Hunt',
      blogPosted: 'Jan 10, 2020',
      tags: ['Fashion', 'Video'],
      excerpt: 'A little personality goes a long way, especially on a business blog. So don’t be afraid to let loose.',
      comment: 1500
    }
  ],

  // sidebar
  blogSidebar: {
    recentPosts: [
      {
        img: banner22,
        title: 'Why Should Forget Facebook?',
        id: 7,
        createdTime: 'Jan 14 2020'
      },
      {
        img: banner27,
        title: 'Publish your passions, your way',
        id: 8,
        createdTime: 'Mar 04 2020'
      },
      {
        img: banner39,
        title: 'The Best Ways to Retain More',
        id: 9,
        createdTime: 'Feb 18 2020'
      },
      {
        img: banner35,
        title: 'Share a Shocking Fact or Statistic',
        id: 10,
        createdTime: 'Oct 08 2020'
      }
    ],
    categories: [
      { category: 'Fashion', icon: 'Watch' },
      { category: 'Food', icon: 'ShoppingCart' },
      { category: 'Gaming', icon: 'Command' },
      { category: 'Quote', icon: 'Hash' },
      { category: 'Video', icon: 'Video' }
    ]
  },

  // detail
  blogDetail: {
    blog: {
      img: banner12,
      title: 'The Best Features Coming to iOS and Web design',
      avatar: avatar7,
      userFullName: 'Ghani Pradita',
      createdTime: 'Jan 10, 2020',
      tags: ['Gaming', 'Video'],
      content:
        '<p class="card-text mb-2">Before you get into the nitty-gritty of coming up with a perfect title, start with a rough draft: your working title. What is that, exactly? A lot of people confuse working titles with topics. Let\'s clear that Topics are very general and could yield several different blog posts. Think "raising healthy kids," or "kitchen storage." A writer might look at either of those topics and choose to take them in very, very different directions.A working title, on the other hand, is very specific and guides the creation of a single blog post. For example, from the topic "raising healthy kids," you could derive the following working title See how different and specific each of those is? That\'s what makes them working titles, instead of overarching topics.</p><h4>Unprecedented Challenge</h4><ul><li>Preliminary thinking systems</li><li>Bandwidth efficient</li><li>Green space</li><li>Social impact</li><li>Thought partnership</li><li>Fully ethical life</li></ul>',
      comments: 19100,
      bookmarked: 139
    },
    comments: [
      {
        avatar: avatar9,
        userFullName: 'Chad Alexander',
        commentedAt: 'May 24, 2020',
        commentText:
          'A variation on the question technique above, the multiple-choice question great way to engage your reader.'
      }
    ]
  },

  // edit
  blogEdit: {
    avatar: avatar9,
    userFullName: 'Chad Alexander',
    createdTime: 'May 24, 2020',
    blogTitle: 'The Best Features Coming to iOS and Web design',
    blogCategories: [
      { value: 'fashion', label: 'Fashion' },
      { value: 'gaming', label: 'Gaming' }
    ],
    slug: 'the-best-features-coming-to-ios-and-web-design',
    status: 'Published',
    excerpt:
      '<p>Cupcake ipsum dolor sit. Amet dessert donut candy chocolate bar cotton dessert candy chocolate. Candy muffin danish. Macaroon brownie jelly beans marzipan cheesecake oat cake. Carrot cake macaroon chocolate cake. Jelly brownie jelly. Marzipan pie sweet roll.</p><p><br></p><p>Liquorice dragée cake chupa chups pie cotton candy jujubes bear claw sesame snaps. Fruitcake chupa chups chocolate bonbon lemon drops croissant caramels lemon drops. Candy jelly cake marshmallow jelly beans dragée macaroon. Gummies sugar plum fruitcake. Candy canes candy cupcake caramels cotton candy jujubes fruitcake.</p>',
    featuredImage: slider03
  }
}

mock.onGet('/blog/list/data').reply(() => [200, data.blogList])
mock.onGet('/blog/list/data/sidebar').reply(() => [200, data.blogSidebar])
mock.onGet('/blog/list/data/detail').reply(() => [200, data.blogDetail])
mock.onGet('/blog/list/data/edit').reply(() => [200, data.blogEdit])
