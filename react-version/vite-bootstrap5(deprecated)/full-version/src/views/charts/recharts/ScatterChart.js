// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

// ** Chart Data
const angularData = [
  { x: 5.4, y: 170 },
  { x: 5.4, y: 100 },
  { x: 5.7, y: 110 },
  { x: 5.9, y: 150 },
  { x: 6.0, y: 200 },
  { x: 6.3, y: 170 },
  { x: 5.7, y: 140 },
  { x: 5.9, y: 130 },
  { x: 7.0, y: 150 },
  { x: 8.0, y: 120 },
  { x: 9.0, y: 170 },
  { x: 10.0, y: 190 },
  { x: 11.0, y: 220 },
  { x: 12.0, y: 170 },
  { x: 13.0, y: 230 }
]

const vueData = [
  { x: 14.0, y: 220 },
  { x: 15.0, y: 280 },
  { x: 16.0, y: 230 },
  { x: 18.0, y: 320 },
  { x: 17.5, y: 280 },
  { x: 19.0, y: 250 },
  { x: 20.0, y: 350 },
  { x: 20.5, y: 320 },
  { x: 20.0, y: 320 },
  { x: 19.0, y: 280 },
  { x: 17.0, y: 280 },
  { x: 22.0, y: 300 },
  { x: 18.0, y: 120 }
]

const reactData = [
  { x: 14.0, y: 290 },
  { x: 13.0, y: 190 },
  { x: 20.0, y: 220 },
  { x: 21.0, y: 350 },
  { x: 21.5, y: 290 },
  { x: 22.0, y: 220 },
  { x: 23.0, y: 140 },
  { x: 19.0, y: 400 },
  { x: 20.0, y: 200 },
  { x: 22.0, y: 90 },
  { x: 20.0, y: 120 }
]

const SimpleScatterChart = ({ primary, success, danger }) => {
  return (
    <Card>
      <CardHeader className='flex-sm-row flex-column justify-content-sm-between justify-content-center align-items-sm-center align-items-start'>
        <CardTitle tag='h4'>Framework Usage</CardTitle>
        <div className='d-flex align-items-center'>
          <Calendar size={15} />
          <Flatpickr
            className='form-control flat-picker bg-transparent border-0 shadow-none'
            options={{
              mode: 'range',
              // eslint-disable-next-line no-mixed-operators
              defaultDate: [new Date(), new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000)]
            }}
          />
        </div>
      </CardHeader>

      <CardBody>
        <div className='d-flex align-items-center mb-2'>
          <div className='me-2'>
            <span className='bullet bullet-sm bullet-primary bullet-bordered me-50'></span>
            <span className='me-75'>React</span>
          </div>
          <div className='me-2'>
            <span className='bullet bullet-sm bullet-success bullet-bordered me-50'></span>
            <span className='me-75'>Vue</span>
          </div>
          <div>
            <span className='bullet bullet-sm bullet-danger bullet-bordered me-50'></span>
            <span>Angular</span>
          </div>
        </div>
        <div className='recharts-wrapper'>
          <ResponsiveContainer>
            <ScatterChart height={400}>
              <CartesianGrid />
              <XAxis type='number' dataKey='x' />
              <YAxis type='number' dataKey='y' />
              <Scatter name='Angular' data={angularData} fill={danger} />
              <Scatter name='Vue' data={vueData} fill={success} />
              <Scatter name='React' data={reactData} fill={primary} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  )
}
export default SimpleScatterChart
