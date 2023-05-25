// ** MUI Imports
import Button from '@mui/material/Button'

const ButtonsTonal = () => {
  return (
    <div className='demo-space-x'>
      <Button variant='tonal'>Primary</Button>
      <Button variant='tonal' color='secondary'>
        Secondary
      </Button>
      <Button variant='tonal' disabled>
        Disabled
      </Button>
      <Button variant='tonal' href='#'>
        Link
      </Button>
    </div>
  )
}

export default ButtonsTonal
