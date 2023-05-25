// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Icons Imports
import { Check, X } from 'react-feather'

// ** Reactstrap Imports
import { Alert, Card, Button, CardHeader, CardTitle, CardBody, CardText, Table } from 'reactstrap'

const data = [
  {
    single: 1,
    extended: 1,
    multiple: 'Unlimited 🤩',
    title: 'Number of end products'
  },
  {
    title: 'Use in single free end product',
    single: <Check size={20} className='text-success' />,
    extended: <Check size={20} className='text-success' />,
    multiple: <Check size={20} className='text-success' />
  },
  {
    single: <Check size={20} className='text-success' />,
    extended: <Check size={20} className='text-success' />,
    multiple: <Check size={20} className='text-success' />,
    title: 'Free end product (Can have multiple End Users)'
  },
  {
    title: 'Use in multiple free end product',
    single: <X size={20} className='text-danger' />,
    extended: <Check size={20} className='text-success' />,
    multiple: <Check size={20} className='text-success' />
  },
  {
    title: 'Use in single end product that’s sold',
    single: <X size={20} className='text-danger' />,
    multiple: <X size={20} className='text-danger' />,
    extended: <Check size={20} className='text-success' />
  },
  {
    extended: 'Single',
    title: 'Create SaaS Application',
    single: <X size={20} className='text-danger' />,
    multiple: <X size={20} className='text-danger' />
  }
]

const License = () => {
  return (
    <Fragment>
      <Breadcrumbs title='License' data={[{ title: 'Pages' }, { title: 'License' }]} />
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Our License Usage</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText className='mb-2 pb-1'>
            Use of any product you buy from PIXINVENT is bound by the license you purchase. It will allow you the
            non-exclusive access to use it in your personal as well as client projects.
          </CardText>
          <Table className='text-center text-nowrap' responsive bordered>
            <thead>
              <tr>
                <th></th>
                <th>Single</th>
                <th>Multiple</th>
                <th>Extended</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => {
                return (
                  <tr key={item.title}>
                    <th className='text-start'>{item.title}</th>
                    <td>{item.single}</td>
                    <td>{item.multiple}</td>
                    <td>{item.extended}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          <h5 className='mt-3'>Single License</h5>
          <ul className='ps-25 ms-1'>
            <li>You have rights to use our product for your personal or client project.</li>
            <li>You can modify our product as per your needs and use it for your personal or client project.</li>
          </ul>
          <CardText className='mb-2 pb-75'>
            With Single License you will be able to use our product for yourself or your client project for 1 time. If
            you want to use it for multiple times, you need to buy another regular license every time. Ownership and
            Copyright of our template will stay with ThemeSelection after purchasing single license. That means you are
            allowed to use our template in your project and use for one client or yourself,
          </CardText>
          <h5>Multiple License</h5>
          <ul className='ps-25 ms-1'>
            <li>You can use our product for your personal or client project. 😎</li>
            <li>You can use our product for unlimited projects when end users are not charged.</li>
          </ul>
          <CardText className='mb-2 pb-75'>
            With Multiple Use License you will be able to use our product for yourself as well as your client projects.
            You can use product for unlimited projects. Ownership and Copyright of our template will stay with
            ThemeSelection after purchasing multiple use license. That means you are allowed to use our template in your
            project and use for multiple clients and yourself, but you are not allowed to create SaaS application and
            sell that,
          </CardText>
          <h5>Extended License</h5>
          <ul className='ps-25 ms-1'>
            <li>You can use our product for your personal or client project.</li>
            <li>You cannot resell, redistribute, lease, license or offer the product to any third party.</li>
          </ul>
          <CardText className='mb-2 pb-1'>
            With Extended License you will be able to use our product for yourself or your client project for one time.
            You can use it for building one project. Ownership and Copyright of our template will remain with
            ThemeSelection and that means, you are not allowed to sell, distribute or lease our template as it is to
            anyone
          </CardText>
          <Alert color='primary'>
            <div className='alert-body d-flex align-items-center justify-content-between flex-wrap p-2'>
              <div className='me-1'>
                <h4 className='fw-bolder text-primary'>Do you need custom license? 👩🏻‍💻</h4>
                <p className='fw-normal mb-1 mb-lg-0'>
                  If you’ve mass production demand and other custom use cases than we’re here to help you.
                </p>
              </div>
              <Button color='primary'>Contact Us</Button>
            </div>
          </Alert>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default License
