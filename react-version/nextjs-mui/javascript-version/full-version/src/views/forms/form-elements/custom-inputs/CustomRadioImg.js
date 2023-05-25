// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import CustomRadioImg from 'src/@core/components/custom-radio/image'

const data = [
  {
    value: 'speaker',
    isSelected: true,
    img: '/images/pages/custom-radio-img-1.png'
  },
  {
    value: 'ear-buds',
    img: '/images/pages/custom-radio-img-2.png'
  },
  {
    value: 'headphone',
    img: '/images/pages/custom-radio-img-3.png'
  }
]

const CustomRadioWithImages = () => {
  const initialSelected = data.filter(item => item.isSelected)[data.filter(item => item.isSelected).length - 1].value

  // ** State
  const [selected, setSelected] = useState(initialSelected)

  const handleChange = prop => {
    if (typeof prop === 'string') {
      setSelected(prop)
    } else {
      setSelected(prop.target.value)
    }
  }

  return (
    <Grid container spacing={4}>
      {data.map((item, index) => (
        <CustomRadioImg
          key={index}
          data={data[index]}
          selected={selected}
          name='custom-radios-img'
          handleChange={handleChange}
          gridProps={{ sm: 4, xs: 12 }}
        />
      ))}
    </Grid>
  )
}

export default CustomRadioWithImages
