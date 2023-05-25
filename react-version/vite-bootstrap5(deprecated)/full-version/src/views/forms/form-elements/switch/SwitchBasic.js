// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Input, Label } from 'reactstrap'

const SwitchBasic = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Basic</CardTitle>
      </CardHeader>
      <CardBody>
        <div className='demo-inline-spacing'>
          <div className='form-check form-switch'>
            <Input type='switch' name='customSwitch' id='exampleCustomSwitch' />
            <Label for='exampleCustomSwitch' className='form-check-label'>
              Toggle this switch element
            </Label>
          </div>
          <div className='form-check form-switch'>
            <Input disabled type='switch' name='customSwitchDisabled' id='exampleCustomSwitchDisabled' />
            <Label for='exampleCustomSwitchDisabled' className='form-check-label'>
              Disabled switch element
            </Label>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
export default SwitchBasic
