/* eslint-disable import/no-unresolved */
import BlazeToReact from 'meteor/thereactivestack:blazetoreact';
import React from 'react';
import { Session } from 'meteor/session';
import classNames from 'classnames';
import { composeWithTracker } from 'react-komposer';

const composer = (props, onData) => {
  const { state, visible, hideLinks } = props;
  let className = '';
  // Adjust the classnames to the flow
  className = classNames({
    visible,
    hideLinks,
    changePassword: Session.get('Meteor.loginButtons.inChangePasswordFlow'),
  });

  // If visible is set, keep the Session var as true
  if (visible && !Session.get('Meteor.loginButtons.dropdownVisible')) {
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }

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

export const LoginButtons = composeWithTracker(composer)(LoginButtonsComponent);
