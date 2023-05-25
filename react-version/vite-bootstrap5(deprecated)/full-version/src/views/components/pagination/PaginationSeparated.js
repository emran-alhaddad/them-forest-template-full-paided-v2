// ** Reactstrap Imports
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PaginationSeparated = () => {
  return (
    <Pagination className='d-flex mt-3'>
      <PaginationItem className='prev-item'>
        <PaginationLink href='#' onClick={e => e.preventDefault()}></PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#' onClick={e => e.preventDefault()}>
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#' onClick={e => e.preventDefault()}>
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#' onClick={e => e.preventDefault()}>
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href='#' onClick={e => e.preventDefault()}>
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#' onClick={e => e.preventDefault()}>
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#' onClick={e => e.preventDefault()}>
          6
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#' onClick={e => e.preventDefault()}>
          7
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className='next-item'>
        <PaginationLink href='#' onClick={e => e.preventDefault()}></PaginationLink>
      </PaginationItem>
    </Pagination>
  )
}
export default PaginationSeparated
