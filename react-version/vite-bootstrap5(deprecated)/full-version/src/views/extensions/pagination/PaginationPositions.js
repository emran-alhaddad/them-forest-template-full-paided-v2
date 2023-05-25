// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from 'reactstrap'

// ** Third Party Components
import ReactPaginate from 'react-paginate'

const PaginationPositions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Positions</CardTitle>
      </CardHeader>{' '}
      <CardBody>
        <Row>
          <Col xl='4' md='12'>
            <h5 className='text-start'>Left Aligned</h5>
            <ReactPaginate
              nextLabel=''
              pageCount={5}
              breakLabel='...'
              previousLabel=''
              activeClassName='active'
              pageClassName='page-item'
              breakClassName='page-item'
              nextLinkClassName='page-link'
              pageLinkClassName='page-link'
              breakLinkClassName='page-link'
              nextClassName='page-item next'
              previousLinkClassName='page-link'
              previousClassName='page-item prev'
              containerClassName='pagination react-paginate justify-content-start'
            />
          </Col>
          <Col xl='4' md='12'>
            <h5 className='text-center'>Center Aligned</h5>
            <ReactPaginate
              nextLabel=''
              pageCount={5}
              breakLabel='...'
              previousLabel=''
              activeClassName='active'
              pageClassName='page-item'
              breakClassName='page-item'
              pageLinkClassName='page-link'
              nextLinkClassName='page-link'
              breakLinkClassName='page-link'
              nextClassName='page-item next'
              previousLinkClassName='page-link'
              previousClassName='page-item prev'
              containerClassName='pagination react-paginate justify-content-center'
            />
          </Col>
          <Col xl='4' md='12'>
            <h5 className='text-end'>Right Aligned</h5>
            <ReactPaginate
              nextLabel=''
              pageCount={5}
              breakLabel='...'
              previousLabel=''
              activeClassName='active'
              pageClassName='page-item'
              breakClassName='page-item'
              nextLinkClassName='page-link'
              pageLinkClassName='page-link'
              breakLinkClassName='page-link'
              nextClassName='page-item next'
              previousLinkClassName='page-link'
              previousClassName='page-item prev'
              containerClassName='pagination react-paginate justify-content-end'
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
export default PaginationPositions
