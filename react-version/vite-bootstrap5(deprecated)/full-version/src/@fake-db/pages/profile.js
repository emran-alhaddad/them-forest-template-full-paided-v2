import mock from '../mock'

// Avatar Imports
import avatar1 from '@src/assets/images/avatars/1-small.png'
import avatar3 from '@src/assets/images/avatars/3-small.png'
import avatar5 from '@src/assets/images/avatars/5-small.png'
import avatar6 from '@src/assets/images/avatars/6-small.png'
import avatar10 from '@src/assets/images/avatars/10-small.png'
import avatar12 from '@src/assets/images/avatars/12-small.png'

// Portrait Imports
import portrait1 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
import portrait2 from '@src/assets/images/portrait/small/avatar-s-2.jpg'
import portrait3 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import portrait4 from '@src/assets/images/portrait/small/avatar-s-4.jpg'
import portrait5 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import portrait6 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import portrait7 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import portrait8 from '@src/assets/images/portrait/small/avatar-s-8.jpg'
import portrait9 from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import portrait10 from '@src/assets/images/portrait/small/avatar-s-10.jpg'
import portrait11 from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import portrait12 from '@src/assets/images/portrait/small/avatar-s-12.jpg'
import portrait15 from '@src/assets/images/portrait/small/avatar-s-15.jpg'
import portrait18 from '@src/assets/images/portrait/small/avatar-s-18.jpg'
import portrait22 from '@src/assets/images/portrait/small/avatar-s-22.jpg'

// ** Cover Image
import coverImg from '@src/assets/images/profile/user-uploads/timeline.jpg'

// ** Post Images
import Post2 from '@src/assets/images/profile/post-media/2.jpg'
import Post25 from '@src/assets/images/profile/post-media/25.jpg'

// ** User Uploads
import userUpload02 from '@src/assets/images/profile/user-uploads/user-02.jpg'
import userUpload03 from '@src/assets/images/profile/user-uploads/user-03.jpg'
import userUpload04 from '@src/assets/images/profile/user-uploads/user-04.jpg'
import userUpload05 from '@src/assets/images/profile/user-uploads/user-05.jpg'
import userUpload06 from '@src/assets/images/profile/user-uploads/user-06.jpg'
import userUpload07 from '@src/assets/images/profile/user-uploads/user-07.jpg'
import userUpload08 from '@src/assets/images/profile/user-uploads/user-08.jpg'
import userUpload09 from '@src/assets/images/profile/user-uploads/user-09.jpg'
import userUpload13 from '@src/assets/images/profile/user-uploads/user-13.jpg'

