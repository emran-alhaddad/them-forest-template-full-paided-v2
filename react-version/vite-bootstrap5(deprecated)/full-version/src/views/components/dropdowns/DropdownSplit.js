// ** Reactstrap Imports
import { Button, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const DropdownSplit = () => {
  return (
    <div className='demo-inline-spacing'>
      <UncontrolledButtonDropdown>
        <Button color='primary'>Primary</Button>
        <DropdownToggle className='dropdown-toggle-split' color='primary' caret></DropdownToggle>
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
          <DropdownItem divider></DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Separated Link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <UncontrolledButtonDropdown>
        <Button color='secondary'>Secondary</Button>
        <DropdownToggle className='dropdown-toggle-split' color='secondary' caret></DropdownToggle>
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
          <DropdownItem divider></DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Separated Link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <UncontrolledButtonDropdown>
        <Button color='success'>Success</Button>
        <DropdownToggle className='dropdown-toggle-split' color='success' caret></DropdownToggle>
        <DropdownMenu end>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Option 1
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Option 2
          </DropdownItem>
          <DropdownItem divider></DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Separated Link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <UncontrolledButtonDropdown>
        <Button color='danger'>Danger</Button>
        <DropdownToggle className='dropdown-toggle-split' color='danger' caret></DropdownToggle>
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
          <DropdownItem divider></DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Separated Link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <UncontrolledButtonDropdown>
        <Button color='warning'>Warning</Button>
        <DropdownToggle className='dropdown-toggle-split' color='warning' caret></DropdownToggle>
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
          <DropdownItem divider></DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Separated Link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <UncontrolledButtonDropdown>
        <Button color='info'>Info</Button>
        <DropdownToggle className='dropdown-toggle-split' color='info' caret></DropdownToggle>
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
          <DropdownItem divider></DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Separated Link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <UncontrolledButtonDropdown>
        <Button color='dark'>Dark</Button>
        <DropdownToggle className='dropdown-toggle-split' color='dark' caret></DropdownToggle>
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
          <DropdownItem divider></DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
            Separated Link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    </div>
  )
}
export default DropdownSplit
