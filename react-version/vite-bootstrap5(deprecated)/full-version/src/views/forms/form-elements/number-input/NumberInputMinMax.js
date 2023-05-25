// ** Third Party Components
import InputNumber from 'rc-input-number'
import { Plus, Minus } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Label } from 'reactstrap'

const NumberInputMinMax = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Min Max</CardTitle>
      </CardHeader>
      <CardBody>
        <div>
          <Label className='form-label' for='min-max-number-input'>
            Min Max Input
          </Label>
          <InputNumber
            min={0}
            max={10}
            defaultValue={5}
            upHandler={<Plus />}
            downHandler={<Minus />}
            id='min-max-number-input'
          />
        </div>
      </CardBody>
    </Card>
  )
}
export default NumberInputMinMax
