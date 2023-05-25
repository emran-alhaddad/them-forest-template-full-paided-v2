// ** React Imports
import { useState } from 'react'

// ** Icons Imports
import * as Icon from 'react-feather'

// ** Reactstrap Imports
import {
  Nav,
  Row,
  Col,
  NavItem,
  NavLink,
  TabPane,
  TabContent,
  AccordionBody,
  AccordionItem,
  AccordionHeader,
  UncontrolledAccordion
} from 'reactstrap'

// ** Images
import illustration from '@src/assets/images/illustration/faq-illustrations.svg'

const Faqs = ({ data }) => {
  const dataToRender = []

  // ** States
  const [activeTab, setActiveTab] = useState('Payment')

  const toggleTab = tab => setActiveTab(tab)

  // eslint-disable-next-line
  Object.entries(data).forEach(([key, val]) => {
    dataToRender.push(val)
  })

  const renderTabs = () => {
    return dataToRender.map(item => {
      const IconTag = Icon[item.icon]
      return (
        <NavItem key={item.title} tag='li'>
          <NavLink active={activeTab === item.title} onClick={() => toggleTab(item.title)}>
            <IconTag size={18} className='me-1' />
            <span className='fw-bold'>{item.title}</span>
          </NavLink>
        </NavItem>
      )
    })
  }

  const renderTabContent = () => {
    return dataToRender.map(item => {
      const IconTag = Icon[item.icon]

      return (
        <TabPane key={item.title} tabId={item.title}>
          <div className='d-flex align-items-center'>
            <div className='avatar avatar-tag bg-light-primary me-1'>
              <IconTag size={20} />
            </div>
            <div>
              <h4 className='mb-0'>{item.title}</h4>
              <span>{item.subtitle}</span>
            </div>
          </div>
          {item.qandA.length ? (
            <UncontrolledAccordion className='accordion-margin mt-2' defaultOpen='0'>
              {item.qandA.map((r, index) => {
                return (
                  <AccordionItem key={index + 1}>
                    <AccordionHeader tag='h2' targetId={String(index + 1)}>
                      {r.question}
                    </AccordionHeader>
                    <AccordionBody accordionId={String(index + 1)}>{r.ans}</AccordionBody>
                  </AccordionItem>
                )
              })}
            </UncontrolledAccordion>
          ) : (
            <div className='text-center p-5'>
              <h5 className='p-1'>
                <Icon.Info size='19' className='me-25' /> No Results Found
              </h5>
            </div>
          )}
        </TabPane>
      )
    })
  }

  return (
    <div id='faq-tabs'>
      <Row>
        <Col lg='3' md='4' sm='12'>
          <div className='faq-navigation d-flex justify-content-between flex-column mb-2 mb-md-0'>
            <Nav tag='ul' className='nav-left' pills vertical>
              {renderTabs()}
            </Nav>
            <img
              alt='illustration'
              src={illustration}
              style={{ transform: 'scaleX(1)' }}
              className='img-fluid d-none d-md-block'
            />
          </div>
        </Col>
        <Col lg='9' md='8' sm='12'>
          <TabContent activeTab={activeTab}>{renderTabContent()}</TabContent>
        </Col>
      </Row>
    </div>
  )
}

export default Faqs
