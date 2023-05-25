// ** Reactstrap Imports
import { Pagination, PaginationItem, PaginationLink, Row, Col } from 'reactstrap'

const PaginationPositions = () => {
  return (
    <Row className='align-items-center'>
      <Col xl='4' lg='12'>
        <Pagination size='lg'>
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
        <Pagination>
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
        <Pagination size='sm'>
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
