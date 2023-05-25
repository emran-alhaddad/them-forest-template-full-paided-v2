// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// ** Third Party Components
import ReactPaginate from 'react-paginate'

const Previous = () => {
  return <span className='align-middle d-none d-md-inline-block'>Prev</span>
}

const Next = () => {
  return <span className='align-middle d-none d-md-inline-block'>Next </span>
}

const IconTextPagination = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>With icon and text</CardTitle>
      </CardHeader>
      <CardBody>
        <ReactPaginate
          pageCount={10}
          breakLabel='...'
          nextLabel={<Next />}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          activeClassName='active'
          pageClassName='page-item'
          breakClassName='page-item'
          previousLabel={<Previous />}
          nextLinkClassName='page-link'
          pageLinkClassName='page-link'
          nextClassName='page-item next'
          breakLinkClassName='page-link'
          previousClassName='page-item prev'
          previousLinkClassName='page-link'
          containerClassName='pagination react-paginate'
        />
      </CardBody>
    </Card>
  )
}
export default IconTextPagination
