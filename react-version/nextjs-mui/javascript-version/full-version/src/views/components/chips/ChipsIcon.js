// ** MUI Imports
import Chip from '@mui/material/Chip'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ChipsIcon = () => {
  return (
    <div className='demo-space-x'>
      <Chip label='Previous' icon={<Icon icon='tabler:circle-chevron-left' fontSize={20} />} />
      <Chip
        label='Next'
        color='primary'
        variant='outlined'
        icon={<Icon icon='tabler:circle-chevron-right' fontSize={20} />}
      />
    </div>
  )
}

export default ChipsIcon
