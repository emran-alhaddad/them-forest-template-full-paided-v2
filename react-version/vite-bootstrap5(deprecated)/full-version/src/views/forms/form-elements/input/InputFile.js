// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Label, Input, Row, Col } from 'reactstrap'

const InputFile = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Input File</CardTitle>
      </CardHeader>

      <CardBody>
        <Row>
          <Col md='6' sm='12'>
            <Label className='form-label' for='inputFile'>
              Simple File Input
            </Label>
            <Input type='file' id='inputFile' name='fileInput' />
          </Col>
          <Col md='6' sm='12'>
            <Label className='form-label' for='exampleMultipleFileBrowser'>
              Multiple files input
            </Label>
            <Input type='file' id='exampleMultipleFileBrowser' name='MultipleFiles' multiple />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
export default InputFile
