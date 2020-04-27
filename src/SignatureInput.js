import React from 'react';
import { withReflex } from 'reflexbox';

import InputGroup from './InputGroup';

const SignatureInput = ({ name, role, phone, link, linkTitle, socialIcons, handleInputChange, fastCompanyBadge, cnbcDisruptorBadge }) => (
  <form className="signature-input-form">
    <InputGroup label="Name">
      <input
        autocomplete
        type="text"
        name="name"
        defaultValue={name}
        onChange={handleInputChange}
      />
    </InputGroup>

    <InputGroup label="Team / Role">
      <input type="text" name="role" defaultValue={role} onChange={handleInputChange} />
    </InputGroup>

    <InputGroup label="Phone (optional)">
      <input
        autocomplete
        type="text"
        name="phone"
        defaultValue={phone}
        onChange={handleInputChange}
      />
    </InputGroup>

    <InputGroup label="Link (optional)">
      <input type="text" name="link" defaultValue={link} onChange={handleInputChange} />
    </InputGroup>

    <InputGroup label="Link Title (optional)">
      <input type="text" name="linkTitle" defaultValue={linkTitle} onChange={handleInputChange} />
    </InputGroup>
    <InputGroup label="Show Social Media Links (optional)">
      <input
        type="checkbox"
        name="socialIcons"
        checked={socialIcons}
        onChange={handleInputChange}
        style={{ zoom: 2 }}
        flex
        col={1}
        mb={6}
      />
    </InputGroup>

    <InputGroup label="Show CNBC Disruptor 2019 Badge (optional)">
      <input
        type="checkbox"
        name="cnbcDisruptorBadge"
        checked={cnbcDisruptorBadge}
        onChange={handleInputChange}
        style={{ zoom: 2 }}
        flex
        col={1}
        mb={6}
      />
    </InputGroup>
  </form>
);

export default withReflex()(SignatureInput);
