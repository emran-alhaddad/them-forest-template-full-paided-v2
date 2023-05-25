// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Form, Label, Input } from 'reactstrap'

const RadioBasic = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Basic</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <div className='demo-inline-spacing'>
            <div className='form-check'>
              <Input type='radio' id='ex1-active' name='ex1' defaultChecked />
              <Label className='form-check-label' for='ex1-active'>
                Checked
              </Label>
            </div>
            <div className='form-check'>
              <Input type='radio' name='ex1' id='ex1-inactive' />
              <Label className='form-check-label' for='ex1-inactive'>
                Unchecked
              </Label>
            </div>
            <div className='form-check'>
              <Input type='radio' id='ex2-active' defaultChecked disabled />
              <Label className='form-check-label' for='ex2-active'>
                Checked Disabled
              </Label>
            </div>
            <div className='form-check'>
              <Input type='radio' id='ex2-inactive' disabled />
              <Label className='form-check-label' for='ex2-inactive'>
                Unchecked Disabled
              </Label>
            </div>
          </div>
        </Form>
      </CardBody>
    </Card>
  )
}
export default RadioBasic
