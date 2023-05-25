// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// ** Third Party Components
import ReactPaginate from 'react-paginate'

const PaginationWarning = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Warning</CardTitle>
      </CardHeader>
      <CardBody>
        <ReactPaginate
          nextLabel=''
          pageCount={10}
          breakLabel='...'
          previousLabel=''
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          activeClassName='active'
          pageClassName='page-item'
          breakClassName='page-item'
          pageLinkClassName='page-link'
          nextLinkClassName='page-link'
          breakLinkClassName='page-link'
          nextClassName='page-item next'
          previousClassName='page-item prev'
          previousLinkClassName='page-link'
          containerClassName='pagination react-paginate pagination-warning'
        />
      </CardBody>
    </Card>
  )
}
export default PaginationWarning
