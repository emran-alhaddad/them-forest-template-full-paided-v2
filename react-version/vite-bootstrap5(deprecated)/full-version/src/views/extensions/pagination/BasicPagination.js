// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// ** Third Party Components
import ReactPaginate from 'react-paginate'

const BasicPagination = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Basic</CardTitle>
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
          previousLinkClassName='page-link'
          nextClassName='page-item next-item'
          previousClassName='page-item prev-item'
          containerClassName='pagination react-paginate no-navigation'
        />
      </CardBody>
    </Card>
  )
}
export default BasicPagination
