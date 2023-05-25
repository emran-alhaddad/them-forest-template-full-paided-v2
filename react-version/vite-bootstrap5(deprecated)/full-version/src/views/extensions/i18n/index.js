// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import { useTranslation } from 'react-i18next'

// ** Custom Components
import ExtensionsHeader from '@components/extensions-header'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Input, Label } from 'reactstrap'

const I18nExtension = () => {
  // ** Hooks
  const { i18n, t } = useTranslation()

  return (
    <Fragment>
      <ExtensionsHeader
        title='React i18next'
        link='https://react.i18next.com/'
        subTitle='The React i18next library provide hooks to use i18next'
      />

      <Row>
        <Col sm='12'>
          <Card>
            <CardHeader>
              <CardTitle tag='h4'>Change Locale</CardTitle>
            </CardHeader>
            <CardBody>
              <div className='language-options'>
                <div className='form-check mb-1'>
                  <Input
                    type='radio'
                    id='radio-en'
                    name='i18n-lang-radio'
                    checked={i18n.language === 'en'}
                    onChange={() => i18n.changeLanguage('en')}
                  />
                  <Label className='form-check-label' for='radio-en'>
                    English
                  </Label>
                </div>
                <div className='form-check mb-1'>
                  <Input
                    type='radio'
                    id='radio-fr'
                    name='i18n-lang-radio'
                    checked={i18n.language === 'fr'}
                    onChange={() => i18n.changeLanguage('fr')}
                  />
                  <Label className='form-check-label' for='radio-fr'>
                    French
                  </Label>
                </div>
                <div className='form-check mb-1'>
                  <Input
                    type='radio'
                    id='radio-de'
                    name='i18n-lang-radio'
                    checked={i18n.language === 'de'}
                    onChange={() => i18n.changeLanguage('de')}
                  />
                  <Label className='form-check-label' for='radio-de'>
                    German
                  </Label>
                </div>
                <div className='form-check mb-1'>
                  <Input
                    type='radio'
                    id='radio-pt'
                    name='i18n-lang-radio'
                    onChange={() => i18n.changeLanguage('pt')}
                    checked={i18n.language === 'pt'}
                  />
                  <Label className='form-check-label' for='radio-pt'>
                    Portuguese
                  </Label>
                </div>
              </div>
              <div className='border p-2 mt-3'>
                <h5 className='mb-1'>Title</h5>
                {t('text')}
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default I18nExtension
