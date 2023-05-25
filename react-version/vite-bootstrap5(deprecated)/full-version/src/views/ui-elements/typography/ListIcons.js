// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText } from 'reactstrap'

// ** Icons Imports
import { ArrowRight, ChevronRight } from 'react-feather'

const ListIcons = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Lists icons</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>
          Use <code>.list-style-icons</code> class with <code>&lt;ul&gt;</code> tag to create a list with icons.
        </CardText>
        <ul className='list-style-icons'>
          <li>
            <ArrowRight size={14} className='rotate-rtl me-50' />
            Facilisis in pretium nisl aliquet
          </li>
          <li>
            <ArrowRight size={14} className='rotate-rtl me-50' />
            Nulla volutpat aliquam velit
            <ul className='list-style-icons'>
              <li className='ms-1'>
                <ChevronRight size={14} className='rotate-rtl me-50' />
                Phasellus iaculis neque
              </li>
              <li className='ms-1'>
                <ChevronRight size={14} className='rotate-rtl me-50' />
                Ac tristique libero volutpat at
              </li>
            </ul>
          </li>
          <li>
            <ArrowRight size={14} className='rotate-rtl me-50' />
            Faucibus porta lacus fringilla vel
          </li>
          <li>
            <ArrowRight size={14} className='rotate-rtl me-50' />
            Aenean sit amet erat nunc
          </li>
        </ul>
      </CardBody>
    </Card>
  )
}
export default ListIcons
