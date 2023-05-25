export const inputGroupBasic = (
  <pre>
    <code className='language-jsx'>
      {`

import { Search } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { InputGroup, Input, InputGroupText } from 'reactstrap'

const InputGroupBasic = () => {
  return (
    <React.Fragment>
      <InputGroup className='mb-2'>
          <InputGroupText>
            <Search size={14} />
          </InputGroupText>
        <Input placeholder='search...' />
      </InputGroup>
      <InputPasswordToggle className='mb-2' label='Password' htmlFor='basic-default-password' />
      <InputGroup className='mb-2'>
          <InputGroupText>@</InputGroupText>
        <Input placeholder='Username' />
      </InputGroup>
      <InputGroup className='mb-2'>
        <Input placeholder="Recipient's username" />
          <InputGroupText>@example.com</InputGroupText>
      </InputGroup>
      <InputGroup className='mb-2'>
          <InputGroupText>https://example.com/users/</InputGroupText>
        <Input />
      </InputGroup>
      <InputGroup className='mb-2'>
          <InputGroupText>$</InputGroupText>
        <Input placeholder='100' />
      </InputGroup>
      <InputGroup>
          <InputGroupText>With textarea</InputGroupText>
        <Input type='textarea' />
      </InputGroup>
    </React.Fragment>
  )
}

export default InputGroupBasic
  `}
    </code>
  </pre>
)

export const inputGroupMerged = (
  <pre>
    <code className='language-jsx'>
      {`

import { Search } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { InputGroup, Input, InputGroupText } from 'reactstrap'

const InputGroupMerged = () => {
  return (
    <React.Fragment>
      <InputGroup className='input-group-merge mb-2'>
          <InputGroupText>
            <Search size={14} />
          </InputGroupText>
        <Input placeholder='search...' />
      </InputGroup>
      <InputPasswordToggle className='input-group-merge mb-2' label='Password' htmlFor='basic-default-password' />
      <InputGroup className='input-group-merge mb-2'>
          <InputGroupText>@</InputGroupText>
        <Input placeholder='Username' />
      </InputGroup>
      <InputGroup className='input-group-merge mb-2'>
        <Input placeholder="Recipient's username" />
          <InputGroupText>@example.com</InputGroupText>
      </InputGroup>
      <InputGroup className='input-group-merge mb-2'>
          <InputGroupText>https://example.com/users/</InputGroupText>
        <Input />
      </InputGroup>
      <InputGroup className='input-group-merge mb-2'>
          <InputGroupText>$</InputGroupText>
        <Input placeholder='100' />
      </InputGroup>
      <InputGroup className='input-group-merge'>
          <InputGroupText>With textarea</InputGroupText>
        <Input type='textarea' />
      </InputGroup>
    </React.Fragment>
  )
}

export default InputGroupMerged
  `}
    </code>
  </pre>
)

export const inputGroupCBRadio = (
  <pre>
    <code className='language-jsx'>
      {`

import { InputGroup, Input, InputGroupText, Row, Col, Input } from 'reactstrap'

const InputGroupCbAndRadio = () => {
  return (
    <Row>
      <Col md='6' sm='12'>
        <InputGroup>
            <InputGroupText>
              <input type='checkbox' />
            </InputGroupText>
          <Input type='text' placeholder='Message' />
        </InputGroup>
      </Col>
      <Col md='6' sm='12'>
        <InputGroup>
            <InputGroupText>
              <input type='radio' />
            </InputGroupText>
          <Input type='text' placeholder='Message' />
        </InputGroup>
      </Col>
      <small className='fw-semibold w-100 ms-1 my-1'>Custom checkbox and radio</small>
      <Col className='mb-md-0 mb-1' md='6' sm='12'>
        <InputGroup>
          <InputGroupText>
            <div className='form-check'>
              <Input type='checkbox' id='exampleCustomCheckbox' />
            </div>
          </InputGroupText>
          <Input type='text' placeholder='Message' />
        </InputGroup>
      </Col>
      <Col md='6' sm='12'>
        <InputGroup>
          <InputGroupText>
            <div className='form-check'>
              <Input type='radio' id='exampleCustomRadio' />
            </div>
          </InputGroupText>
          <Input type='text' placeholder='Message' />
        </InputGroup>
      </Col>
    </Row>
  )
}

export default InputGroupCbAndRadio
  `}
    </code>
  </pre>
)

export const inputGroupButtons = (
  <pre>
    <code className='language-jsx'>
      {`

import { Button, InputGroup, Input,  Row, Col } from 'reactstrap'
import { Search } from 'react-feather'

const InputGroupButtons = () => {
  return (
    <Row>
      <Col className='mb-1' lg='6' md='12'>
        <InputGroup>
          <Input />
            <Button color='primary' outline>
              Go
            </Button>
        </InputGroup>
      </Col>
      <Col className='mb-1' lg='6' md='12'>
        <InputGroup>
            <Button color='primary' outline>
              <Search size={12} />
            </Button>
          <Input type='text' />
            <Button color='primary' outline>
              Search !
            </Button>
        </InputGroup>
      </Col>
    </Row>
  )
}

export default InputGroupButtons
  `}
    </code>
  </pre>
)

export const inputGroupDropdowns = (
  <pre>
    <code className='language-jsx'>
      {`
import React, { useState } from 'react'
import {
  Row,
  Col,
  Input,
  Dropdown,

  InputGroup,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from 'reactstrap'
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
      <Col lg='6' md='12'>
        <InputGroup>
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropDown}>
            <DropdownToggle color='primary' caret outline>
              Action
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action 1</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Input />
        </InputGroup>
      </Col>
      <Col lg='6' md='12'>
        <InputGroup>
          <Dropdown isOpen={dropdownIcon} toggle={toggleDropdownIcon}>
            <DropdownToggle color='primary' caret outline>
              <Edit size={12} />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action 1</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Input />
          <Dropdown isOpen={dropdownRight} toggle={toggleDropDownRight}>
            <DropdownToggle color='primary' outline caret>
              Action
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action 1</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </InputGroup>
      </Col>
    </Row>
  )
}

export default InputGroupDropdowns
  `}
    </code>
  </pre>
)

export const inputGroupSizes = (
  <pre>
    <code className='language-jsx'>
      {`

import { InputGroup, InputGroupText, Input } from 'reactstrap'

const InputGroupSizes = () => {
  return (
    <React.Fragment>
      <InputGroup className='mb-1' size='lg'>
        <InputGroupText>@</InputGroupText>
        <Input placeholder='username' />
      </InputGroup>

      <InputGroup className='mb-1'>
        <InputGroupText>@</InputGroupText>
        <Input placeholder='username' />
      </InputGroup>

      <InputGroup size='sm'>
        <InputGroupText>@</InputGroupText>
        <Input placeholder='username' />
      </InputGroup>
    </React.Fragment>
  )
}

export default InputGroupSizes
  `}
    </code>
  </pre>
)
