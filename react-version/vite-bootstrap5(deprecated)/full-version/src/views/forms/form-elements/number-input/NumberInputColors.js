// ** Third Party Components
import InputNumber from 'rc-input-number'
import { Plus, Minus } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Label } from 'reactstrap'

const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info']

const NumberInputColors = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Colors</CardTitle>
      </CardHeader>
      <CardBody>
        <div className='demo-inline-spacing'>
          {colors.map(color => (
            <div key={color}>
              <Label className='form-label text-capitalize' for={`${color}-number-input`}>
                {color} Input
              </Label>
              <InputNumber
                defaultValue={10}
                upHandler={<Plus />}
                downHandler={<Minus />}
                id={`${color}-number-input`}
                className={`input-${color}`}
              />
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}
export default NumberInputColors
