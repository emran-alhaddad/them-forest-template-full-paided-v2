// ** Third Party Components
import InputNumber from 'rc-input-number'
import { Plus, Minus } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Label } from 'reactstrap'

const NumberInputFormat = () => {
  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const format = num => {
    return `$ ${numberWithCommas(num)}`
  }

  const parser = num => {
    const cells = num.toString().split(' ')
    if (!cells[1]) {
      return num
    }

    const parsed = cells[1].replace(/,*/g, '')

    return parsed
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Formatting</CardTitle>
      </CardHeader>
      <CardBody>
        <div>
          <Label className='form-label' for='formatting-number-input'>
            Formatting Input
          </Label>
          <InputNumber
            parser={parser}
            defaultValue={5}
            formatter={format}
            upHandler={<Plus />}
            downHandler={<Minus />}
            id='formatting-number-input'
          />
        </div>
      </CardBody>
    </Card>
  )
}
export default NumberInputFormat
