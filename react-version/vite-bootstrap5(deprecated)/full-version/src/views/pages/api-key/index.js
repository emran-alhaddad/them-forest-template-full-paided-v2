// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
// ** Utils
import { selectThemeColors } from '@utils'

// ** Third Party Components
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { Copy, MoreVertical, Edit2, Trash2 } from 'react-feather'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Form,
  Label,
  Input,
  Badge,
  Button,
  CardBody,
  CardText,
  CardTitle,
  CardHeader,
  FormFeedback,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'

// ** Illustrations
import illustration from '@src/assets/images/illustration/pricing-Illustration.svg'

const data = [
  {
    type: 'Full Access',
    name: 'Server Key 1',
    key: '23eaf7f0-f4f7-495e-8b86-fad3261282ac',
    date: 'Created on 28 Apr 2020, 18:20 GTM+4:10'
  },
  {
    type: 'Read Only',
    name: 'Server Key 2',
    key: 'bb98e571-a2e2-4de8-90a9-2e231b5e99',
    date: 'Created on 12 Feb 2020, 10:30 GTM+2:30'
  },
  {
    type: 'Full Access',
    name: 'Server Key 3',
    key: '2e915e59-3105-47f2-8838-6e46bf83b711',
    date: 'Created on 28 Apr 2020, 12:21 GTM+4:10'
  }
]

const keyOptions = [
  { value: 'full-control', label: 'Full Control' },
  { value: 'modify', label: 'Modify' },
  { value: 'read-execute', label: 'Read & Execute' },
  { value: 'list-folder', label: 'List Folder Contents' },
  { value: 'read-only', label: 'Read Only' },
  { value: 'read-write', label: 'Read Write' }
]

const defaultValues = {
  apiKeyName: ''
}

const ApiKey = () => {
  // ** Hooks
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const onSubmit = data => {
    if (data.apiKeyName.length) {
      return null
    } else {
      setError('apiKeyName', {
        type: 'manual'
      })
    }
  }

  return (
    <Fragment>
      <Breadcrumbs title='Create an API Key' data={[{ title: 'Pages' }, { title: 'Create an API Key' }]} />
      <Card>
        <CardHeader className='pb-0'>
          <CardTitle tag='h4'>Create an API Key</CardTitle>
        </CardHeader>
        <Row>
          <Col md={{ size: 5, order: 0 }} xs={{ size: 12, order: 1 }}>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-2'>
                  <Label className='form-label'>Choose the Api key type you want to create</Label>
                  <Select
                    isClearable={false}
                    options={keyOptions}
                    className='react-select'
                    classNamePrefix='select'
                    theme={selectThemeColors}
                    defaultValue={keyOptions[0]}
                  />
                </div>
                <div className='mb-2'>
                  <Label className='form-label' for='apiKeyName'>
                    Name the API key
                  </Label>
                  <Controller
                    name='apiKeyName'
                    control={control}
                    render={({ field }) => (
                      <Input id='apiKeyName' placeholder='Server Key' invalid={errors.apiKeyName && true} {...field} />
                    )}
                  />
                  {errors && errors.apiKeyName && <FormFeedback>Please enter a valid API key name</FormFeedback>}
                </div>
                <div>
                  <Button block type='submit' color='primary'>
                    Create Key
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Col>
          <Col md={{ size: 7, order: 1 }} xs={{ size: 12, order: 0 }}>
            <div className='text-center'>
              <img className='img-fluid text-center' src={illustration} alt='illustration' width='310' />
            </div>
          </Col>
        </Row>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>API Key List & Access</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            An API key is a simple encrypted string that identifies an application without any principal. They are
            useful for accessing public data anonymously, and are used to associate API requests with your project for
            quota and billing.
          </CardText>
          <Row className='gy-2'>
            {data.map(item => (
              <Col sm={12} key={item.key}>
                <div className='bg-light-secondary position-relative rounded p-2'>
                  <UncontrolledDropdown className='btn-pinned'>
                    <DropdownToggle tag='span' className='cursor-pointer'>
                      <MoreVertical size={18} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem className='d-flex align-items-center'>
                        <Edit2 size={14} className='me-50' />
                        <span>Edit</span>
                      </DropdownItem>
                      <DropdownItem className='d-flex align-items-center'>
                        <Trash2 size={14} className='me-50' />
                        <span>Delete</span>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <div className='d-flex align-items-center flex-wrap'>
                    <h4 className='mb-1 me-1'>{item.name}</h4>
                    <Badge className='mb-1' color='light-primary'>
                      {item.type}
                    </Badge>
                  </div>
                  <h6 className='d-flex align-items-center fw-bolder'>
                    <span className='me-50'>{item.key}</span>
                    <span>
                      <Copy size={14} />
                    </span>
                  </h6>
                  <span>{item.date}</span>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default ApiKey
