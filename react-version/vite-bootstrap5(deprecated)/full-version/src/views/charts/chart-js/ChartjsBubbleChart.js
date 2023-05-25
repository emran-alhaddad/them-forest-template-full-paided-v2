// ** Third Party Components
import { Bubble } from 'react-chartjs-2'
import { ArrowDown } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Badge } from 'reactstrap'

const ChartjsRadarChart = ({ labelColor, primaryColorShade, yellowColor, gridLineColor }) => {
  // ** Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        min: 0,
        max: 140,
        grid: {
          color: gridLineColor,
          borderColor: gridLineColor
        },
        ticks: {
          stepSize: 10,
          color: labelColor
        }
      },
      y: {
        min: 0,
        max: 400,
        grid: {
          color: gridLineColor,
          borderColor: gridLineColor
        },
        ticks: {
          stepSize: 100,
          color: labelColor
        }
      }
    },
    plugins: {
      legend: { display: false }
    }
  }

  // ** Chart data
  const data = {
    animation: { duration: 10000 },
    datasets: [
      {
        label: 'Dataset 1',
        borderColor: primaryColorShade,
        backgroundColor: primaryColorShade,
        data: [
          { x: 20, y: 74, r: 10 },
          { x: 10, y: 110, r: 5 },
          { x: 30, y: 165, r: 7 },
          { x: 40, y: 200, r: 20 },
          { x: 90, y: 185, r: 7 },
          { x: 50, y: 240, r: 7 },
          { x: 60, y: 275, r: 10 },
          { x: 70, y: 305, r: 5 },
          { x: 80, y: 325, r: 4 },
          { x: 100, y: 310, r: 5 },
          { x: 110, y: 240, r: 5 },
          { x: 120, y: 270, r: 7 },
          { x: 130, y: 300, r: 6 }
        ]
      },
      {
        label: 'Dataset 2',
        borderColor: yellowColor,
        backgroundColor: yellowColor,
        data: [
          { x: 30, y: 72, r: 5 },
          { x: 40, y: 110, r: 7 },
          { x: 20, y: 135, r: 6 },
          { x: 10, y: 160, r: 12 },
          { x: 50, y: 285, r: 5 },
          { x: 60, y: 235, r: 5 },
          { x: 70, y: 275, r: 7 },
          { x: 80, y: 290, r: 4 },
          { x: 90, y: 250, r: 10 },
          { x: 100, y: 220, r: 7 },
          { x: 120, y: 230, r: 4 },
          { x: 110, y: 320, r: 15 },
          { x: 130, y: 330, r: 7 }
        ]
      }
    ]
  }

  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
        <CardTitle tag='h4'>Bubble Chart</CardTitle>
        <div className='d-flex align-items-center flex-wrap'>
          <h5 className='fw-bolder mb-0 me-1'>$ 100,000</h5>
          <Badge color='light-secondary'>
            <ArrowDown size={13} className='text-danger' />
            <span className='align-middle ms-25'>20%</span>
          </Badge>
        </div>
      </CardHeader>
      <CardBody>
        <div style={{ height: '500px' }}>
          <Bubble data={data} options={options} height={500} />
        </div>
      </CardBody>
    </Card>
  )
}

export default ChartjsRadarChart
