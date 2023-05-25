// ** React Imports
import { useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import ListItemButton from '@mui/material/ListItemButton'
import InputAdornment from '@mui/material/InputAdornment'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// Styled Autocomplete component
const Autocomplete = styled(CustomAutocomplete)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    paddingLeft: theme.spacing(3.5),
    backgroundColor: theme.palette.background.paper
  },
  [theme.breakpoints.up('md')]: {
    width: '55%'
  },
  [theme.breakpoints.up('xl')]: {
    width: '45%'
  },
  [theme.breakpoints.down('md')]: {
    width: '75%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))

const HelpCenterLandingHeader = ({ data, allArticles }) => {
  // ** States
  const [value, setValue] = useState('')
  const [open, setOpen] = useState(false)

  // ** Hooks & Vars
  const router = useRouter()

  const handleRedirection = option => {
    setOpen(false)
    setValue(option.title)
    let currentSubcategory = null

    const currentCategory = data.find(category =>
      category.subCategories.find(subcategory =>
        subcategory.articles.find(article => {
          if (option.slug === article.slug) {
            currentSubcategory = subcategory
          }

          return option.slug === article.slug
        })
      )
    )
    if (currentSubcategory !== null) {
      router.push(`/pages/help-center/${currentCategory?.slug}/${currentSubcategory.slug}/${option.slug}`)
    }
  }

  return (
    <CardContent
      sx={{
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundSize: 'cover',
        py: theme => `${theme.spacing(24)} !important`,
        backgroundImage: 'url(/images/pages/header-bg.png)'
      }}
    >
      <Typography sx={{ mb: 4, fontWeight: 500, fontSize: '1.625rem', lineHeight: 1.385 }}>
        Hello, how can we help?
      </Typography>

      <Autocomplete
        open={open}
        disablePortal
        inputValue={value}
        options={allArticles}
        onClose={() => setOpen(false)}
        sx={{
          mb: 4,
          '& + .MuiAutocomplete-popper .MuiAutocomplete-listbox': { maxHeight: 250 },
          '& .MuiInputBase-root.MuiFilledInput-root': {
            backgroundColor: theme => `${theme.palette.background.paper} !important`
          }
        }}
        getOptionLabel={option => option.title || ''}
        isOptionEqualToValue={(option, value) => value === option}
        onChange={(event, option) => handleRedirection(option)}
        onInputChange={(event, value) => {
          setValue(value)
          setOpen(!!event.target.value)
        }}
        renderInput={params => (
          <CustomTextField
            {...params}
            size='medium'
            value={value}
            placeholder='Search a question...'
            onChange={event => setValue(event.target.value)}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position='start' sx={{ color: 'text.secondary' }}>
                  <Icon fontSize='1.25rem' icon='tabler:search' />
                </InputAdornment>
              )
            }}
          />
        )}
        renderOption={(props, option) => {
          return value.length ? (
            <ListItem {...props} sx={{ p: '0 !important' }} key={option.slug} onClick={() => handleRedirection(option)}>
              <ListItemButton sx={{ py: 1.5 }}>{option.title}</ListItemButton>
            </ListItem>
          ) : null
        }}
      />

      <Typography sx={{ color: 'text.secondary' }}>
        Common troubleshooting topics: eCommerce, Blogging to payment
      </Typography>
    </CardContent>
  )
}

export default HelpCenterLandingHeader
