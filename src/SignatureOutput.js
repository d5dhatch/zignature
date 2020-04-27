import React from "react";
import { withReflex } from "reflexbox";

const leftColStyle = {
  verticalAlign: "middle",
  paddingLeft: 0,
  paddingTop: 0,
  role: "presentation",
  paddingBottom: "1px",
  paddingRight: "14px",
  border: "none",
  borderRight: "1px solid #BBE6FF"
};

const logoImgProps = {
  width: 50,
  height: 56,
  title: "Virta",
  src:
    "https://s3-us-west-2.amazonaws.com/ketoaccountimagesprod/virta-logo-email.png"
};

const rightColStyle = {
  width: "100%",
  textAlign: "left",
  lineHeight: 1.6,
  verticalAlign: "middle",
  paddingLeft: "14px",
  paddingTop: 0,
  paddingBottom: 0,
  paddingRight: 0,
  border: "none",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif',
  fontSize: "9pt"
};

const rightColProps = {
  height: 60
};

const textStyle = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif',
  fontSize: "9pt",
  textAlign: "left",
  fontWeight: "normal",
  width: "100%",
  color: "#226ead"
};

const socialIconsContainerStyle = {
  width: "100%",
  marginTop: "6px",
  display: "block",
  marginLeft: "14px"
};

const socialImgLinkStyles = {
  display: "inline-block",
  marginRight: "10px"
};

const socialImgLinkProps = {
  display: "inline-block",
  marginRight: "10px"
};

const socialImgProps = {
  width: 16,
  height: 16
};

const fcBadgeContainerStyle = {
  marginTop: "10px",
  padding: "8px",
  display: "inline-block",
  border: "1px solid rgb(227, 232, 241)",
  borderRadius: "7px",
  backgroundColor: "rgb(249, 250, 251)",
  lineHeight: 1,
  textDecoration: "none"
};

const cnbcDisruptorStyle = {
  marginTop: "10px",
  display: "inline-block",
  textDecoration: "none"
};

const fcBadgeProps = {
  width: 52,
  height: 52
};

const cnbcDisruptorBadgeProps = {
  width: 220,
  border: 0,
  alt: "Virta listed in CNBC's Top 50 Disruptors",
  nosend: 1
};

const nameStyle = { ...textStyle, fontWeight: "bold" };
const fastCompanyStyle = {
  ...textStyle,
  ...rightColStyle,
  paddingLeft: "10px"
};

const SignatureOutput = props => {
  const nameField = (
    <span style={nameStyle}>
      {props.name}
      <br />
    </span>
  );
  const roleField = (
    <span style={textStyle}>
      {props.role}
      <br />
    </span>
  );
  const phoneField = (
    <span style={textStyle}>
      {props.phone}
      <br />
    </span>
  );
  const linkField = (
    <a href={props.link} style={textStyle}>
      {props.linkTitle ? props.linkTitle : props.link}
      <br />
    </a>
  );
  const socialIconsField = (
    <tr>
      <td />
      <td>
        <div style={socialIconsContainerStyle}>
          <a
            style={socialImgLinkStyles}
            href="https://www.facebook.com/virtahealth"
          >
            <img
              {...socialImgProps}
              src="https://s3.amazonaws.com/assets.virtahealth.com/email-general/social-icons/color/icon-facebook.png"
            />
          </a>
          <a
            style={socialImgLinkStyles}
            href="https://www.twitter.com/virtahealth"
          >
            <img
              {...socialImgProps}
              src="https://s3.amazonaws.com/assets.virtahealth.com/email-general/social-icons/color/icon-twitter.png"
            />
          </a>
          <a
            style={socialImgLinkStyles}
            href="https://www.linkedin.com/company/virta-health"
          >
            <img
              {...socialImgProps}
              src="https://s3.amazonaws.com/assets.virtahealth.com/email-general/social-icons/color/icon-linkedin.png"
            />
          </a>
          <a
            style={socialImgLinkStyles}
            href="https://www.youtube.com/virtahealth"
          >
            <img
              {...socialImgProps}
              src="https://s3.amazonaws.com/assets.virtahealth.com/email-general/social-icons/color/icon-youtube.png"
            />
          </a>
          <br />
        </div>
      </td>
    </tr>
  );

  const fastCompanyBadgeField = (
    <a
      href="https://www.fastcompany.com/company/virta-health"
      style={fcBadgeContainerStyle}
    >
      <table>
        <tbody>
          <tr>
            <td>
              <img
                {...fcBadgeProps}
                src="https://s3.amazonaws.com/assets.virtahealth.com/email-general/email-badges/fc-most-innovative-2019-badge.png"
              />
            </td>
            <td>
              <div style={fastCompanyStyle}>
                <strong>Most Innovative Companies, 2019</strong>
                <br />
                Fast Company
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </a>
  );

  // Without the table, Gmail will treat the image as an attachment and
  // will hide it in the email footer
  const cnbcDisruptorField = (
    <table>
      <tbody>
        <tr>
          <a
            href="https://www.cnbc.com/2019/05/14/virta-health-2019-disruptor-50.html"
            style={cnbcDisruptorStyle}
          >
            <img
              {...cnbcDisruptorBadgeProps}
              src="https://s3.amazonaws.com/assets.virtahealth.com/email-general/email-badges/cnbc-disruptor-50-2019.png"
            />
          </a>
        </tr>
      </tbody>
    </table>
  );

  return (
    <div className="signature-output-container" id="signature-output">
      <table cellSpacing={0} cellPadding={0}>
        <tbody>
          <tr>
            <td style={leftColStyle}>
              <a href="https://www.virtahealth.com">
                <img alt="Virta" {...logoImgProps} />
              </a>
            </td>

            <td {...rightColProps} style={rightColStyle}>
              {props.name && nameField}
              {props.role && roleField}
              {props.phone && phoneField}
              {props.link && linkField}
            </td>
          </tr>
          {props.socialIcons && socialIconsField}

          <tr />
        </tbody>
      </table>
      {props.fastCompanyBadge && fastCompanyBadgeField}
      {props.cnbcDisruptorBadge && cnbcDisruptorField}
    </div>
  );
};

export default withReflex()(SignatureOutput);
