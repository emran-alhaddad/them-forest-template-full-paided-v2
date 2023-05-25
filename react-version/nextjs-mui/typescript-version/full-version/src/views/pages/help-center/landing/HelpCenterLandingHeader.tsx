// ** React Imports
import { useState, ChangeEvent } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import ListItemButton from '@mui/material/ListItemButton'
import InputAdornment from '@mui/material/InputAdornment'
import { AutocompleteRenderInputParams } from '@mui/material/Autocomplete'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

// ** Type Import
import {
  HelpCenterCategoriesType,
  HelpCenterSubcategoriesType,
  HelpCenterSubcategoryArticlesType
} from 'src/@fake-db/types'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

interface Props {
  data: HelpCenterCategoriesType[]
  allArticles: HelpCenterSubcategoryArticlesType[]
}

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

const HelpCenterLandingHeader = ({ data, allArticles }: Props) => {
  // ** States
  const [value, setValue] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)

  // ** Hooks & Vars
  const router = useRouter()

  const handleRedirection = (option: HelpCenterSubcategoryArticlesType) => {
    setOpen(false)
    setValue(option.title)
    let currentSubcategory: HelpCenterSubcategoriesType | null = null
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
      router.push(
        `/pages/help-center/${currentCategory?.slug}/${(currentSubcategory as HelpCenterSubcategoriesType).slug}/${
          option.slug
        }`
      )
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
        getOptionLabel={(option: HelpCenterSubcategoryArticlesType | unknown) =>
          (option as HelpCenterSubcategoryArticlesType).title || ''
        }
        isOptionEqualToValue={(option: HelpCenterSubcategoryArticlesType | unknown, value) =>
          value === (option as HelpCenterSubcategoryArticlesType)
        }
        onChange={(event, option: HelpCenterSubcategoryArticlesType | unknown) =>
          handleRedirection(option as HelpCenterSubcategoryArticlesType)
        }
        onInputChange={(event, value: string) => {
          setValue(value)
          setOpen(!!(event.target as HTMLInputElement).value)
        }}
        renderInput={(params: AutocompleteRenderInputParams) => (
          <CustomTextField
            {...params}
            size='medium'
            value={value}
            placeholder='Search a question...'
            onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
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
        renderOption={(props, option: HelpCenterSubcategoryArticlesType | unknown) => {
          return value.length ? (
            <ListItem
              {...props}
              sx={{ p: '0 !important' }}
              key={(option as HelpCenterSubcategoryArticlesType).slug}
              onClick={() => handleRedirection(option as HelpCenterSubcategoryArticlesType)}
            >
              <ListItemButton sx={{ py: 1.5 }}>{(option as HelpCenterSubcategoryArticlesType).title}</ListItemButton>
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
