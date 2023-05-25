// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import { Nav, NavItem, NavLink } from 'reactstrap'

const PillThemes = () => {
  // ** States
  const [pillInfo, setPillInfo] = useState(1)
  const [pillDanger, setPillDanger] = useState(1)
  const [pillSuccess, setPillSuccess] = useState(1)
  const [pillWarning, setPillWarning] = useState(1)
  const [pillSecondary, setPillSecondary] = useState(1)

  const toggleInfo = tab => setPillInfo(tab)
  const toggleDanger = tab => setPillDanger(tab)
  const toggleSuccess = tab => setPillSuccess(tab)
  const toggleWarning = tab => setPillWarning(tab)
  const toggleSecondary = tab => setPillSecondary(tab)

  return (
    <Fragment>
      <h6>Secondary</h6>
      <Nav pills className='nav-pill-secondary my-2'>
        <NavItem onClick={() => toggleSecondary(1)}>
          <NavLink active={pillSecondary === 1}>Active</NavLink>
        </NavItem>
        <NavItem onClick={() => toggleSecondary(2)}>
          <NavLink active={pillSecondary === 2}>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem onClick={() => toggleSecondary(4)}>
          <NavLink active={pillSecondary === 4}>Link</NavLink>
        </NavItem>
      </Nav>

      <h6>Success</h6>
      <Nav pills className='nav-pill-success my-2'>
        <NavItem onClick={() => toggleSuccess(1)}>
          <NavLink active={pillSuccess === 1}>Active</NavLink>
        </NavItem>
        <NavItem onClick={() => toggleSuccess(2)}>
          <NavLink active={pillSuccess === 2}>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem onClick={() => toggleSuccess(4)}>
          <NavLink active={pillSuccess === 4}>Link</NavLink>
        </NavItem>
      </Nav>

      <h6>Danger</h6>

      <Nav pills className='nav-pill-danger my-2'>
        <NavItem onClick={() => toggleDanger(1)}>
          <NavLink active={pillDanger === 1}>Active</NavLink>
        </NavItem>
        <NavItem onClick={() => toggleDanger(2)}>
          <NavLink active={pillDanger === 2}>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem onClick={() => toggleDanger(4)}>
          <NavLink active={pillDanger === 4}>Link</NavLink>
        </NavItem>
      </Nav>

      <h6>Warning</h6>

      <Nav pills className='nav-pill-warning my-2'>
        <NavItem onClick={() => toggleWarning(1)}>
          <NavLink active={pillWarning === 1}>Active</NavLink>
        </NavItem>
        <NavItem onClick={() => toggleWarning(2)}>
          <NavLink active={pillWarning === 2}>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem onClick={() => toggleWarning(4)}>
          <NavLink active={pillWarning === 4}>Link</NavLink>
        </NavItem>
      </Nav>

      <h6>Info</h6>

      <Nav pills className='nav-pill-info my-2'>
        <NavItem onClick={() => toggleInfo(1)}>
          <NavLink active={pillInfo === 1}>Active</NavLink>
        </NavItem>
        <NavItem onClick={() => toggleInfo(2)}>
          <NavLink active={pillInfo === 2}>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem onClick={() => toggleInfo(4)}>
          <NavLink active={pillInfo === 4}>Link</NavLink>
        </NavItem>
      </Nav>
    </Fragment>
  )
}
export default PillThemes
