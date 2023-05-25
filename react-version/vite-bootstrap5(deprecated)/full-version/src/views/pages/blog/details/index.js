// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Third Party Components
import axios from 'axios'
import classnames from 'classnames'
import {
  Share2,
  GitHub,
  Gitlab,
  Twitter,
  Bookmark,
  Facebook,
  Linkedin,
  CornerUpLeft,
  MessageSquare
} from 'react-feather'

// ** Utils
import { kFormatter } from '@utils'

// ** Custom Components
import Sidebar from '../BlogSidebar'
import Avatar from '@components/avatar'
import Breadcrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Form,
  Badge,
  Input,
  Label,
  Button,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'

// ** Styles
import '@styles/base/pages/page-blog.scss'

// ** Images
import cmtImg from '@src/assets/images/portrait/small/avatar-s-6.jpg'

const BlogDetails = () => {
  // ** States
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/blog/list/data/detail').then(res => setData(res.data))
  }, [])

  const badgeColorsArr = {
    Quote: 'light-info',
    Fashion: 'light-primary',
    Gaming: 'light-danger',
    Video: 'light-warning',
    Food: 'light-success'
  }

  const renderTags = () => {
    return data.blog.tags.map((tag, index) => {
      return (
        <a key={index} href='/' onClick={e => e.preventDefault()}>
          <Badge
            className={classnames({
              'me-50': index !== data.blog.tags.length - 1
            })}
            color={badgeColorsArr[tag]}
            pill
          >
            {tag}
          </Badge>
        </a>
      )
    })
  }

  const renderComments = () => {
    return data.comments.map(comment => {
      return (
        <Card className='mb-3' key={comment.userFullName}>
          <CardBody>
            <div className='d-flex'>
              <div>
                <Avatar className='me-75' img={comment.avatar} imgHeight='38' imgWidth='38' />
              </div>
              <div>
                <h6 className='fw-bolder mb-25'>{comment.userFullName}</h6>
                <CardText>{comment.commentedAt}</CardText>
                <CardText>{comment.commentText}</CardText>
                <a href='/' onClick={e => e.preventDefault()}>
                  <div className='d-inline-flex align-items-center'>
                    <CornerUpLeft size={18} className='me-50' />
                    <span>Reply</span>
                  </div>
                </a>
              </div>
            </div>
          </CardBody>
        </Card>
      )
    })
  }

  return (
    <Fragment>
      <Breadcrumbs title='Blog Details' data={[{ title: 'Pages' }, { title: 'Blog' }, { title: 'Details' }]} />
      <div className='blog-wrapper'>
        <div className='content-detached content-left'>
          <div className='content-body'>
            {data !== null ? (
              <Row>
                <Col sm='12'>
                  <Card className='mb-3'>
                    <CardImg src={data.blog.img} className='img-fluid' top />
                    <CardBody>
                      <CardTitle tag='h4'>{data.blog.title}</CardTitle>
                      <div className='d-flex'>
                        <Avatar className='me-50' img={data.blog.avatar} imgHeight='24' imgWidth='24' />
                        <div>
                          <small className='text-muted me-25'>by</small>
                          <small>
                            <a className='text-body' href='/' onClick={e => e.preventDefault()}>
                              {data.blog.userFullName}
                            </a>
                          </small>
                          <span className='text-muted ms-50 me-25'>|</span>
                          <small className='text-muted'>{data.blog.createdTime}</small>
                        </div>
                      </div>
                      <div className='my-1 py-25'>{renderTags()}</div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.blog.content
                        }}
                      ></div>
                      <div className='d-flex'>
                        <div>
                          <Avatar img={cmtImg} className='me-2' imgHeight='60' imgWidth='60' />
                        </div>
                        <div>
                          <h6 className='fw-bolder'>Willie Clark</h6>
                          <CardText className='mb-0'>
                            Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends
                            through photos and quotes by influential creatives and web designer around the world.
                          </CardText>
                        </div>
                      </div>
                      <hr className='my-2' />
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center'>
                          <div className='d-flex align-items-center me-1'>
                            <a className='me-50' href='/' onClick={e => e.preventDefault()}>
                              <MessageSquare size={21} className='text-body align-middle' />
                            </a>
                            <a href='/' onClick={e => e.preventDefault()}>
                              <div className='text-body align-middle'>{kFormatter(data.blog.comments)}</div>
                            </a>
                          </div>
                          <div className='d-flex align-items-cente'>
                            <a className='me-50' href='/' onClick={e => e.preventDefault()}>
                              <Bookmark size={21} className='text-body align-middle' />
                            </a>
                            <a href='/' onClick={e => e.preventDefault()}>
                              <div className='text-body align-middle'>{data.blog.bookmarked}</div>
                            </a>
                          </div>
                        </div>
                        <UncontrolledDropdown className='dropdown-icon-wrapper'>
                          <DropdownToggle tag='span'>
                            <Share2 size={21} className='text-body cursor-pointer' />
                          </DropdownToggle>
                          <DropdownMenu end>
                            <DropdownItem className='py-50 px-1'>
                              <GitHub size={18} />
                            </DropdownItem>
                            <DropdownItem className='py-50 px-1'>
                              <Gitlab size={18} />
                            </DropdownItem>
                            <DropdownItem className='py-50 px-1'>
                              <Facebook size={18} />
                            </DropdownItem>
                            <DropdownItem className='py-50 px-1'>
                              <Twitter size={18} />
                            </DropdownItem>
                            <DropdownItem className='py-50 px-1'>
                              <Linkedin size={18} />
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm='12' id='blogComment'>
                  <h6 className='section-label'>Comment</h6>
                  {renderComments()}
                </Col>
                <Col sm='12'>
                  <h6 className='section-label'>Leave a Comment</h6>
                  <Card>
                    <CardBody>
                      <Form className='form' onSubmit={e => e.preventDefault()}>
                        <Row>
                          <Col sm='6'>
                            <div className='mb-2'>
                              <Input placeholder='Name' />
                            </div>
                          </Col>
                          <Col sm='6'>
                            <div className='mb-2'>
                              <Input type='email' placeholder='Email' />
                            </div>
                          </Col>
                          <Col sm='6'>
                            <div className='mb-2'>
                              <Input type='url' placeholder='Website' />
                            </div>
                          </Col>
                          <Col sm='12'>
                            <div className='mb-2'>
                              <Input className='mb-2' type='textarea' rows='4' placeholder='Comment' />
                            </div>
                          </Col>
                          <Col sm='12'>
                            <div className='form-check mb-2'>
                              <Input type='checkbox' id='save-data-checkbox' />
                              <Label className='form-check-label' for='save-data-checkbox'>
                                Save my name, email, and website in this browser for the next time I comment.
                              </Label>
                            </div>
                          </Col>
                          <Col sm='12'>
                            <Button color='primary'>Post Comment</Button>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ) : null}
          </div>
        </div>
        <Sidebar />
      </div>
    </Fragment>
  )
}

export default BlogDetails
