// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Input, Label } from 'reactstrap'

const TextareaFloatingLabel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Floating label</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText className='mb-3'>
          Use <code>.form-label-group</code> as a wrapper to add a Floating Label with Textarea
        </CardText>
        <div className='form-floating mt-2'>
          <Input
            type='textarea'
            name='text'
            id='floating-textarea'
            placeholder='Floating Label'
            style={{ minHeight: '100px' }}
          />
          <Label className='form-label' for='floating-textarea'>
            Floating Label
          </Label>
        </div>
      </CardBody>
    </Card>
  )
}
export default TextareaFloatingLabel
