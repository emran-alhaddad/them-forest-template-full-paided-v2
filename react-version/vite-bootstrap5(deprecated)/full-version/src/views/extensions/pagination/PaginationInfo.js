// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
const PaginationInfo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Info</CardTitle>
      </CardHeader>
      <CardBody>
        <ReactPaginate
          pageCount={10}
          nextLabel=''
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
          containerClassName='pagination react-paginate pagination-info'
        />
      </CardBody>
    </Card>
  )
}
export default PaginationInfo
