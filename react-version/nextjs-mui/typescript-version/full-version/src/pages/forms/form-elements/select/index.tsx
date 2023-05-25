// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components Imports
import SelectProps from 'src/views/forms/form-elements/select/SelectProps'
import SelectSizes from 'src/views/forms/form-elements/select/SelectSizes'
import SelectCustom from 'src/views/forms/form-elements/select/SelectCustom'
import SelectNative from 'src/views/forms/form-elements/select/SelectNative'
import SelectVariants from 'src/views/forms/form-elements/select/SelectVariants'
import SelectMultiple from 'src/views/forms/form-elements/select/SelectMultiple'
import SelectGrouping from 'src/views/forms/form-elements/select/SelectGrouping'
import SelectWithDialog from 'src/views/forms/form-elements/select/SelectWithDialog'
import SelectControlledUncontrolled from 'src/views/forms/form-elements/select/SelectControlledUncontrolled'

// ** Source code imports
import * as source from 'src/views/forms/form-elements/select/SelectSourceCode'

const Selects = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12}>
        <CardSnippet
          title='Custom'
          code={{
            tsx: source.SelectCustomTSXCode,
            jsx: source.SelectCustomJSXCode
          }}
        >
          <Typography sx={{ mb: 4 }}>
            To use the custom select, use <code>select</code> prop with the <code>CustomTextField</code> component and
            pass multiple <code>MenuItem</code> components as children of the <code>CustomTextField</code> component for
            the multiple options.
          </Typography>
          <Typography>
            To use the custom native select, use the <code>{`SelectProps={{ native: true }}`}</code> prop with the{' '}
            <code>CustomTextField</code> component and pass multiple <code>&lt;option&gt;</code> elements as children of
            the <code>CustomTextField</code> component for the multiple options.
          </Typography>
          <SelectCustom />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='Variants'
          code={{
            tsx: source.SelectVariantsTSXCode,
            jsx: source.SelectVariantsJSXCode
          }}
        >
          <Typography>
            Use <code>variant={`{'filled' | 'standard'}`}</code> prop with <code>FormControl</code> component for
            different variants of select and use <code>MenuItem</code> component as children of <code>Select</code>{' '}
            component.
          </Typography>
          <SelectVariants />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='Native Select'
          code={{
            tsx: source.SelectNativeTSXCode,
            jsx: source.SelectNativeJSXCode
          }}
        >
          <Typography>
            Use <code>native</code> prop with <code>Select</code> component and <code>&lt;option&gt;</code> element
            inside <code>Select</code> component for native select.
          </Typography>
          <SelectNative />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet
          title='Select Props'
          code={{
            tsx: source.SelectPropsTSXCode,
            jsx: source.SelectPropsJSXCode
          }}
        >
          <Typography>
            Use <code>label</code>, <code>helperText</code>, <code>disabled</code>, <code>error</code>,{' '}
            <code>required</code>, <code>inputProps</code> and <code>SelectProps</code> props with the{' '}
            <code>CustomTextField</code> component for different states of select.
          </Typography>
          <SelectProps />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='Controlled and Uncontrolled'
          code={{
            tsx: source.SelectControlledUncontrolledTSXCode,
            jsx: source.SelectControlledUncontrolledJSXCode
          }}
        >
          <Typography>
            Manage <code>value</code> with the help of a state and pass it in the <code>SelectProps</code> prop with the{' '}
            <code>CustomTextField</code> component for controlled select and use <code>defaultValue</code> prop with the{' '}
            <code>CustomTextField</code> component for uncontrolled <code>Select</code>.
          </Typography>
          <SelectControlledUncontrolled />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='Sizes'
          code={{
            tsx: source.SelectSizesTSXCode,
            jsx: source.SelectSizesJSXCode
          }}
        >
          <Typography>
            Use <code>size={`{'small' | 'medium'}`}</code> prop with <code>CustomTextField</code> component for
            different sizes of select.
          </Typography>
          <SelectSizes />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='Multiple Select'
          code={{
            tsx: source.SelectMultipleTSXCode,
            jsx: source.SelectMultipleJSXCode
          }}
        >
          <Typography>
            Use <code>{`SelectProps={{ multiple: true }}`}</code> prop with the <code>CustomTextField</code> component
            for multiple selections.
          </Typography>
          <SelectMultiple />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <CardSnippet
              title='Select with Dialog'
              code={{
                tsx: source.SelectWithDialogTSXCode,
                jsx: source.SelectWithDialogJSXCode
              }}
            >
              <SelectWithDialog />
            </CardSnippet>
          </Grid>
          <Grid item xs={12}>
            <CardSnippet
              title='Grouping'
              code={{
                tsx: source.SelectGroupingTSXCode,
                jsx: source.SelectGroupingJSXCode
              }}
            >
              <Typography>
                Display categories with the <code>ListSubheader</code> component or the native{' '}
                <code>&lt;optgroup&gt;</code> element.
              </Typography>
              <SelectGrouping />
            </CardSnippet>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Selects
