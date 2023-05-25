// ** Reactstrap Imports
import { Badge } from 'reactstrap'

// ** Icons Imports
import { Link } from 'react-feather'

const BadgeLink = () => {
  return (
    <Badge color='primary' href='#'>
      <Link size={12} className='me-25' />
      <span className='align-middle'>Link Badge</span>
    </Badge>
  )
}
export default BadgeLink
