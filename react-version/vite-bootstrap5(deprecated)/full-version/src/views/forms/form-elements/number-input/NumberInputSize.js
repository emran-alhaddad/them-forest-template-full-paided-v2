// ** Third Party Components
import InputNumber from 'rc-input-number'
import { Plus, Minus } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Label } from 'reactstrap'

const NumberInputSize = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Sizes</CardTitle>
      </CardHeader>
      <CardBody>
        <div className='d-flex flex-wrap'>
          <div className='me-2'>
            <Label className='form-label' for='lg-number-input'>
              Large Input
            </Label>
            <InputNumber
              defaultValue={10}
              className='input-lg'
              upHandler={<Plus />}
              id='lg-number-input'
              downHandler={<Minus />}
            />
          </div>
          <div>
            <Label className='form-label' for='default-number-input'>
              Default Input
            </Label>
            <InputNumber defaultValue={10} upHandler={<Plus />} id='default-number-input' downHandler={<Minus />} />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
export default NumberInputSize
