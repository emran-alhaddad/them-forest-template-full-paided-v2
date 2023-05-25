// ** React Imports
import { useState, useEffect } from 'react'

// ** Custom Components
import UILoader from '@components/ui-loader'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardText, CardBody, Button } from 'reactstrap'

const BasicBlocking = () => {
  // ** State
  const [block, setBlock] = useState(false)

  useEffect(() => {
    return () => setBlock(false)
  }, [])

  const handleBlock = () => {
    setBlock(true)

    setTimeout(() => {
      setBlock(false)
    }, 2000)
  }

  return (
    <UILoader blocking={block}>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Basic</CardTitle>
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

export default BasicBlocking
