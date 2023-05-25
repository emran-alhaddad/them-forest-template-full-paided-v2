// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Table } from 'reactstrap'

const LightBoldHeadings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Light / Bold Headings</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>
          All HTML headings are available with light and bold font-weight. Use <code>.fw-normal</code> for light heading
          and <code>.fw-bolderer</code> for bold headings along with heading tags or classes.
        </CardText>
      </CardBody>
      <Table responsive borderless className='mb-0'>
        <thead>
          <tr>
            <th>Light headings</th>
            <th className='text-end'>Bold headings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h1 className='fw-normal'>Heading 1</h1>
            </td>
            <td className='text-end'>
              <h1 className='fw-bolder'>Heading 1</h1>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className='fw-normal'>Heading 2</h2>
            </td>
            <td className='text-end'>
              <h2 className='fw-bolder'>Heading 2</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h3 className='fw-normal'>Heading 3</h3>
            </td>
            <td className='text-end'>
              <h3 className='fw-bolder'>Heading 3</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h4 className='fw-normal'>Heading 4</h4>
            </td>
            <td className='text-end'>
              <h4 className='fw-bolder'>Heading 4</h4>
            </td>
          </tr>
          <tr>
            <td>
              <h5 className='fw-normal'>Heading 5</h5>
            </td>
            <td className='text-end'>
              <h5 className='fw-bolder'>Heading 5</h5>
            </td>
          </tr>
          <tr>
            <td>
              <h6 className='fw-normal'>Heading 6</h6>
            </td>
            <td className='text-end'>
              <h6 className='fw-bolder'>Heading 6</h6>
            </td>
          </tr>
        </tbody>
      </Table>
    </Card>
  )
}
export default LightBoldHeadings
