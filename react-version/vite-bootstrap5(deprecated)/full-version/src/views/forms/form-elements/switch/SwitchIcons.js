// ** Icons Imports
import { Check, X } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Input, Label } from 'reactstrap'

const CustomLabel = ({ htmlFor }) => {
  return (
    <Label className='form-check-label' htmlFor={htmlFor}>
      <span className='switch-icon-left'>
        <Check size={14} />
      </span>
      <span className='switch-icon-right'>
        <X size={14} />
      </span>
    </Label>
  )
}

const SwitchIcons = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Icons</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText className='mb-0'>
          Use class <code>.switch-icon-left &amp; .switch-icon-right</code> inside of <code>label</code> prop to create
          a switch with icon.
        </CardText>
        <div className='demo-inline-spacing'>
          <div className='d-flex flex-column'>
            <Label for='icon-primary' className='form-check-label mb-50'>
              Primary
            </Label>
            <div className='form-switch form-check-primary'>
              <Input type='switch' defaultChecked id='icon-primary' name='icon-primary' />
              <CustomLabel htmlFor='icon-primary' />
            </div>
          </div>
          <div className='d-flex flex-column'>
            <Label for='icon-secondary' className='form-check-label mb-50'>
              Secondary
            </Label>
            <div className='form-switch form-check-secondary'>
              <Input type='switch' defaultChecked id='icon-secondary' name='icon-secondary' />
              <CustomLabel htmlFor='icon-secondary' />
            </div>
          </div>
          <div className='d-flex flex-column'>
            <Label for='icon-success' className='form-check-label mb-50'>
              Success
            </Label>
            <div className='form-switch form-check-success'>
              <Input type='switch' defaultChecked id='icon-success' name='icon-success' />
              <CustomLabel htmlFor='icon-success' />
            </div>
          </div>
          <div className='d-flex flex-column'>
            <Label for='icon-danger' className='form-check-label mb-50'>
              Danger
            </Label>
            <div className='form-switch form-check-danger'>
              <Input type='switch' defaultChecked id='icon-danger' name='icon-danger' />
              <CustomLabel htmlFor='icon-danger' />
            </div>
          </div>
          <div className='d-flex flex-column'>
            <Label for='icon-warning' className='form-check-label mb-50'>
              Warning
            </Label>
            <div className='form-switch form-check-warning'>
              <Input type='switch' defaultChecked id='icon-warning' name='icon-warning' />
              <CustomLabel htmlFor='icon-warning' />
            </div>
          </div>
          <div className='d-flex flex-column'>
            <Label for='icon-info' className='form-check-label mb-50'>
              Info
            </Label>
            <div className='form-switch form-check-info'>
              <Input type='switch' defaultChecked id='icon-info' name='icon-info' />
              <CustomLabel htmlFor='icon-info' />
            </div>
          </div>
          <div className='d-flex flex-column'>
            <Label for='icon-dark' className='form-check-label mb-50'>
              Dark
            </Label>
            <div className='form-switch form-check-dark'>
              <Input type='switch' defaultChecked id='icon-dark' name='icon-dark' />
              <CustomLabel htmlFor='icon-dark' />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
export default SwitchIcons
