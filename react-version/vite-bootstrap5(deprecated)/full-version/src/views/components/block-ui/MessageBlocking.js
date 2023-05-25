// ** React Imports
import { useState, Fragment, useEffect } from 'react'

// ** Custom Components
import UILoader from '@components/ui-loader'
import Spinner from '@components/spinner/Loading-spinner'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardText, CardBody, Button } from 'reactstrap'

const MessageBlocking = () => {
  // ** State
  const [block, setBlock] = useState(false)

  useEffect(() => {
    return () => setBlock(false)
  }, [])

  const handleBlock = () => {
    setBlock(true)

    setTimeout(() => {
      setBlock(false)
    }, 3000)
  }

  const Loader = () => {
    return (
      <Fragment>
        <Spinner />
        <CardText className='mb-0 mt-1 text-white'>Please Wait...</CardText>
      </Fragment>
    )
  }

  return (
    <UILoader blocking={block} loader={<Loader />}>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Message</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            Lorem ipsum dolor sit amet, an vel affert soleat possim. Usu meis neglegentur ut, oporteat salutandi
            dignissim at mea. Pericula erroribus quaerendum ex duo, his autem accusamus ad, alienum detracto rationibus
            vis et. No est volumus ocurreret vituperata.
          </CardText>
          <Button color='primary' outline onClick={handleBlock}>
            Block
          </Button>
        </CardBody>
      </Card>
    </UILoader>
  )
}

export default MessageBlocking
