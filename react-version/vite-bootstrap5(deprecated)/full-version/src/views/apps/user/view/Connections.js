// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, Input, Label, Button } from 'reactstrap'

// ** Icons Imports
import { Check, X, Link } from 'react-feather'

// ** Social Icon Imports
import slackIcon from '@src/assets/images/icons/social/slack.png'
import asanaIcon from '@src/assets/images/icons/social/asana.png'
import googleIcon from '@src/assets/images/icons/social/google.png'
import githubIcon from '@src/assets/images/icons/social/github.png'
import behanceIcon from '@src/assets/images/icons/social/behance.png'
import twitterIcon from '@src/assets/images/icons/social/twitter.png'
import facebookIcon from '@src/assets/images/icons/social/facebook.png'
import linkedinIcon from '@src/assets/images/icons/social/linkedin.png'
import dribbbleIcon from '@src/assets/images/icons/social/dribbble.png'
import mailchimpIcon from '@src/assets/images/icons/social/mailchimp.png'

const connectedAccounts = [
  {
    checked: true,
    title: 'Google',
    subtitle: 'Calendar and contacts',
    logo: googleIcon
  },
  {
    checked: false,
    title: 'Slack',
    subtitle: 'Communication',
    logo: slackIcon
  },
  {
    checked: true,
    title: 'Github',
    subtitle: 'Git repositories',
    logo: githubIcon
  },
  {
    checked: false,
    title: 'Mailchimp',
    subtitle: 'Email marketing service',
    logo: mailchimpIcon
  },
  {
    checked: false,
    title: 'Asana',
    subtitle: 'Communication',
    logo: asanaIcon
  }
]

const socialAccounts = [
  {
    linked: false,
    title: 'Facebook',
    logo: facebookIcon
  },
  {
    linked: true,
    title: 'Twitter',
    url: 'https://twitter.com/pixinvent',
    logo: twitterIcon
  },
  {
    linked: true,
    title: 'Linkedin',
    url: 'https://www.linkedin.com/company/pixinvent/',
    logo: linkedinIcon
  },
  {
    linked: false,
    title: 'Dribbble',
    logo: dribbbleIcon
  },
  {
    linked: false,
    title: 'Behance',
    logo: behanceIcon
  }
]

const connections = () => {
  return (
    <Fragment>
      <Card>
        <CardBody>
          <CardTitle className='mb-75'>Connected accounts</CardTitle>
          <p>Display content from your connected accounts on your site</p>
          {connectedAccounts.map((item, index) => {
            return (
              <div key={index} className='d-flex mt-2'>
                <div className='flex-shrink-0'>
                  <img className='me-1' src={item.logo} alt={item.title} height='38' width='38' />
                </div>
                <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                  <div className='me-1'>
                    <p className='fw-bolder mb-0'>{item.title}</p>
                    <span>{item.subtitle}</span>
                  </div>
                  <div className='mt-50 mt-sm-0'>
                    <div className='form-switch'>
                      <Input type='switch' defaultChecked={item.checked} id={`account-${item.title}`} />
                      <Label className='form-check-label' for={`account-${item.title}`}>
                        <span className='switch-icon-left'>
                          <Check size={14} />
                        </span>
                        <span className='switch-icon-right'>
                          <X size={14} />
                        </span>
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle className='mb-75'>Social accounts</CardTitle>
          <p>Display content from social accounts on your site</p>
          {socialAccounts.map((item, index) => {
            return (
              <div key={index} className='d-flex mt-2'>
                <div className='flex-shrink-0'>
                  <img className='me-1' src={item.logo} alt={item.title} height='38' width='38' />
                </div>
                <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                  <div className='me-1'>
                    <p className='fw-bolder mb-0'>{item.title}</p>
                    {item.linked ? (
                      <a href={item.url} target='_blank'>
                        @pixinvent
                      </a>
                    ) : (
                      <span>Not Connected</span>
                    )}
                  </div>
                  <div className='mt-50 mt-sm-0'>
                    <Button outline className='btn-icon'>
                      {item.linked ? <X className='font-medium-3' /> : <Link className='font-medium-3' />}
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default connections
