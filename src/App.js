import React from 'react';
import Clipboard from 'clipboard';
import { withReflex } from 'reflexbox';

import { injectLegacyAttributes } from './helpers';
import Section from './Section';
import AppTitle from './AppTitle';
import SectionTitle from './SectionTitle';
import SignatureInput from './SignatureInput';
import SignatureOutput from './SignatureOutput';
import Button from './Button';
import './App.css';

const BTN_LABEL_DEFAULT = 'Copy to Clipboard';

const defaultState = {
  name: 'Dr. Stephen Phinney, MD, PhD',
  role: 'Chief Medical Officer, Founder',
  phone: '555-555-5555',
  link: 'https://www.virtahealth.com/careers',
  linkTitle: "We're hiring!",
  socialIcons: true,
  fastCompanyBadge: false,
  cnbcDisruptorBadge: true,
};

class App extends React.Component {
  constructor(props) {
    super();
    this.state = defaultState;
    this.attachButtonEvent();
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  static childContextTypes = {
    reflexbox: React.PropTypes.object,
  };

  getChildContext() {
    return {
      reflexbox: {
        breakpoints: {
          sm: '(min-width: 30em)',
          md: '(min-width: 48em)',
          lg: '(min-width: 60em)',
        },
      },
    };
  }

  handleInputChange(e) {
    const newState = { ...this.state };
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    newState[e.target.name] = value;
    this.setState(newState);
  }

  attachButtonEvent() {
    const copySignatureBtn = new Clipboard('.btn');

    copySignatureBtn.on('success', function (e) {
      const btn = document.querySelector('.btn');
      const outputContainer = document.querySelector('.signature-output-container');
      outputContainer.classList.add('copied');
      btn.setAttribute('disabled', 'true');
      e.clearSelection();

      setTimeout(function () {
        outputContainer.classList.remove('copied');
        btn.removeAttribute('disabled');
        btn.textContent = BTN_LABEL_DEFAULT;
      }, 3500);
    });
  }

  componentDidMount() {
    const imgs = document.getElementsByTagName('img');
    const tables = document.getElementsByTagName('table');
    const tds = document.getElementsByTagName('td');
    // React by default strips out legacy attributes like 'valign' and 'border' we need these to render the output properly on legacy email clients like Outlook 2002
    injectLegacyAttributes(imgs);
    injectLegacyAttributes(tables);
    injectLegacyAttributes(tds);
  }

  render() {
    return (
      <div className="App" {...this.props}>
        <AppTitle flexColumn col={12} mb={3} align="center" py={2} px={2} justify="flex-start" />
        <Section flex wrap col={12} p={2} justify="space-around">
          <Section flexColumn wrap col={12} md={5} mb={4}>
            <SectionTitle flex col={12} mb={2} label="Personalize" />
            <SignatureInput
              flex
              col={12}
              {...this.state}
              handleInputChange={this.handleInputChange}
            />
          </Section>

          <Section flexColumn wrap col={12} md={5} mb={4}>
            <SectionTitle flex col={12} mb={2} label="Preview" />
            <SignatureOutput flex col={12} {...this.state} />
            <Button
              flex
              col={12}
              mb={4}
              justify="center"
              className="btn"
              label={BTN_LABEL_DEFAULT}
              data-clipboard-target="#signature-output"
            />

            <SectionTitle flex col={12} mb={2} label="How to use" />
            <a href="http://matt.coneybeare.me/the-right-way-to-install-an-html-signature-in-ios-7-mail/">
              iOS Mail Instructions
            </a>
            <br />
            <a href="https://support.google.com/mail/answer/8395?co=GENIE.Platform%3DDesktop&amp;hl=en">
              Gmail instructions
            </a>
          </Section>
        </Section>
      </div>
    );
  }
}

export default withReflex()(App);
