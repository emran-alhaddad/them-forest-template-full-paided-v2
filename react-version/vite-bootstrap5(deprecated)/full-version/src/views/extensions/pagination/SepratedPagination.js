// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// ** Third Party Components
import ReactPaginate from 'react-paginate'

const SeparatedPagination = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Separated</CardTitle>
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
          previousLinkClassName='page-link'
          nextClassName='page-item next-item'
          previousClassName='page-item prev-item'
          containerClassName='pagination react-paginate'
        />
      </CardBody>
    </Card>
  )
}
export default SeparatedPagination
