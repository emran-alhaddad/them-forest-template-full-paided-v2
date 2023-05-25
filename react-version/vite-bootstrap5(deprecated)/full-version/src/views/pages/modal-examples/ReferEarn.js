// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Label,
  Input,
  Modal,
  Button,
  CardBody,
  CardText,
  CardTitle,
  ModalBody,
  InputGroup,
  ModalHeader,
  InputGroupText
} from 'reactstrap'

// ** Icons Imports
import { Award, Gift, MessageSquare, Clipboard, Facebook, Twitter, Linkedin } from 'react-feather'

const data = [
  {
    icon: <MessageSquare />,
    title: 'Send Invitation 🤟🏻',
    subtitle: 'Send your referral link to your friend'
  },
  {
    icon: <Clipboard />,
    title: 'Registration 👩🏻‍💻',
    subtitle: 'Let them register to our services'
  },
  {
    icon: <Award />,
    title: 'Free Trial 🎉',
    subtitle: 'Your friend will get 30 days free trial'
  }
]

const ReferEarnModal = () => {
  // ** State
  const [show, setShow] = useState(false)

  return (
    <Fragment>
      <Card>
        <CardBody className='text-center'>
          <Gift className='font-large-2 mb-1' />
          <CardTitle tag='h5'>Refer & Earn</CardTitle>
          <CardText>
            Use Refer & Earn modal to encourage your exiting customers refer their friends & colleague.
          </CardText>
          <Button color='primary' onClick={() => setShow(true)}>
            Show
          </Button>
        </CardBody>
      </Card>
      <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-refer-earn modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='pb-5 px-sm-0'>
          <div className='px-sm-4 mx-50'>
            <h1 className='text-center mb-1'>Refer & Earn</h1>
            <p className='text-center mb-5'>
              Invite your friend to vuexy, if they sign up, you and
              <br />
              your friend will get 30 days free trial
            </p>
            <Row className='mb-4'>
              {data.map((item, index) => {
                return (
                  <Col xs={12} lg={4} key={index}>
                    <div className='d-flex justify-content-center mb-1'>
                      <div className='modal-refer-earn-step d-flex width-100 height-100 rounded-circle justify-content-center align-items-center bg-light-primary'>
                        {item.icon}
                      </div>
                    </div>
                    <div className='text-center'>
                      <h6 className='fw-bolder mb-1'>{item.title}</h6>
                      <p>{item.subtitle}</p>
                    </div>
                  </Col>
                )
              })}
            </Row>
          </div>
          <hr />
          <div className='px-sm-5 mx-50'>
            <h4 className='fw-bolder mt-5 mb-1'>Invite your friends</h4>
            <Row tag='form' className='g-1' onSubmit={e => e.preventDefault()}>
              <Col lg='10'>
                <Label for='friendEmail' className='form-label'>
                  Enter your friend’s email address and invite them to join Vuexy 😍
                </Label>
                <Input id='friendEmail' type='email' placeholder='example@domain.com' />
              </Col>
              <Col lg='2' className='d-flex align-items-end'>
                <Button block color='primary'>
                  Send
                </Button>
              </Col>
            </Row>
            <h4 className='fw-bolder mt-4 mb-1'>Share the referral link</h4>
            <Row tag='form' className='g-1' onSubmit={e => e.preventDefault()}>
              <Col lg='9'>
                <Label for='referral-url' className='form-label'>
                  You can also copy and send it or share it on your social media. 🥳
                </Label>
                <InputGroup className='input-group-merge'>
                  <Input type='url' id='referral-url' defaultValue='https://1.envato.market/vuexy_admin' />
                  <InputGroupText tag='a' href='/' onClick={e => e.preventDefault()}>
                    Copy Link
                  </InputGroupText>
                </InputGroup>
              </Col>
              <Col lg='3' className='d-flex align-items-end'>
                <div className='social-btns'>
                  <Button color='facebook' className='me-50 btn-icon'>
                    <Facebook className='font-medium-2' />
                  </Button>
                  <Button color='twitter' className='me-50 btn-icon'>
                    <Twitter className='font-medium-2' />
                  </Button>
                  <Button color='linkedin' className='me-50 btn-icon'>
                    <Linkedin className='font-medium-2' />
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default ReferEarnModal
