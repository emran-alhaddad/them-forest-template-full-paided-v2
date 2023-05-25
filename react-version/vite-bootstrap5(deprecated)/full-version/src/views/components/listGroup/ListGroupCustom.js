// ** Reactstrap Imports
import { ListGroup, ListGroupItem, CardText } from 'reactstrap'

const ListGroupCustom = () => {
  return (
    <ListGroup tag='div'>
      <ListGroupItem tag='a' href='/' action active onClick={e => e.preventDefault()}>
        <div className='d-flex justify-content-between w-100'>
          <h5 className='mb-1 text-white'>List group item heading</h5>
          <small className='text-secondary'>3 days ago</small>
        </div>
        <CardText>
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
        </CardText>
        <small className='text-secondary'>Donec id elit non mi porta.</small>
      </ListGroupItem>
      <ListGroupItem tag='a' href='/' action onClick={e => e.preventDefault()}>
        <div className='d-flex justify-content-between w-100'>
          <h5 className='mb-1'>List group item heading</h5>
          <small className='text-secondary'>3 days ago</small>
        </div>
        <CardText>
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
        </CardText>
        <small className='text-secondary'>Donec id elit non mi porta.</small>
      </ListGroupItem>
      <ListGroupItem tag='a' href='/' action onClick={e => e.preventDefault()}>
        <div className='d-flex justify-content-between w-100'>
          <h5 className='mb-1'>List group item heading</h5>
          <small className='text-secondary'>3 days ago</small>
        </div>
        <CardText>
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
        </CardText>
        <small className='text-secondary'>Donec id elit non mi porta.</small>
      </ListGroupItem>
    </ListGroup>
  )
}
export default ListGroupCustom
