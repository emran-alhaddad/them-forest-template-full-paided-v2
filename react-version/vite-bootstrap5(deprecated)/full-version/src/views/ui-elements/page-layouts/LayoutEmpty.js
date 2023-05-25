// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import { Alert } from 'reactstrap'

const LayoutEmpty = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Layout Empty' data={[{ title: 'Layouts' }, { title: 'Layout Empty' }]} />
      <Alert color='primary'>
        <div className='alert-body'>
          <span className='fw-bold'>Info: </span>
          <span>
            This layout can be useful for getting started with empty content section. Please check the{' '}
            <a
              href='https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/docs/development/page-layouts'
              target='_blank'
            >
              Layout empty documentation
            </a>{' '}
            for more details.
          </span>
        </div>
      </Alert>
    </Fragment>
  )
}

export default LayoutEmpty
