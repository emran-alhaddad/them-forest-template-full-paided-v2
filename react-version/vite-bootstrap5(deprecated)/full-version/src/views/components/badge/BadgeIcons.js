// ** Reactstrap Imports
import { Badge } from 'reactstrap'

// ** Icons Imports
import { Star } from 'react-feather'

const BadgeIcons = () => {
  return (
    <div className='demo-inline-spacing'>
      <Badge color='primary'>
        <Star size={12} className='align-middle me-25' />
        <span className='align-middle ms-25'>Primary</span>
      </Badge>
      <Badge color='secondary'>
        <Star size={12} className='align-middle me-25' />
        <span className='align-middle ms-25'>Secondary</span>
      </Badge>
      <Badge color='success'>
        <Star size={12} className='align-middle me-25' />
        <span className='align-middle ms-25'>Success</span>
      </Badge>
      <Badge color='danger'>
        <Star size={12} className='align-middle me-25' />
        <span className='align-middle ms-25'>Danger</span>
      </Badge>
      <Badge color='warning'>
        <Star size={12} className='align-middle me-25' />
        <span className='align-middle ms-25'>Warning</span>
      </Badge>
      <Badge color='info'>
        <Star size={12} className='align-middle me-25' />
        <span className='align-middle ms-25'>Info</span>
      </Badge>
      <Badge color='dark'>
        <Star size={12} className='align-middle me-25' />
        <span className='align-middle ms-25'>Dark</span>
      </Badge>
    </div>
  )
}
export default BadgeIcons
