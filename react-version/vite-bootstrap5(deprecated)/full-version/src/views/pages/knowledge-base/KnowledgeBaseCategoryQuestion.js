// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Third Party Components
import axios from 'axios'
import { Info, Smartphone } from 'react-feather'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import { Row, Col, Card, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap'

const KnowledgeBaseCategoryQuestion = () => {
  // ** State
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/faq/data/question').then(res => setData(res.data))
  }, [])

  const renderRelatedQuestions = () => {
    return data.relatedQuestions.map(i => (
      <ListGroupItem className='text-body' tag='a' href='/' key={i.id} onClick={e => e.preventDefault()}>
        {i.question}
      </ListGroupItem>
    ))
  }

  return (
    <Fragment>
      <Breadcrumbs
        title='Knowledge Base'
        data={[{ title: 'Pages' }, { title: 'Knowledge Base' }, { title: 'Category' }, { title: 'Question' }]}
      />
      {data !== null ? (
        <div id='knowledge-base-question'>
          <Row>
            <Col lg='3' md={{ size: 5, order: 1 }} sm={{ size: 12 }} xs={{ order: 2 }}>
              <Card>
                <CardBody>
                  <h6 className='kb-title'>
                    <Info size={20} className='me-50' />
                    <span>Related Questions</span>
                  </h6>
                  <ListGroup className='list-group-circle mt-1'>{renderRelatedQuestions()}</ListGroup>
                </CardBody>
              </Card>
            </Col>
            <Col lg='9' md={{ size: 7, order: 2 }} sm={{ size: 12 }} xs={{ order: 1 }}>
              <Card>
                <CardBody>
                  <CardTitle className='mb-1'>
                    <Smartphone className='font-medium-5  me-25' /> <span>{data.title}</span>
                  </CardTitle>
                  <p className='mb-2'>Last updated on {data.lastUpdated}</p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.content
                    }}
                  ></div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      ) : null}
    </Fragment>
  )
}

export default KnowledgeBaseCategoryQuestion
