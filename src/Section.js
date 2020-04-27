import React from 'react'
import {withReflex} from 'reflexbox'

const Section = props =>
  <div {...props}>
    {props.children}
  </div>

export default withReflex()(Section)
