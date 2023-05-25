// ** React Imports
import { SyntheticEvent, useEffect, useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabPanel from '@mui/lab/TabPanel'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
import CircularProgress from '@mui/material/CircularProgress'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types
import {
  HelpCenterCategoriesType,
  HelpCenterSubcategoriesType,
  HelpCenterSubcategoryArticlesType
} from 'src/@fake-db/types'

interface Props {
  activeTab: string
  data: HelpCenterCategoriesType
}

const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  borderRight: 0,
  marginRight: 0,
  '&, & .MuiTabs-scroller': {
    boxSizing: 'content-box',
    padding: theme.spacing(1.25, 1.25, 2),
    margin: `${theme.spacing(-1.25, -1.25, -2)} !important`
  },
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    minHeight: 38,
    minWidth: 300,
    maxWidth: 300,
    lineHeight: 1.3,
    textAlign: 'start',
    alignItems: 'flex-start',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      color: theme.palette.primary.main
    },
    [theme.breakpoints.down('md')]: {
      minWidth: '100%',
      maxWidth: '100%'
    }
  }
}))

const HelpCenterSubcategory = ({ data, activeTab }: Props) => {
  // ** State
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [tabValue, setTabValue] = useState<string>(activeTab)

  // ** Hook
  const router = useRouter()

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setIsLoading(true)
    router.push(`/pages/help-center/${data.slug}/${newValue}`).then(() => setIsLoading(false))
  }

  useEffect(() => {
    if (activeTab && activeTab !== tabValue) {
      setTabValue(activeTab)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab])

  const renderTabs = () => {
    return (
      data &&
      data.subCategories.map((tab: HelpCenterSubcategoriesType) => (
        <Tab key={tab.slug} value={tab.slug} label={tab.title} />
      ))
    )
  }

  const renderContent = () => {
    const dataToRender = data.subCategories.filter((item: HelpCenterSubcategoriesType) => item.slug === tabValue)[0]

    return (
      <TabPanel value={tabValue} sx={{ p: 0, width: '100%' }}>
        <Card>
          <CardContent>
            <Box sx={{ mb: 6, display: 'flex', alignItems: 'center' }}>
              <Avatar variant='rounded' sx={{ mr: 3, width: 42, height: 42 }}>
                <Icon fontSize='1.875rem' icon={dataToRender.icon} />
              </Avatar>
              <Typography variant='h4'>{dataToRender.title}</Typography>
            </Box>

            <Box sx={{ mb: 6 }}>
              {dataToRender.articles.map((article: HelpCenterSubcategoryArticlesType) => {
                return (
                  <Box
                    key={article.title}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      '&:not(:last-of-type)': { mb: 4 },
                      '& svg': { mr: 1.5, color: 'text.disabled' }
                    }}
                  >
                    <Icon fontSize='1.125rem' icon='tabler:chevron-right' />
                    <Typography
                      component={Link}
                      sx={{ color: 'primary.main', textDecoration: 'none' }}
                      href={`/pages/help-center/${data.slug}/${activeTab}/${article.slug}`}
                    >
                      {article.title}
                    </Typography>
                  </Box>
                )
              })}
            </Box>

            <Button
              variant='tonal'
              component={Link}
              href='/pages/help-center'
              startIcon={<Icon icon='tabler:chevron-left' />}
            >
              Back to help center
            </Button>
          </CardContent>
        </Card>
      </TabPanel>
    )
  }

  return (
    <TabContext value={tabValue}>
      <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'] }}>
        <Box sx={{ mr: [0, 0, 6], mb: [6, 6, 0], display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h5' sx={{ mb: 4 }}>
            {data.title}
          </Typography>
          <TabList orientation='vertical' onChange={handleChange} aria-label='vertical tabs example'>
            {renderTabs()}
          </TabList>
        </Box>
        {isLoading ? (
          <Box sx={{ mt: 11, width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <CircularProgress sx={{ mb: 4 }} />
            <Typography>Loading...</Typography>
          </Box>
        ) : (
          renderContent()
        )}
      </Box>
    </TabContext>
  )
}

export default HelpCenterSubcategory
