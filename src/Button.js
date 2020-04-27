import React from 'react'
import {withReflex} from 'reflexbox'

const Button = (props) =>
  <button {...props}>{props.label}</button>

export default withReflex()(Button)
