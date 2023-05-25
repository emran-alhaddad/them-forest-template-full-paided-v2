import { useState } from 'react'

import { Row, Col, Input, InputGroup, Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

import { Edit } from 'react-feather'

const InputGroupDropdowns = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [dropdownIcon, setDropdownIcon] = useState(false)
  const [dropdownRight, setDropdownRight] = useState(false)

  const toggleDropDown = () => {
    setDropdownOpen(!dropdownOpen)
  }
  const toggleDropdownIcon = () => {
    setDropdownIcon(!dropdownIcon)
  }
  const toggleDropDownRight = () => {
    setDropdownRight(!dropdownRight)
  }

  return (
    <Row>
      <Col md='6' sm='12'>
        <InputGroup>
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropDown}>
            <DropdownToggle color='primary' caret outline>
              Action
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem className='w-100'>Action 1</DropdownItem>
              <DropdownItem className='w-100' disabled>
                Action
              </DropdownItem>
              <DropdownItem className='w-100' divider />
              <DropdownItem className='w-100'>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Input />
        </InputGroup>
      </Col>
      <Col md='6' sm='12'>
        <InputGroup>
          <Dropdown isOpen={dropdownIcon} toggle={toggleDropdownIcon}>
            <DropdownToggle color='primary' caret outline>
              <Edit size={12} />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem className='w-100'>Action 1</DropdownItem>
              <DropdownItem className='w-100' disabled>
                Action
              </DropdownItem>
              <DropdownItem className='w-100' divider />
              <DropdownItem className='w-100'>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Input />
          <Dropdown isOpen={dropdownRight} toggle={toggleDropDownRight}>
            <DropdownToggle color='primary' outline caret>
              Action
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem className='w-100'>Action 1</DropdownItem>
              <DropdownItem className='w-100' disabled>
                Action
              </DropdownItem>
              <DropdownItem className='w-100' divider />
              <DropdownItem className='w-100'>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </InputGroup>
      </Col>
    </Row>
  )
}

export default InputGroupDropdowns
