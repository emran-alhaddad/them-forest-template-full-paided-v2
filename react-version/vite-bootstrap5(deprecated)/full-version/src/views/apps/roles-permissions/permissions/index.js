// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Card } from 'reactstrap'

// ** Table Import
import Table from './Table'

const Permissions = () => {
  return (
    <Fragment>
      <h3>Permissions List</h3>
      <p>Each category (Basic, Professional, and Business) includes the four predefined roles shown below.</p>
      <Card>
        <div className='card-datatable app-user-list table-responsive'>
          <Table />
        </div>
      </Card>
    </Fragment>
  )
}

export default Permissions
