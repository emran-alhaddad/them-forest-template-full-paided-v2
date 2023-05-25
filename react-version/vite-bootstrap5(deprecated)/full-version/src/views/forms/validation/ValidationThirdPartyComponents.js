// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import Select from 'react-select'
import toast from 'react-hot-toast'
import classnames from 'classnames'
import Cleave from 'cleave.js/react'
import { Check } from 'react-feather'
import Flatpickr from 'react-flatpickr'
import 'cleave.js/dist/addons/cleave-phone.us'
import { useForm, Controller } from 'react-hook-form'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import { Card, Form, Label, Button, CardBody, CardTitle, CardHeader, InputGroup, InputGroupText } from 'reactstrap'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/pages/page-form-validation.scss'

const colourOptions = [
  { value: 'ocean', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' }
]

const defaultValues = {
  phoneNumber: '',
  ReactSelect: null,
  reactFlatpickr: null
}

const ValidationThirdPartyComponents = () => {
  // ** State
  const [data, setData] = useState(null)

  // ** Hooks
  const { reset, handleSubmit, control } = useForm({ defaultValues })

  const onSubmit = data => {
    setData(data)
    if (data.ReactSelect !== null && data.reactFlatpickr !== null && data.phoneNumber.length) {
      toast(
        <div className='d-flex'>
          <div className='me-1'>
            <Avatar size='sm' color='success' icon={<Check size={12} />} />
          </div>
          <div className='d-flex flex-column'>
            <h6>Form Submitted!</h6>
            <ul className='list-unstyled mb-0'>
              <li>
                <strong>React Select</strong>: {data.ReactSelect.value}
              </li>
              <li>
                <strong>Flatpickr</strong>: {String(new Date(data.reactFlatpickr[0]))}
              </li>
              <li>
                <strong>Input Mask</strong>: {data.phoneNumber}
              </li>
            </ul>
          </div>
        </div>
      )
    }
  }

  const handleReset = () => {
    reset({
      phoneNumber: '',
      ReactSelect: '',
      reactFlatpickr: ''
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Third Party Components</CardTitle>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-1'>
            <Label className='form-label' for='react-select'>
              React Select
            </Label>
            <Controller
              id='react-select'
              control={control}
              name='ReactSelect'
              render={({ field }) => (
                <Select
                  isClearable
                  options={colourOptions}
                  classNamePrefix='select'
                  theme={selectThemeColors}
                  className={classnames('react-select', { 'is-invalid': data !== null && data.ReactSelect === null })}
                  {...field}
                />
              )}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='react-flatpickr'>
              React Flatpickr
            </Label>
            <Controller
              control={control}
              id='react-flatpickr'
              name='reactFlatpickr'
              render={({ field }) => (
                <Flatpickr
                  {...field}
                  options={{ allowInput: true }} 
                  className={classnames('form-control', {
                    'is-invalid': data !== null && data.reactFlatpickr === null
                  })}
                />
              )}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='phone-number'>
              Input Mask
            </Label>
            <InputGroup className='input-group-merge'>
              <InputGroupText
                className={classnames({
                  'is-invalid': data !== null && (data.phoneNumber === null || !data.phoneNumber.length)
                })}
              >
                US (+1)
              </InputGroupText>
              <Controller
                id='phone-number'
                name='phoneNumber'
                control={control}
                placeholder='1 234 567 8900'
                render={({ field }) => (
                  <Cleave
                    {...field}
                    className={classnames('form-control', {
                      'is-invalid': data !== null && (data.phoneNumber === null || !data.phoneNumber.length)
                    })}
                    options={{ phone: true, phoneRegionCode: 'US' }}
                  />
                )}
              />
            </InputGroup>
          </div>
          <div className='d-flex'>
            <Button className='me-1' color='primary' type='submit'>
              Submit
            </Button>
            <Button outline color='secondary' type='reset' onClick={handleReset}>
              Reset
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  )
}

export default ValidationThirdPartyComponents
