// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// ** Third Party Components
import ReactPaginate from 'react-paginate'

const PaginationSuccess = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Success</CardTitle>
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
          nextLinkClassName='page-link'
          pageLinkClassName='page-link'
          breakLinkClassName='page-link'
          nextClassName='page-item next'
          previousLinkClassName='page-link'
          previousClassName='page-item prev'
          containerClassName='pagination react-paginate pagination-success'
        />
      </CardBody>
    </Card>
  )
}
export default PaginationSuccess
