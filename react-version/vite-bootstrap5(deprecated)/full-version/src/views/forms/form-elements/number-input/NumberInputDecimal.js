// ** Third Party Components
import InputNumber from 'rc-input-number'
import { Plus, Minus } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Label } from 'reactstrap'

const NumberInputDecimal = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Decimal</CardTitle>
      </CardHeader>
      <CardBody>
        <div>
          <Label className='form-label' for='decimal-number-input'>
            Decimal Input
          </Label>
          <InputNumber
            step={0.1}
            defaultValue={10}
            upHandler={<Plus />}
            downHandler={<Minus />}
            id='decimal-number-input'
          />
        </div>
      </CardBody>
    </Card>
  )
}
export default NumberInputDecimal
