// ** Third Party Components
import { Doughnut } from 'react-chartjs-2'
import { Monitor, Tablet, ArrowDown, ArrowUp } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const ChartjsRadarChart = ({ tooltipShadow, successColorShade, warningLightColor, primary }) => {
  // ** Chart Options
  const options = {
    maintainAspectRatio: false,
    cutout: 60,
    animation: {
      resize: {
        duration: 500
      }
    },
    plugins: {
      legend: { display: false },
      tooltips: {
        callbacks: {
          label(context) {
            console.log(context)
            let label = context.label || ''
            if (label) {
              label += 'Ronak: '
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y)
            }
            return label
          }
        },
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: tooltipShadow,
        backgroundColor: '#fff',
        titleFontColor: '#000',
        bodyFontColor: '#000'
      }
    }
  }

  // ** Chart data
  const data = {
    datasets: [
      {
        labels: ['Tablet', 'Mobile', 'Desktop'],
        data: [10, 10, 80],
        backgroundColor: [successColorShade, warningLightColor, primary],
        borderWidth: 0,
        pointStyle: 'rectRounded'
      }
    ]
  }

  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
        <CardTitle tag='h4'>Sessions By Device</CardTitle>
      </CardHeader>
      <CardBody>
        <div style={{ height: '275px' }}>
          <Doughnut data={data} options={options} height={275} />
        </div>
        <div className='d-flex justify-content-between mt-3 mb-1'>
          <div className='d-flex align-items-center'>
            <Monitor size={17} className='text-primary' />
            <span className='fw-bold ms-75 me-25'>Desktop</span>
            <span>- 80%</span>
          </div>
          <div>
            <span>2%</span> <ArrowUp className='text-success' size={14} />
          </div>
        </div>
        <div className='d-flex justify-content-between mb-1'>
          <div className='d-flex align-items-center'>
            <Tablet size={17} className='text-warning' />
            <span className='fw-bold ms-75 me-25'>Mobile</span>
            <span>- 10%</span>
          </div>
          <div>
            <span>8%</span> <ArrowUp className='text-success' size={14} />
          </div>
        </div>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-center'>
            <Tablet size={17} className='text-success' />
            <span className='fw-bold ms-75 me-25'>Tablet</span>
            <span>- 10%</span>
          </div>
          <div>
            <span>-5%</span> <ArrowDown className='text-danger' size={14} />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default ChartjsRadarChart
