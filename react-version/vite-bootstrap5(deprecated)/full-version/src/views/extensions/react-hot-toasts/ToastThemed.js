// ** React Imports
import { useContext } from 'react'

// ** Reactstrap Imports
import { Card, CardBody, Button } from 'reactstrap'

// ** Third Party Components
import toast from 'react-hot-toast'
import { Feather } from 'react-feather'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

const ToastThemed = () => {
  // ** Theme Colors
  const { colors } = useContext(ThemeColors)

  const handleClick = () => {
    return toast.success('Look at me, I have brand styles.', {
      style: {
        padding: '16px',
        color: colors.primary.main,
        border: `1px solid ${colors.primary.main}`
      },
      iconTheme: {
        primary: colors.primary.main
      }
    })
  }

  return (
    <Card>
      <CardBody>
        <div className='d-flex text-center align-items-center flex-column'>
          <Feather size='32' className='mb-1' />
          <h5 className='mb-1 fw-bolder'>Themed</h5>
          <p className='mb-50'>Customize the default styles the way you want.</p>
          <Button color='primary' onClick={handleClick}>
            Emoji
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default ToastThemed
