/* eslint-disable import/no-unresolved */
import BlazeToReact from 'meteor/thereactivestack:blazetoreact';
import React from 'react';
import { Session } from 'meteor/session';
import classNames from 'classnames';

export const LoginButtons = (props) => {
  const { state, visible, hideLinks } = props;

  const className = classNames({
    visible,
    hideLinks,
  });

  if (visible) Session.set('Meteor.loginButtons.dropdownVisible', true);
  if (state === 'signUp') Session.set('Meteor.loginButtons.inSignupFlow', true);
  if (state === 'forgotPassword') Session.set('Meteor.loginButtons.inForgotPasswordFlow', true);

  const BlazeLoginButtons = BlazeToReact('loginButtons');
  return (
    <div className={className}>
      <BlazeLoginButtons {...props} />
    </div>
  );
};
