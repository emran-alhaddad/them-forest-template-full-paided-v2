export const dividerDefault = (
  <pre>
    <code className='language-jsx'>
      {`


const DividerDefault = () => {
  return (
    <React.Fragment>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </React.Fragment>
  )
}
export default DividerDefault
`}
    </code>
  </pre>
)

export const dividerText = (
  <pre>
    <code className='language-jsx'>
      {`


const DividerText = () => {
  return (
    <div className='divider'>
      <div className='divider-text'>My Text</div>
    </div>
  )
}
export default DividerText
`}
    </code>
  </pre>
)

export const dividerPosition = (
  <pre>
    <code className='language-jsx'>
      {`
import { Fragment } from 'react'

const DividerPosition = () => {
  return (
    <Fragment>
      <div className='divider divider-start'>
        <div className='divider-text'>Start</div>
      </div>

      <div className='divider divider-start-center'>
        <div className='divider-text'>Start Center</div>
      </div>

      <div className='divider'>
        <div className='divider-text'>Center(Default)</div>
      </div>

      <div className='divider divider-end-center'>
        <div className='divider-text'>End Center</div>
      </div>

      <div className='divider divider-end'>
        <div className='divider-text'>End</div>
      </div>
    </Fragment>
  )
}
export default DividerPosition

`}
    </code>
  </pre>
)

export const dividerColors = (
  <pre>
    <code className='language-jsx'>
      {`


const DividerColors = () => {
  return (
    <React.Fragment>
      <div className='divider'>
        <div className='divider-text'>Default</div>
      </div>
      <div className='divider divider-primary'>
        <div className='divider-text'>Primary</div>
      </div>
      <div className='divider divider-secondary'>
        <div className='divider-text'>Secondary</div>
      </div>
      <div className='divider divider-success'>
        <div className='divider-text'>Success</div>
      </div>
      <div className='divider divider-danger'>
        <div className='divider-text'>Danger</div>
      </div>
      <div className='divider divider-warning'>
        <div className='divider-text'>Warning</div>
      </div>
      <div className='divider divider-info'>
        <div className='divider-text'>Info</div>
      </div>
      <div className='divider divider-light'>
        <div className='divider-text'>Light</div>
      </div>
      <div className='divider divider-dark'>
        <div className='divider-text'>Dark</div>
      </div>
    </React.Fragment>
  )
}
export default DividerColors
`}
    </code>
  </pre>
)

export const dividerIcon = (
  <pre>
    <code className='language-jsx'>
      {`

import { Fragment } from 'react'
import { ArrowDown, Star, Check, XCircle, Clock } from 'react-feather'

const DividerIcon = () => {
  return (
    <Fragment>
      <div className='divider divider-start'>
        <div className='divider-text'>
          <ArrowDown size={15} />
        </div>
      </div>

      <div className='divider divider-start-center'>
        <div className='divider-text'>
          <Star size={15} />
        </div>
      </div>

      <div className='divider'>
        <div className='divider-text'>
          <Check size={15} />
        </div>
      </div>

      <div className='divider divider-end-center'>
        <div className='divider-text'>
          <XCircle size={15} />
        </div>
      </div>

      <div className='divider divider-end'>
        <div className='divider-text'>
          <Clock size={15} />
        </div>
      </div>
    </Fragment>
  )
}
export default DividerIcon

`}
    </code>
  </pre>
)

export const dividerStyle = (
  <pre>
    <code className='language-jsx'>
      {`


const DividerStyle = () => {
  return (
    <React.Fragment>
      <div className='divider divider-dotted'>
        <div className='divider-text'>Dotted</div>
      </div>

      <div className='divider divider-dashed'>
        <div className='divider-text'>Dashed</div>
      </div>

      <div className='divider'>
        <div className='divider-text'>Solid</div>
      </div>
    </React.Fragment>
  )
}
export default DividerStyle
`}
    </code>
  </pre>
)
