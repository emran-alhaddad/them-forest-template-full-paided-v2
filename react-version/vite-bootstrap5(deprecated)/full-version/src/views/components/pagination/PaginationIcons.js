// ** Reactstrap Imports
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

// ** Icons Imports
import { ChevronLeft, ChevronRight } from 'react-feather'

const PaginationIcons = () => {
  return (
    <Pagination className='d-flex mt-3'>
      <PaginationItem>
        <PaginationLink href='#' first onClick={e => e.preventDefault()}>
          <ChevronLeft size={15} />
        </PaginationLink>
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
      <PaginationItem active>
        <PaginationLink href='#' onClick={e => e.preventDefault()}>
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
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
        <PaginationLink href='#' last onClick={e => e.preventDefault()}>
          <ChevronRight size={15} />
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  )
}
export default PaginationIcons
