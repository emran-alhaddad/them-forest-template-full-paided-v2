// ** Third Party Components
import Select from 'react-select'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Label } from 'reactstrap'

const colourOptions = [
  { value: 'ocean', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' }
]

const SelectReact = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>React Select</CardTitle>
      </CardHeader>

      <CardBody>
        <p>
          React Select is a flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete,
          async and creatable support. You can read it's documentation from{' '}
          <a className='my-50' target='_blank' href='https://react-select.com/home' rel='noopener noreferrer'>
            here
          </a>
          .
        </p>
        <Row>
          <Col className='mb-1' md='6' sm='12'>
            <Label className='form-label'>Basic</Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={colourOptions[0]}
              options={colourOptions}
              isClearable={false}
            />
          </Col>
          <Col className='mb-1' md='6' sm='12'>
            <Label className='form-label'>Clearable</Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={colourOptions[1]}
              name='clear'
              options={colourOptions}
              isClearable
            />
          </Col>
          <Col className='mb-1' md='6' sm='12'>
            <Label className='form-label'>Loading</Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={colourOptions[2]}
              name='loading'
              options={colourOptions}
              isLoading={true}
              isClearable={false}
            />
          </Col>
          <Col className='mb-1' md='6' sm='12'>
            <Label className='form-label'>Disabled</Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={colourOptions[3]}
              name='disabled'
              options={colourOptions}
              isDisabled={true}
              isClearable={false}
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
export default SelectReact
