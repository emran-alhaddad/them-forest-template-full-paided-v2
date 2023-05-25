// ** Icons Imports
import { MoreVertical } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Input, Label, Badge, Button } from 'reactstrap'

const CardBusiness = () => {
  const dataArr = [
    {
      id: 'option-1',
      title: 'Option #1',
      badgeColor: 'light-success',
      amount: '+$39'
    },
    {
      id: 'option-2',
      title: 'Option #2',
      badgeColor: 'light-primary',
      amount: '+$85',
      checked: true
    },
    {
      id: 'option-3',
      title: 'Option #3',
      badgeColor: 'light-success',
      amount: '+$199'
    },
    {
      id: 'option-4',
      title: 'Option #4',
      badgeColor: 'light-success',
      amount: '+$459'
    }
  ]

  const renderOptions = () => {
    return dataArr.map(item => {
      return (
        <div key={item.id} className='business-item'>
          <div className='d-flex align-items-center justify-content-between'>
            <div className='form-check'>
              <Input id={item.id} type='checkbox' label={item.id} defaultChecked={item.checked} />
              <Label className='form-check-label' for={item.id}>
                {item.title}
              </Label>
            </div>
            <Badge color={item.badgeColor}>{item.amount}</Badge>
          </div>
        </div>
      )
    })
  }

  return (
    <Card className='business-card'>
      <CardHeader className='pb-1'>
        <CardTitle tag='h4'>For Business Sharks</CardTitle>
        <MoreVertical size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        <CardText>Here, i focus ona range of items and featured that we use in life without giving them</CardText>
        <h6 className='mb-75'>Basic price is $130</h6>
        <div className='business-items'>{renderOptions()}</div>
        <Button color='primary' block>
          Purchase
        </Button>
      </CardBody>
    </Card>
  )
}

export default CardBusiness
