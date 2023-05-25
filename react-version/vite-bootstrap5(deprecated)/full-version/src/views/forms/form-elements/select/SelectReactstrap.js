// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Input, Label } from 'reactstrap'

const SelectReactstrap = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Reactstrap Select</CardTitle>
      </CardHeader>
      <CardBody>
        <div className='mb-1'>
          <Label className='form-label' for='select-basic'>
            Basic Select
          </Label>
          <Input type='select' name='select' id='select-basic'>
            <option>Pulp Fiction</option>
            <option>Nightcrawler</option>
            <option>Donnie Darko</option>
          </Input>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='select-custom'>
            Custom Select
          </Label>
          <Input type='select' name='select' id='select-custom'>
            <option>Pulp Fiction</option>
            <option>Nightcrawler</option>
            <option>Donnie Darko</option>
          </Input>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='select-disabled'>
            Disabled Select
          </Label>
          <Input type='select' name='select' id='select-disabled' disabled>
            <option>Pulp Fiction</option>
            <option>Nightcrawler</option>
            <option>Donnie Darko</option>
          </Input>
        </div>
        <div>
          <Label className='form-label' for='select-multi'>
            Multiple Select
          </Label>
          <Input type='select' name='select' id='select-multi' multiple>
            <option>Square</option>
            <option>Rectangle</option>
            <option>Circle</option>
            <option>Triangle</option>
            <option>Pentagon</option>
          </Input>
        </div>
      </CardBody>
    </Card>
  )
}
export default SelectReactstrap
