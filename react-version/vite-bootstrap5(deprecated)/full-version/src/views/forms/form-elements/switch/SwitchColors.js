// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Label, Input } from 'reactstrap'

const SwitchColors = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Colors</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText className='mb-0'>
          Use class <code>.form-check-colorName</code> to change switch's color
        </CardText>
        <div className='demo-inline-spacing'>
          <div className='d-flex flex-column'>
            <Label for='switch-primary' className='form-check-label mb-50'>
              Primary
            </Label>
            <div className='form-switch form-check-primary'>
              <Input type='switch' id='switch-primary' name='primary' defaultChecked />
            </div>
          </div>
          <div className='d-flex flex-column'>
            <Label for='switch-secondary' className='form-check-label mb-50'>
              Secondary
            </Label>
            <div className='form-switch form-check-secondary'>
              <Input type='switch' id='switch-secondary' name='secondary' defaultChecked />
            </div>
          </div>
          <div className='d-flex flex-column'>
            <Label for='switch-success' className='form-check-label mb-50'>
              Success
            </Label>
            <div className='form-switch form-check-success'>
              <Input type='switch' id='switch-success' name='success' defaultChecked />
            </div>
          </div>
          <div className='d-flex flex-column'>
            <Label for='switch-danger' className='form-check-label mb-50'>
              Danger
            </Label>
            <div className='form-switch form-check-danger'>
              <Input type='switch' id='switch-danger' name='danger' defaultChecked />
            </div>
          </div>
          <div className='d-flex flex-column'>
            <Label for='switch-warning' className='form-check-label mb-50'>
              Warning
            </Label>
            <div className='form-switch form-check-warning'>
              <Input type='switch' id='switch-warning' name='warning' defaultChecked />
            </div>
          </div>
          <div className='d-flex flex-column'>
            <Label for='switch-info' className='form-check-label mb-50'>
              Info
            </Label>
            <div className='form-switch form-check-info'>
              <Input type='switch' id='switch-info' name='info' defaultChecked />
            </div>
          </div>
          <div className='d-flex flex-column'>
            <Label for='switch-dark' className='form-check-label mb-50'>
              Dark
            </Label>
            <div className='form-switch form-check-dark'>
              <Input type='switch' id='switch-dark' name='dark' defaultChecked />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
export default SwitchColors
