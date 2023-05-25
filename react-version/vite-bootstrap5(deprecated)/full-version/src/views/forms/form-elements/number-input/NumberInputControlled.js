// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import InputNumber from 'rc-input-number'
import { Plus, Minus } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Label, Button } from 'reactstrap'

const NumberInputControlled = () => {
  const [value, setValue] = useState(1)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(false)

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Controlled</CardTitle>
      </CardHeader>
      <CardBody>
        <div>
          <Label className='form-label' for='controlled-number-input'>
            Controlled Input
          </Label>
          <InputNumber
            value={value}
            upHandler={<Plus />}
            disabled={isDisabled}
            readOnly={isReadOnly}
            downHandler={<Minus />}
            id='controlled-number-input'
            onChange={value => setValue(value)}
          />
        </div>
        <div className='demo-inline-spacing'>
          <Button size='sm' color='primary' onClick={() => setIsDisabled(!isDisabled)}>
            Toggle Disabled
          </Button>
          <Button size='sm' color='primary' onClick={() => setIsReadOnly(!isReadOnly)}>
            Toggle ReadOnly
          </Button>
          <Button size='sm' color='primary' onClick={() => setValue(10)}>
            Set Value to 10
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}
export default NumberInputControlled
