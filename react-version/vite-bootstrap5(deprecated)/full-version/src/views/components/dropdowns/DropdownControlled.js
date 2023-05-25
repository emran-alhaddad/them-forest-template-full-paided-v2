// ** React Imports
import { useState } from 'react'

// ** Reactstrap Imports
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const DropdownControlled = () => {
  // ** States
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
      <DropdownToggle color='primary' caret>
        Controlled
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
    </ButtonDropdown>
  )
}
export default DropdownControlled
