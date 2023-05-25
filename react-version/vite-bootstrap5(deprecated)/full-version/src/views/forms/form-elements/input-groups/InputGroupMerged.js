import { Fragment } from 'react'
import { Search } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { InputGroup, Input, InputGroupText } from 'reactstrap'

const InputGroupMerged = () => {
  return (
    <Fragment>
      <InputGroup className='input-group-merge mb-2'>
        <InputGroupText>
          <Search size={14} />
        </InputGroupText>
        <Input placeholder='search...' />
      </InputGroup>
      <InputPasswordToggle className='input-group-merge mb-2' label='Password' htmlFor='merge-password' />
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
    </Fragment>
  )
}

export default InputGroupMerged
