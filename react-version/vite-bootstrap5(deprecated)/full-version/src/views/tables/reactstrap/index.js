// ** React Imports
import { Fragment, useEffect } from 'react'

// ** Reactstrap Imports
import { Row, Col, CardBody, CardText } from 'reactstrap'

// ** Third Party Components
import prism from 'prismjs'

// ** Demo Components
import TableDark from './TableDark'
import TableBasic from './TableBasic'
import TableHover from './TableHover'
import TableSmall from './TableSmall'
import TableStriped from './TableStriped'
import TableBordered from './TableBordered'
import TableTheadDark from './TableTheadDark'
import TableContextual from './TableContextual'
import TableResponsive from './TableResponsive'
import TableBorderless from './TableBorderless'
import TableTheadLight from './TableTheadLight'
import TableStripedDark from './TableStripedDark'

// ** Custom Components
import Card from '@components/card-snippet'
import Breadcrumbs from '@components/breadcrumbs'

// ** Source Code
import {
  tableDark,
  tableBasic,
  tableHover,
  tableSmall,
  tableStriped,
  tableBordered,
  tableBorderless,
  tableResponsive,
  tableContextual,
  tableStripedDark,
  tableTheadOptions
} from './TableSourceCode'

const Tables = () => {
  useEffect(() => {
    prism.highlightAll()
  })

  return (
    <Fragment>
      <Breadcrumbs title='Reactstrap Tables' data={[{ title: 'Forms & Tables' }, { title: 'Tables' }]} />
      <Row>
        <Col sm='12'>
          <Card title='Basic' code={tableBasic} noBody>
            <TableBasic />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Dark' code={tableDark} noBody>
            <CardBody>
              <CardText>
                Use prop <code>dark</code> to create a dark inverted table.
              </CardText>
            </CardBody>
            <TableDark />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Table head Options' code={tableTheadOptions} noBody>
            <CardBody>
              <CardText>
                Similar to tables and dark tables, use the modifier classes <code>.table-dark</code> to make{' '}
                <code>&lt;thead&gt;</code> appear dark.
              </CardText>
            </CardBody>
            <TableTheadDark />
            <CardBody className='mt-2'>
              <p className='m-0'>
                Use the modifier class <code>.table-light</code> to make <code>&lt;thead&gt;</code> appear light.
              </p>
            </CardBody>
            <TableTheadLight />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Striped' code={tableStriped} noBody>
            <CardBody>
              <CardText>
                Use prop <code>striped</code> to create a striped table.
              </CardText>
            </CardBody>
            <TableStriped />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Striped Dark' code={tableStripedDark} noBody>
            <CardBody>
              <CardText>
                Use props <code>striped</code> & <code>dark</code> to create a dark striped table.
              </CardText>
            </CardBody>
            <TableStripedDark />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Bordered' code={tableBordered} noBody>
            <CardBody>
              <CardText>
                Use prop <code>bordered</code> to create a bordered table.
              </CardText>
            </CardBody>
            <TableBordered />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Borderless' code={tableBorderless} noBody>
            <CardBody>
              <CardText>
                Use prop <code>borderless</code> to create a borderless table.
              </CardText>
            </CardBody>
            <TableBorderless />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Hoverable' code={tableHover} noBody>
            <CardBody>
              <CardText>
                Use prop <code>hover</code> to create a hoverable table.
              </CardText>
            </CardBody>
            <TableHover />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Small' code={tableSmall} noBody>
            <CardBody>
              <CardText>
                Use prop <code>size="sm"</code> to create a small table.
              </CardText>
            </CardBody>
            <TableSmall />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Contextual classes' code={tableContextual} noBody>
            <CardBody>
              <CardText>
                Use class <code>table-[colorName]</code> with <code>&lt;tr&gt;</code> for contextual rows.
              </CardText>
            </CardBody>
            <TableContextual />
          </Card>
        </Col>
        <Col className='my-2' sm='12'>
          <h5 className='mb-1'>Table without card</h5>
          <TableBasic />
        </Col>
        <Col sm='12'>
          <Card title='Responsive' code={tableResponsive} noBody>
            <CardBody>
              <CardText>
                Use prop <code>responsive</code> to make your table responsive.
              </CardText>
            </CardBody>
            <TableResponsive />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Tables
