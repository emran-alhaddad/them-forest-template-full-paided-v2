// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Input, Label } from 'reactstrap'

const CheckboxCustom = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Custom Checkboxes</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText className='mb-0'>
          Use class <code>.form-check-[color]</code> for colored checkbox.
        </CardText>
        <div className='demo-inline-spacing'>
          <div className='form-check form-check-primary'>
            <Input type='checkbox' id='primary-checkbox' defaultChecked />
            <Label className='form-check-label' for='primary-checkbox'>
              Primary
            </Label>
          </div>
          <div className='form-check form-check-secondary'>
            <Input type='checkbox' id='secondary-checkbox' defaultChecked />
            <Label className='form-check-label' for='secondary-checkbox'>
              Secondary
            </Label>
          </div>
          <div className='form-check form-check-success'>
            <Input type='checkbox' id='success-checkbox' defaultChecked />
            <Label className='form-check-label' for='success-checkbox'>
              Success
            </Label>
          </div>
          <div className='form-check form-check-danger'>
            <Input type='checkbox' id='danger-checkbox' defaultChecked />
            <Label className='form-check-label' for='danger-checkbox'>
              Danger
            </Label>
          </div>
          <div className='form-check form-check-warning'>
            <Input type='checkbox' id='warning-checkbox' defaultChecked />
            <Label className='form-check-label' for='warning-checkbox'>
              Warning
            </Label>
          </div>
          <div className='form-check form-check-info'>
            <Input type='checkbox' id='info-checkbox' defaultChecked />
            <Label className='form-check-label' for='info-checkbox'>
              Info
            </Label>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
export default CheckboxCustom
