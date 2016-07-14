import React, { PropTypes } from 'react';

function Auth(props) {
  return (
    <div className="container m-t-3" style={{ maxWidth: 400 }}>
      <h3 style={{ fontWeight: 'normal' }}>
        <i className="fa fa-book"></i> Day by Day
      </h3>
      <hr />
      {props.children}
    </div>
  );
}

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Auth;