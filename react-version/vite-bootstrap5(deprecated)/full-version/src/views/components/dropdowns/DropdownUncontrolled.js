// ** Reactstrap Imports
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const DropdownUncontrolled = () => {
  return (
    <UncontrolledButtonDropdown>
      <DropdownToggle color='primary' caret>
        Uncontrolled
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Option 1
        </DropdownItem>
        <DropdownItem href='/' tag='a' disabled onClick={e => e.preventDefault()}>
          Option 2
        </DropdownItem>
        <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Option 3
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledButtonDropdown>
  )
}
export default DropdownUncontrolled
