// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import { Scatter } from 'react-chartjs-2'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, ButtonGroup, Button } from 'reactstrap'

const ChartjsScatterChart = ({ labelColor, gridLineColor, primary, yellowColor, successColorShade }) => {
  // ** States
  const [active, setActive] = useState('daily')

  // ** Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 800 },
    layout: {
      padding: { top: -20 }
    },
    scales: {
      x: {
        min: 0,
        max: 140,
        grid: {
          drawTicks: false,
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
          drawTicks: false,
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
      legend: {
        align: 'start',
        position: 'top',
        labels: {
          padding: 30,
          boxWidth: 9,
          color: labelColor,
          usePointStyle: true
        }
      }
    }
  }

  // ** Chart Data
  const data = {
    datasets: [
      {
        pointRadius: 5,
        label: 'iPhone',
        pointBorderWidth: 2,
        backgroundColor: primary,
        pointHoverBorderWidth: 2,
        borderColor: 'transparent',
        data: [
          {
            x: 72,
            y: 225
          },
          {
            x: 81,
            y: 270
          },
          {
            x: 90,
            y: 230
          },
          {
            x: 103,
            y: 305
          },
          {
            x: 103,
            y: 245
          },
          {
            x: 108,
            y: 275
          },
          {
            x: 110,
            y: 290
          },
          {
            x: 111,
            y: 315
          },
          {
            x: 109,
            y: 350
          },
          {
            x: 116,
            y: 340
          },
          {
            x: 113,
            y: 260
          },
          {
            x: 117,
            y: 275
          },
          {
            x: 117,
            y: 295
          },
          {
            x: 126,
            y: 280
          },
          {
            x: 127,
            y: 340
          },
          {
            x: 133,
            y: 330
          }
        ]
      },
      {
        pointRadius: 5,
        pointBorderWidth: 2,
        label: 'Samsung Note',
        pointHoverBorderWidth: 2,
        borderColor: 'transparent',
        backgroundColor: yellowColor,
        data: [
          {
            x: 13,
            y: 95
          },
          {
            x: 22,
            y: 105
          },
          {
            x: 17,
            y: 115
          },
          {
            x: 19,
            y: 130
          },
          {
            x: 21,
            y: 125
          },
          {
            x: 35,
            y: 125
          },
          {
            x: 13,
            y: 155
          },
          {
            x: 21,
            y: 165
          },
          {
            x: 25,
            y: 155
          },
          {
            x: 18,
            y: 190
          },
          {
            x: 26,
            y: 180
          },
          {
            x: 43,
            y: 180
          },
          {
            x: 53,
            y: 202
          },
          {
            x: 61,
            y: 165
          },
          {
            x: 67,
            y: 225
          }
        ]
      },
      {
        pointRadius: 5,
        label: 'OnePlus',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        borderColor: 'transparent',
        backgroundColor: successColorShade,
        data: [
          {
            x: 70,
            y: 195
          },
          {
            x: 72,
            y: 270
          },
          {
            x: 98,
            y: 255
          },
          {
            x: 100,
            y: 215
          },
          {
            x: 87,
            y: 240
          },
          {
            x: 94,
            y: 280
          },
          {
            x: 99,
            y: 300
          },
          {
            x: 102,
            y: 290
          },
          {
            x: 110,
            y: 275
          },
          {
            x: 111,
            y: 250
          },
          {
            x: 94,
            y: 280
          },
          {
            x: 92,
            y: 340
          },
          {
            x: 100,
            y: 335
          },
          {
            x: 108,
            y: 330
          }
        ]
      }
    ]
  }

  //** */ To add spacing between legends and chart
  const plugins = [
    {
      beforeInit(chart) {
        chart.legend.afterFit = function () {
          this.height += 20
        }
      }
    }
  ]

  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
        <CardTitle tag='h4'>New Product Data</CardTitle>
        <ButtonGroup className='mt-md-0 mt-1'>
          <Button active={active === 'daily'} color='primary' outline onClick={() => setActive('daily')}>
            Daily
          </Button>
          <Button active={active === 'monthly'} color='primary' outline onClick={() => setActive('monthly')}>
            Monthly
          </Button>
          <Button active={active === 'yearly'} color='primary' outline onClick={() => setActive('yearly')}>
            Yearly
          </Button>
        </ButtonGroup>
      </CardHeader>
      <CardBody>
        <div style={{ height: '415px' }}>
          <Scatter data={data} options={options} height={415} plugins={plugins} />
        </div>
      </CardBody>
    </Card>
  )
}

export default ChartjsScatterChart
