// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
const PaginationDanger = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Danger</CardTitle>
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
          previousLinkClassName='page-link'
          previousClassName='page-item prev'
          containerClassName='pagination react-paginate pagination-danger'
        />
      </CardBody>
    </Card>
  )
}
export default PaginationDanger
