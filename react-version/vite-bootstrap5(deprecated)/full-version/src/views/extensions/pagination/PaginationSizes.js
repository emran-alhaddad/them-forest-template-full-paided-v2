// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from 'reactstrap'

// ** Third Party Components
import ReactPaginate from 'react-paginate'

const PaginationSizes = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Sizes</CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col lg='4' sm='12'>
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
              nextClassName='page-item next'
              breakLinkClassName='page-link'
              previousLinkClassName='page-link'
              previousClassName='page-item prev'
              containerClassName='pagination react-paginate pagination-lg'
            />
          </Col>
          <Col lg='4' sm='12'>
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
              containerClassName='pagination react-paginate'
            />
          </Col>
          <Col lg='4' sm='12'>
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
              containerClassName='pagination react-paginate pagination-sm'
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
export default PaginationSizes
