import { Fragment } from 'react'
import { InputGroup, InputGroupText, Input } from 'reactstrap'

const InputGroupSizes = () => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default InputGroupSizes
