// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

// ** Icons Imports
import { Link } from 'react-router-dom'

const BreadcrumbsAlignment = () => {
  return (
    <Fragment>
      <div className='d-flex justify-content-start breadcrumb-wrapper'>
        <Breadcrumb className='ms-1'>
          <BreadcrumbItem>
            <Link to='#'> Home </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to='#'> Library </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span> Data </span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className='d-flex justify-content-center breadcrumb-wrapper my-1'>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='#'> Home </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to='#'> Library </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span> Data </span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className='d-flex justify-content-end breadcrumb-wrapper'>
        <Breadcrumb className='me-1'>
          <BreadcrumbItem>
            <Link to='#'> Home </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to='#'> Library </Link>
          </BreadcrumbItem>
          <BreadcrumbItem className='pe-1'>
            <span> Data </span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </Fragment>
  )
}
export default BreadcrumbsAlignment
