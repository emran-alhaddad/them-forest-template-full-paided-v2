// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components Imports
import TextFieldSizes from 'src/views/forms/form-elements/text-field/TextFieldSizes'
import TextFieldColor from 'src/views/forms/form-elements/text-field/TextFieldColor'
import TextFieldIcons from 'src/views/forms/form-elements/text-field/TextFieldIcons'
import TextFieldCustom from 'src/views/forms/form-elements/text-field/TextFieldCustom'
import TextFieldLayout from 'src/views/forms/form-elements/text-field/TextFieldLayout'
import TextFieldVariant from 'src/views/forms/form-elements/text-field/TextFieldVariant'
import TextFieldFormProps from 'src/views/forms/form-elements/text-field/TextFieldFormProps'
import TextFieldValidation from 'src/views/forms/form-elements/text-field/TextFieldValidation'
import TextFieldInputAdornment from 'src/views/forms/form-elements/text-field/TextFieldInputAdornment'
import TextFieldControlledUncontrolled from 'src/views/forms/form-elements/text-field/TextFieldControlledUncontrolled'

// ** Source code imports
import * as source from 'src/views/forms/form-elements/text-field/TextFieldSourceCode'

const TextFields = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='Custom'
          code={{
            tsx: source.TextFieldCustomTSXCode,
            jsx: source.TextFieldCustomJSXCode
          }}
        >
          <Typography sx={{ mb: 4 }}>
            Use the <code>CustomTextField</code> component for the custom variant.
          </Typography>
          <TextFieldCustom />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='Variants'
          code={{
            tsx: source.TextFieldVariantTSXCode,
            jsx: source.TextFieldVariantJSXCode
          }}
        >
          <Typography>
            Use <code>variant={`{'filled' | 'standard'}`}</code> prop with the <code>TextField</code> component for
            different text fields.
          </Typography>
          <TextFieldVariant />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet
          title='Form Props'
          code={{
            tsx: source.TextFieldFormPropsTSXCode,
            jsx: source.TextFieldFormPropsJSXCode
          }}
        >
          <Typography>
            Standard form attributes are supported e.g. <code>required</code>, <code>disabled</code>, <code>type</code>,
            etc. as well as <code>helperText</code> which is used to give context about a field’s input, such as how the
            input will be used.
          </Typography>
          <TextFieldFormProps />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='Controlled and Uncontrolled'
          code={{
            tsx: source.TextFieldControlledUncontrolledTSXCode,
            jsx: source.TextFieldControlledUncontrolledJSXCode
          }}
        >
          <Typography>
            Manage <code>value</code> prop with the help of a state for controlled <code>TextField</code> and use
            <code>defaultChecked</code> prop for uncontrolled <code>TextField</code>.
          </Typography>
          <TextFieldControlledUncontrolled />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='Sizes'
          code={{
            tsx: source.TextFieldSizesTSXCode,
            jsx: source.TextFieldSizesJSXCode
          }}
        >
          <Typography>
            Use <code>size</code> prop for different sizes of text fields.
          </Typography>
          <TextFieldSizes />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet
          title='Color'
          code={{
            tsx: source.TextFieldColorTSXCode,
            jsx: source.TextFieldColorJSXCode
          }}
        >
          <Typography>
            <code>color={`{'secondary' | 'success' | 'error' | 'warning' | 'info'}`}</code> prop changes the highlight
            color of the text field when focused.
          </Typography>
          <TextFieldColor />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet
          title='Icons'
          code={{
            tsx: source.TextFieldIconsTSXCode,
            jsx: source.TextFieldIconsJSXCode
          }}
        >
          <Typography>There are multiple ways to display an icon with a text field.</Typography>
          <TextFieldIcons />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet
          title='Input Adornment'
          code={{
            tsx: source.TextFieldInputAdornmentTSXCode,
            jsx: source.TextFieldInputAdornmentJSXCode
          }}
        >
          <Typography>
            The main way is with an <code>InputAdornment</code>. This can be used to add a prefix, a suffix or an action
            to an input. For instance, you can use an icon button to hide or reveal the password.
          </Typography>
          <TextFieldInputAdornment />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet
          title='Layout'
          code={{
            tsx: source.TextFieldLayoutTSXCode,
            jsx: source.TextFieldLayoutJSXCode
          }}
        >
          <Typography>
            <code>fullWidth</code> can be used to make the input take up the full width of its container.
          </Typography>
          <Typography sx={{ mb: 4 }}>
            <code>margin</code> prop can be used to alter the vertical spacing of inputs. Using <code>none</code>{' '}
            (default) doesn't apply margins to the <code>FormControl</code> whereas <code>dense</code> and{' '}
            <code>normal</code> do.
          </Typography>
          <TextFieldLayout />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet
          title='Validation'
          code={{
            tsx: source.TextFieldValidationTSXCode,
            jsx: source.TextFieldValidationJSXCode
          }}
        >
          <Typography>
            The <code>error</code> prop toggles the error state, the <code>helperText</code> prop can then be used to
            provide feedback to the user about the error.
          </Typography>
          <TextFieldValidation />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default TextFields
