// ** Reactstrap Imports
import { Card, CardBody, Button } from 'reactstrap'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import toast from 'react-hot-toast'
import { Edit2, X } from 'react-feather'

// ** Avatar Image
import avatarImg from '@src/assets/images/portrait/small/avatar-s-20.jpg'

const ToastCustom = () => {
  const handleClick = () => {
    return toast(
      t => (
        <div className='w-100 d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center'>
            <Avatar img={avatarImg} className='me-1' />
            <div>
              <p className='mb-0'>John Doe</p>
              <small>Sure! 8:30pm works great!</small>
            </div>
          </div>
          <X size='14' onClick={() => toast.dismiss(t.id)} />
        </div>
      ),
      {
        style: {
          minWidth: '300px'
        }
      }
    )
  }

  return (
    <Card>
      <CardBody>
        <div className='d-flex text-center align-items-center flex-column'>
          <Edit2 size='32' className='mb-1' />
          <h5 className='mb-1 fw-bolder'>Custom</h5>
          <p className='mb-50'>Make a toast using any custom content .</p>
          <Button color='primary' onClick={handleClick}>
            Custom
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default ToastCustom
