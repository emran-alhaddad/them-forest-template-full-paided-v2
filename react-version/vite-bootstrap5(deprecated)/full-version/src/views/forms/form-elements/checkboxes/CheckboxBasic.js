// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Form, Label, Input } from 'reactstrap'

const CheckboxBasic = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Basic Checkboxes</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <div className='demo-inline-spacing'>
            <div className='form-check form-check-inline'>
              <Input type='checkbox' defaultChecked id='basic-cb-checked' />
              <Label for='basic-cb-checked' className='form-check-label'>
                Checked
              </Label>
            </div>
            <div className='form-check form-check-inline'>
              <Input type='checkbox' id='basic-cb-unchecked' />
              <Label for='basic-cb-unchecked' className='form-check-label'>
                Unchecked
              </Label>
            </div>
            <div className='form-check form-check-inline'>
              <Input type='checkbox' defaultChecked disabled />
              <Label className='form-check-label'>Checked Disabled</Label>
            </div>
            <div className='form-check form-check-inline'>
              <Input type='checkbox' disabled />
              <Label className='form-check-label'>Unchecked Disabled</Label>
            </div>
          </div>
        </Form>
      </CardBody>
    </Card>
  )
}
export default CheckboxBasic
