// ** Reactstrap Imports
import { Pagination, PaginationItem, PaginationLink, Row, Col } from 'reactstrap'

const PaginationPositions = () => {
  return (
    <Row>
      <Col xl='4' lg='12'>
        <h5 className='text-start'>Left Aligned</h5>
        <Pagination className='d-flex justify-content-start mt-2'>
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
        </Pagination>
      </Col>
      <Col xl='4' lg='12'>
        <h5 className='text-center'>Center Aligned</h5>
        <Pagination className='d-flex justify-content-center mt-2'>
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
        </Pagination>
      </Col>
      <Col xl='4' lg='12'>
        <h5 className='text-end'>Right Aligned</h5>
        <Pagination className='d-flex justify-content-end mt-2'>
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
        </Pagination>
      </Col>
    </Row>
  )
}
export default PaginationPositions
