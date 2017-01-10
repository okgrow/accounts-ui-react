/* eslint-disable import/no-unresolved */
import BlazeToReact from 'meteor/thereactivestack:blazetoreact';
import React from 'react';
import { Session } from 'meteor/session';
import classNames from 'classnames';
import composeWithTracker from './composeWithTracker';

const composer = (props, onData) => {
  const { state, visible, hideLinks } = props;

  // Generate classnames that identify the props and the flow
  let className = '';
  className = classNames({
    'accounts-ui-react': true,
    visible,
    hideLinks,
    changePassword: Session.get('Meteor.loginButtons.inChangePasswordFlow'),
  });

  // If visible is set, keep the Session value as true
  if (visible && !Session.get('Meteor.loginButtons.dropdownVisible')) {
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }

  // Set a specific state based on props
  if (state === 'signUp') Session.set('Meteor.loginButtons.inSignupFlow', true);
  if (state === 'forgotPassword') Session.set('Meteor.loginButtons.inForgotPasswordFlow', true);

  onData(null, { className });
};

const LoginButtonsComponent = (props) => {
  const { className } = props;

  const BlazeLoginButtons = BlazeToReact('loginButtons');
  return (
    <div className={className}>
      <BlazeLoginButtons {...props} />
    </div>
  );
};

LoginButtonsComponent.propTypes = {
  className: React.PropTypes.string,
};

export const LoginButtons = composeWithTracker(composer)(LoginButtonsComponent);
