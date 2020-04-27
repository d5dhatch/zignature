import React from 'react';
import {withReflex} from 'reflexbox';

const AppTitle = props => (
  <div {...props} className="app-title">
    ✍ Signature Maker
  </div>
);

export default withReflex()(AppTitle);
