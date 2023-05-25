// ** Images
import img1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import img2 from '@src/assets/images/portrait/small/avatar-s-3.jpg'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardText, CardBody } from 'reactstrap'

const BlockquotesAvatar = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Blockquotes with avatar</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>
          You can create a blockquot with avatar using <code>media</code> component.
        </CardText>
        <blockquote className='blockquote ps-1 border-start-primary border-start-3'>
          <div className='d-flex'>
            <div className='me-1'>
              <img src={img1} alt='Generic placeholder image' height='64' width='64' />
            </div>
            <div>Sometimes life is going to hit you in the head with a brick. Don't lose faith.</div>
          </div>
          <footer className='blockquote-footer text-end'>
            Steve Jobs
            <cite title='Source Title'>Entrepreneur</cite>
          </footer>
        </blockquote>
        <CardText className='mt-2'>Blockquotes with avatar rounded image example</CardText>
        <blockquote className='blockquote'>
          <div className='d-flex'>
            <div className='me-1'>
              <img className='rounded-circle' src={img2} alt='Generic placeholder image' height='64' width='64' />
            </div>
            <div>Sometimes life is going to hit you in the head with a brick. Don't lose faith.</div>
          </div>
          <footer className='blockquote-footer text-end'>
            Steve Jobs
            <cite title='Source Title'>Entrepreneur</cite>
          </footer>
        </blockquote>
      </CardBody>
    </Card>
  )
}
export default BlockquotesAvatar
