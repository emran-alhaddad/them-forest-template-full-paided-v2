// ** Reactstrap Imports
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const DropdownDirections = () => {
  return (
    <div className='demo-inline-spacing'>
      <UncontrolledButtonDropdown>
        <DropdownToggle color='primary' caret>
          Drop bottom right
        </DropdownToggle>
        <DropdownMenu end>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Option 1
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Option 2
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Option 3
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <UncontrolledButtonDropdown direction='up'>
        <DropdownToggle color='primary' caret>
          Drop Up
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Option 1
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Option 2
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Option 3
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <UncontrolledButtonDropdown direction='end'>
        <DropdownToggle color='primary' caret>
          Drop Right
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Option 1
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Option 2
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Option 3
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <UncontrolledButtonDropdown direction='start'>
        <DropdownToggle color='primary' caret>
          Drop Left
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Option 1
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Option 2
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Option 3
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    </div>
  )
}
export default DropdownDirections
