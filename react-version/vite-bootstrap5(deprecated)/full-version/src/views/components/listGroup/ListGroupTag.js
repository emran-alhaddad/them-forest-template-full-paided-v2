// ** Reactstrap Imports
import { ListGroup, ListGroupItem } from 'reactstrap'

const ListGroupTag = () => {
  return (
    <ListGroup tag='div'>
      <ListGroupItem action tag='a' href='#' active onClick={e => e.preventDefault()}>
        Cras justo odio
      </ListGroupItem>
      <ListGroupItem action tag='a' href='#' onClick={e => e.preventDefault()}>
        Dapibus ac facilisis in
      </ListGroupItem>
      <ListGroupItem action tag='a' href='#' onClick={e => e.preventDefault()}>
        Morbi leo risus
      </ListGroupItem>
      <ListGroupItem action tag='a' href='#' onClick={e => e.preventDefault()}>
        Porta ac consectetur ac
      </ListGroupItem>
      <ListGroupItem action tag='a' href='#' onClick={e => e.preventDefault()}>
        consectetur adipisicing elit. Enim, exercitationem..
      </ListGroupItem>
      <ListGroupItem action tag='a' href='#' disabled onClick={e => e.preventDefault()}>
        Vestibulum at eros
      </ListGroupItem>
    </ListGroup>
  )
}
export default ListGroupTag
