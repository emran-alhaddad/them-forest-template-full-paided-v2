// ** React Imports
import { Fragment, useContext } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Deom Charts
import BarChart from './ChartjsBarChart'
import LineChart from './ChartjsLineChart'
import AreaChart from './ChartjsAreaChart'
import RadarChart from './ChartjsRadarChart'
import BubbleChart from './ChartjsBubbleChart'
import ScatterChart from './ChartjsScatterChart'
import DoughnutChart from './ChartjsDoughnutChart'
import PolarAreaChart from './ChartjsPolarAreaChart'
import HorizontalBarChart from './ChartjsHorizontalBar'

// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Third Party Components
import 'chart.js/auto'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const ChartJS = () => {
  // ** Context, Hooks & Vars
  const { colors } = useContext(ThemeColors),
    { skin } = useSkin(),
    labelColor = skin === 'dark' ? '#b4b7bd' : '#6e6b7b',
    tooltipShadow = 'rgba(0, 0, 0, 0.25)',
    gridLineColor = 'rgba(200, 200, 200, 0.2)',
    lineChartPrimary = '#666ee8',
    lineChartDanger = '#ff4961',
    warningColorShade = '#ffbd1f',
    warningLightColor = '#FDAC34',
    successColorShade = '#28dac6',
    primaryColorShade = '#836AF9',
    infoColorShade = '#299AFF',
    yellowColor = '#ffe800',
    greyColor = '#4F5D70',
    blueColor = '#2c9aff',
    blueLightColor = '#84D0FF',
    greyLightColor = '#EDF1F4'

  return (
    <Fragment>
      <Breadcrumbs title='React ChartJS 2' data={[{ title: 'Charts' }, { title: 'ChartJS' }]} />
      <Row className='match-height'>
        <Col sm='12'>
          <p>
            React wrapper for Chart.js. Click{' '}
            <a href='https://github.com/jerairrest/react-chartjs-2' target='_blank' rel='noopener noreferrer'>
              here
            </a>{' '}
            for github repo.
          </p>
        </Col>
        <Col xl='6' sm='12'>
          <BarChart success={successColorShade} labelColor={labelColor} gridLineColor={gridLineColor} />
        </Col>
        <Col xl='6' sm='12'>
          <HorizontalBarChart
            info={colors.info.main}
            labelColor={labelColor}
            warning={colors.warning.main}
            gridLineColor={gridLineColor}
          />
        </Col>
        <Col sm='12'>
          <LineChart
            labelColor={labelColor}
            gridLineColor={gridLineColor}
            lineChartDanger={lineChartDanger}
            lineChartPrimary={lineChartPrimary}
            warningColorShade={warningColorShade}
          />
        </Col>
        <Col lg='6' sm='12'>
          <RadarChart labelColor={labelColor} gridLineColor={gridLineColor} />
        </Col>
        <Col lg='6' sm='12'>
          <PolarAreaChart
            greyColor={greyColor}
            labelColor={labelColor}
            yellowColor={yellowColor}
            primary={colors.primary.main}
            infoColorShade={infoColorShade}
            warningColorShade={warningColorShade}
            successColorShade={successColorShade}
          />
        </Col>
        <Col sm='12'>
          <BubbleChart
            labelColor={labelColor}
            yellowColor={yellowColor}
            gridLineColor={gridLineColor}
            primaryColorShade={primaryColorShade}
          />
        </Col>
        <Col lg='4' sm='12'>
          <DoughnutChart
            tooltipShadow={tooltipShadow}
            successColorShade={successColorShade}
            warningLightColor={warningLightColor}
            primary={colors.primary.main}
          />
        </Col>
        <Col lg='8' sm='12'>
          <ScatterChart
            labelColor={labelColor}
            yellowColor={yellowColor}
            gridLineColor={gridLineColor}
            primary={colors.primary.main}
            successColorShade={successColorShade}
          />
        </Col>
        <Col sm='12'>
          <AreaChart
            blueColor={blueColor}
            labelColor={labelColor}
            gridLineColor={gridLineColor}
            blueLightColor={blueLightColor}
            greyLightColor={greyLightColor}
          />
        </Col>
      </Row>
    </Fragment>
  )
}

export default ChartJS
