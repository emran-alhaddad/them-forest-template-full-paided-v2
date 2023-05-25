// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// ** Third Party Components
import ReactPaginate from 'react-paginate'

const IconPagination = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Icon Only</CardTitle>
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
          nextClassName='page-item next'
          breakLinkClassName='page-link'
          previousLinkClassName='page-link'
          previousClassName='page-item prev'
          containerClassName='pagination react-paginate'
        />
      </CardBody>
    </Card>
  )
}
export default IconPagination
