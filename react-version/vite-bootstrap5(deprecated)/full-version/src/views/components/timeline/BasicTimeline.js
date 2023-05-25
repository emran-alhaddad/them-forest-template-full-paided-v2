// ** Custom Components
import Timeline from '@components/timeline'

// ** Reactstrap Imports
import { Card, CardBody, CardHeader, CardTitle } from 'reactstrap'

// ** Timeline Data
import { basicData } from './data'

const BasicTimeline = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Basic</CardTitle>
      </CardHeader>
      <CardBody>
        <Timeline data={basicData} />
      </CardBody>
    </Card>
  )
}

export default BasicTimeline
