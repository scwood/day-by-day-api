import React, { PropTypes } from 'react';

function EmailSent({ location }) {
  const { email } = location.query;
  return (
    <div>
      <p>Success <i className="fa fa-check text-success"></i></p>
      <p>We've sent an email to <b>{email}</b>.</p>
      <p>
        Please click the link provided in the email to activate your account.
      </p>
    </div>
  );
}

EmailSent.propTypes = {
  location: PropTypes.object.isRequired,
};

export default EmailSent;