const data = {
  profileData: {
    header: {
      avatar: portrait2,
      username: 'Kitty Allanson',
      designation: 'UI/UX Designer',
      coverImg
    },
    userAbout: {
      about: 'Tart I love sugar plum I love oat cake. Sweet ⭐️ roll caramels I love jujubes. Topping cake wafer.',
      joined: 'November 15, 2015',
      lives: 'New York, USA',
      email: 'bucketful@fiendhead.org',
      website: 'www.pixinvent.com'
    },
    suggestedPages: [
      {
        avatar: avatar12,
        username: 'Peter Reed',
        subtitle: 'Company',
        favorite: false
      },
      {
        avatar: avatar1,
        username: 'Harriett Adkins',
        subtitle: 'Company',
        favorite: false
      },
      {
        avatar: avatar10,
        username: 'Juan Weaver',
        subtitle: 'Company',
        favorite: false
      },
      {
        avatar: avatar3,
        username: 'Claudia Chandler',
        subtitle: 'Company',
        favorite: false
      },
      {
        avatar: avatar5,
        username: 'Earl Briggs',
        subtitle: 'Company',
        favorite: true
      },
      {
        avatar: avatar6,
        username: 'Jonathan Lyons',
        subtitle: 'Beauty Store',
        favorite: false
      }
    ],
    twitterFeeds: [
      {
        imgUrl: avatar5,
        title: 'Gertrude Stevens',
        id: 'tiana59 ',
        tags: '#design #fasion',
        desc: 'I love cookie chupa chups sweet tart apple pie ⭐️ chocolate bar.',
        favorite: false
      },
      {
        imgUrl: avatar12,
        title: 'Lura Jones',
        id: 'tiana59 ',
        tags: '#vuejs #code #coffeez',
        desc: 'Halvah I love powder jelly I love cheesecake cotton candy. 😍',
        favorite: true
      },
      {
        imgUrl: avatar1,
        title: 'Norman Gross',
        id: 'tiana59 ',
        tags: '#sketch #uiux #figma',
        desc: 'Candy jelly beans powder brownie biscuit. Jelly marzipan oat cake cake.',
        favorite: false
      }
    ],
    post: [
      {
        avatar: portrait18,
        username: 'Leeanna Alvord',
        postTime: '12 Dec 2018 at 1:16 AM',
        postText:
          'Wonderful Machine· A well-written bio allows viewers to get to know a photographer beyond the work. This can make the difference when presenting to clients who are looking for the perfect fit.',
        postImg: Post2,
        likes: '1.25k',
        youLiked: true,
        comments: '1.25k',
        share: '1.25k',
        likedUsers: [
          {
            avatar: portrait1,
            username: 'Trine Lynes'
          },
          {
            avatar: portrait2,
            username: 'Lilian Nenes'
          },
          {
            avatar: portrait3,
            username: 'Alberto Glotzbach'
          },
          {
            avatar: portrait5,
            username: 'George Nordic'
          },
          {
            avatar: portrait4,
            username: 'Vinnie Mostowy'
          }
        ],
        likedCount: 140,
        detailedComments: [
          {
            avatar: portrait6,
            username: 'Kitty Allanson',
            comment: 'Easy & smart fuzzy search🕵🏻 functionality which enables users to search quickly.',
            commentsLikes: 34,
            youLiked: false
          },
          {
            avatar: portrait8,
            username: 'Jackey Potter',
            comment: 'Unlimited color🖌 options allows you to set your application color as per your branding 🤪.',
            commentsLikes: 61,
            youLiked: true
          }
        ]
      },
      {
        avatar: portrait22,
        username: 'Rosa Walters',
        postTime: '11 Dec 2019 at 1:16 AM',
        postText:
          'Wonderful Machine· A well-written bio allows viewers to get to know a photographer beyond the work. This can make the difference when presenting to clients who are looking for the perfect fit.',
        postImg: Post25,
        likes: '1.25k',
        youLiked: true,
        comments: '1.25k',
        share: '1.25k',
        likedUsers: [
          {
            avatar: portrait1,
            username: 'Kori Scargle'
          },
          {
            avatar: portrait2,
            username: 'Florinda Mollison'
          },
          {
            avatar: portrait3,
            username: 'Beltran Endley'
          },
          {
            avatar: portrait5,
            username: 'Kara Gerred'
          },
          {
            avatar: portrait4,
            username: 'Sophey Bru'
          }
        ],
        likedCount: 271,
        detailedComments: [
          {
            avatar: portrait3,
            username: 'Kitty Allanson',
            comment: 'Easy & smart fuzzy search🕵🏻 functionality which enables users to search quickly.',
            commentsLikes: 34,
            youLiked: false
          }
        ]
      },
      {
        avatar: portrait15,
        username: 'Charles Watson',
        postTime: '12 Dec 2019 at 1:16 AM',
        postText:
          'Wonderful Machine· A well-written bio allows viewers to get to know a photographer beyond the work. This can make the difference when presenting to clients who are looking for the perfect fit.',
        postVid: 'https://www.youtube.com/embed/6stlCkUDG_s',
        likes: '1.25k',
        youLiked: true,
        comments: '1.25k',
        share: '1.25k',
        likedUsers: [
          {
            avatar: portrait1,
            username: 'Dehlia Bolderson'
          },
          {
            avatar: portrait2,
            username: 'De Lamy'
          },
          {
            avatar: portrait3,
            username: 'Vallie Kingsley'
          },
          {
            avatar: portrait5,
            username: 'Nadia Armell'
          },
          {
            avatar: portrait4,
            username: 'Romonda Aseef'
          }
        ],
        likedCount: 264,
        detailedComments: [
          {
            avatar: portrait3,
            username: 'Kitty Allanson',
            comment: 'Easy & smart fuzzy search🕵🏻 functionality which enables users to search quickly.',
            commentsLikes: 34,
            youLiked: false
          }
        ]
      }
    ],
    latestPhotos: [
      { img: userUpload13 },
      { img: userUpload02 },
      { img: userUpload03 },
      { img: userUpload04 },
      { img: userUpload05 },
      { img: userUpload06 },
      { img: userUpload07 },
      { img: userUpload08 },
      { img: userUpload09 }
    ],
    suggestions: [
      {
        avatar: portrait9,
        name: 'Peter Reed',
        mutualFriend: '6 Mutual Friends'
      },
      {
        avatar: portrait6,
        name: 'Harriett Adkins',
        mutualFriend: '3 Mutual Friends'
      },
      {
        avatar: portrait7,
        name: 'Juan Weaver',
        mutualFriend: '1 Mutual Friends'
      },
      {
        avatar: portrait8,
        name: 'Claudia Chandler',
        mutualFriend: '16 Mutual Friends'
      },
      {
        avatar: portrait1,
        name: 'Earl Briggs',
        mutualFriend: '4 Mutual Friends'
      },
      {
        avatar: portrait10,
        name: 'Jonathan Lyons',
        mutualFriend: '25 Mutual Friends'
      }
    ],
    polls: [
      {
        name: 'RDJ',
        result: '82%',
        votedUser: [
          {
            img: portrait12,
            username: 'Tonia Seabold'
          },
          {
            img: portrait5,
            username: 'Carissa Dolle'
          },
          {
            img: portrait9,
            username: 'Kelle Herrick'
          },
          {
            img: portrait10,
            username: 'Len Bregantini'
          },
          {
            img: portrait11,
            username: 'John Doe'
          }
        ]
      },
      {
        name: 'Chris Hemsworth',
        result: '67%',
        votedUser: [
          {
            img: portrait9,
            username: 'Diana Prince'
          },
          {
            img: portrait1,
            username: 'Lois Lane'
          },
          {
            img: portrait8,
            username: 'Bruce Wayne'
          }
        ]
      }
    ]
  }
}

mock.onGet('/profile/data').reply(() => [200, data.profileData])
