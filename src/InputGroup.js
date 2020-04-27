import React from 'react'
import {withReflex} from 'reflexbox'

const InputGroup = ({...props, label, children, handleInputChange}) =>
  <div {...props} className="input-group">
    <label htmlFor={label}>
      {label}
      {children}
    </label>
  </div>

export default withReflex()(InputGroup)
