// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Component Import
import TextareaCustom from 'src/views/forms/form-elements/textarea/TextareaCustom'
import TextareaVariant from 'src/views/forms/form-elements/textarea/TextareaVariant'

// ** Source code imports
import * as source from 'src/views/forms/form-elements/textarea/TextareaSourceCode'

const Textarea = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12}>
        <CardSnippet
          title='Custom'
          code={{
            tsx: null,
            jsx: source.TextareaCustomJSXCode
          }}
        >
          <Typography>
            Use <code>multiline</code> prop with <code>CustomTextField</code> component to transform the custom text
            field into custom <code>textarea</code>.
          </Typography>
          <TextareaCustom />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet
          title='Variants'
          code={{
            tsx: null,
            jsx: source.TextareaVariantJSXCode
          }}
        >
          <Typography>
            Use <code>multiline</code> prop with <code>TextField</code> component to transform the text field into{' '}
            <code>textarea</code>. Use <code>variant</code> prop with <code>TextField</code> component for different
            variants of textarea.
          </Typography>
          <TextareaVariant />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default Textarea
