// ** Third Party Components
import InputNumber from 'rc-input-number'
import { Plus, Minus } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Label } from 'reactstrap'

const NumberInputBasic = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Basic</CardTitle>
      </CardHeader>
      <CardBody>
        <div className='demo-inline-spacing'>
          <div>
            <Label className='form-label' for='basic-number-input'>
              Basic Input
            </Label>
            <InputNumber id='basic-number-input' defaultValue={10} upHandler={<Plus />} downHandler={<Minus />} />
          </div>
          <div>
            <Label className='form-label' for='disabled-number-input'>
              Disabled Input
            </Label>
            <InputNumber
              disabled
              defaultValue={10}
              upHandler={<Plus />}
              downHandler={<Minus />}
              id='disabled-number-input'
            />
          </div>
          <div>
            <Label className='form-label' for='readOnly-number-input'>
              ReadOnly Input
            </Label>
            <InputNumber
              readOnly
              defaultValue={10}
              upHandler={<Plus />}
              downHandler={<Minus />}
              id='readOnly-number-input'
            />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
export default NumberInputBasic
