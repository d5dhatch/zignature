import React from 'react'
import {withReflex} from 'reflexbox'

const SectionTitle = ({...props, label, children}) =>
  <div {...props} className="section-title">
    {label}
    {children}
  </div>

export default withReflex()(SectionTitle)
