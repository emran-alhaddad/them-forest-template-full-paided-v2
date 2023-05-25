// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Input, Label } from 'reactstrap'

const RadioColors = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Colors</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText className='mb-0'>
          Use class <code>.form-check-[color]</code> for colored Radio.
        </CardText>
        <div className='demo-inline-spacing'>
          <div className='form-check form-check-primary'>
            <Input type='radio' id='radio-primary' defaultChecked />
            <Label className='form-check-label' for='radio-primary'>
              Primary
            </Label>
          </div>
          <div className='form-check form-check-secondary'>
            <Input type='radio' defaultChecked id='radio-secondary' />
            <Label className='form-check-label' for='radio-secondary'>
              Secondary
            </Label>
          </div>
          <div className='form-check form-check-success'>
            <Input type='radio' id='radio-success' defaultChecked />
            <Label className='form-check-label' for='radio-success'>
              Success
            </Label>
          </div>
          <div className='form-check form-check-danger'>
            <Input type='radio' id='radio-danger' defaultChecked />
            <Label className='form-check-label' for='radio-danger'>
              Danger
            </Label>
          </div>
          <div className='form-check form-check-warning'>
            <Input type='radio' id='radio-warning' defaultChecked />
            <Label className='form-check-label' for='radio-warning'>
              Warning
            </Label>
          </div>
          <div className='form-check form-check-info'>
            <Input type='radio' id='radio-info' defaultChecked />
            <Label className='form-check-label' for='radio-info'>
              Info
            </Label>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
export default RadioColors
