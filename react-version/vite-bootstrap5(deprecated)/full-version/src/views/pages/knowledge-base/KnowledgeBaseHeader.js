// ** Icons Imports
import { Search } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardBody, CardText, Form, Input, InputGroup, InputGroupText } from 'reactstrap'

const FaqFilter = ({ searchTerm, setSearchTerm, handleFilter }) => {
  const onChange = e => {
    if (handleFilter) {
      handleFilter(e)
    } else {
      setSearchTerm(e.target.value)
    }
  }

  return (
    <div id='knowledge-base-search'>
      <Card
        className='knowledge-base-bg'
        style={{
          backgroundImage: `url('@src/assets/images/banner/banner.png')`
        }}
      >
        <CardBody className='text-center'>
          <h2 className='text-primary'>Dedicated Source Used on Website</h2>
          <CardText className='mb-2'>
            Popular searches: <span className='fw-bolder'>Sales automation, Email marketing</span>
          </CardText>
          <Form className='kb-search-input' onSubmit={e => e.preventDefault()}>
            <InputGroup className='input-group-merge'>
              <InputGroupText>
                <Search size={14} />
              </InputGroupText>
              <Input value={searchTerm} onChange={e => onChange(e)} placeholder='Ask a question...' />
            </InputGroup>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}

export default FaqFilter
