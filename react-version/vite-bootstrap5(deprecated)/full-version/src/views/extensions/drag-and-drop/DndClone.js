// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import { ReactSortable } from 'react-sortablejs'

// ** Custom Hooks
import { useRTL } from '@hooks/useRTL'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Badge } from 'reactstrap'

const DndClone = () => {
  // ** State
  const [isRtl] = useRTL()

  const source1 = [
    {
      text: 'Youtube',
      color: 'light-secondary'
    },
    {
      text: 'Facebook',
      color: 'light-primary'
    },
    {
      text: 'Google',
      color: 'light-success'
    },
    {
      text: 'Instagram',
      color: 'light-danger'
    },
    {
      text: 'Twitter',
      color: 'light-info'
    },
    {
      text: 'Discord',
      color: 'light-warning'
    }
  ]
  const source2 = [
    {
      text: 'Github',
      color: 'light-secondary'
    },
    {
      text: 'Gitlab',
      color: 'light-primary'
    },
    {
      text: 'Slack',
      color: 'light-success'
    },
    {
      text: 'Pinterest',
      color: 'light-danger'
    },
    {
      text: 'Tinder',
      color: 'light-info'
    },
    {
      text: 'Amazon',
      color: 'light-warning'
    }
  ]

  const [list, setList] = useState(source1)
  const [list2, setList2] = useState(source2)

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Clone List</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          Add <code>pull:clone</code> with your group prop to clone items.
        </CardText>
        <Row>
          <Col md='6' sm='12'>
            <h4 className='my-1'>Badge Source 1</h4>
            <ReactSortable
              list={list}
              setList={setList}
              group={{ name: 'shared-badge-group', pull: 'clone' }}
              className={classnames('demo-inline-spacing sortable', {
                'flex-row-reverse': isRtl
              })}
            >
              {list.map((item, index) => {
                return (
                  <Badge className='draggable' key={`${item.text}-${index}`} color={item.color} pill>
                    {item.text}
                  </Badge>
                )
              })}
            </ReactSortable>
          </Col>
          <Col md='6' sm='12'>
            <h4 className='my-1'>Badge Source 2</h4>
            <ReactSortable
              list={list2}
              setList={setList2}
              group={{ name: 'shared-badge-group', pull: 'clone' }}
              className={classnames('demo-inline-spacing sortable', {
                'flex-row-reverse': isRtl
              })}
            >
              {list2.map((item, index) => {
                return (
                  <Badge className='draggable' key={`${item.text}-${index}`} color={item.color} pill>
                    {item.text}
                  </Badge>
                )
              })}
            </ReactSortable>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default DndClone
