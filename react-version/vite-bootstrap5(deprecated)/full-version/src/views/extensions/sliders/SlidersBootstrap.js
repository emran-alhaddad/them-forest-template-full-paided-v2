// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Input, Label } from 'reactstrap'

const SlidersBootstrap = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Default Bootstrap 5 slider</CardTitle>
      </CardHeader>
      <CardBody>
        <div className='mb-2'>
          <Label className='form-label' for='default-range'>
            Default
          </Label>
          <Input type='range' name='default-range' id='default-range' />
        </div>
        <div>
          <Label className='form-label' for='disable-range'>
            Disabled
          </Label>
          <Input type='range' name='disable-range' id='disable-range' disabled />
        </div>
      </CardBody>
    </Card>
  )
}

export default SlidersBootstrap
