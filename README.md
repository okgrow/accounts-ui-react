# accounts-ui-react

The Meteor accounts-ui we know and love, wrapped in React.

## Installation

`meteor add okgrow:accounts-ui-react`

You'll also need to add an [accounts login provider](https://guide.meteor.com/accounts.html#accounts-ui), e.g. `meteor add accounts-password`.

## Basic Usage

Simply import and use the `<LoginButtons />` component.  For example:

```
import React from 'react';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';

const App = () => (
  <div>
    <h1>App</h1>
    <LoginButtons />
  </div>
);

export default App;
```

## Advanced Usage via Props

### Visible

Show the login form by default using the `visible` prop.

`<LoginButtons visible="true" />`

### State

Set the initial state of the login form using the `state` prop.  Choose from `signUp` and `forgotPassword`.  `signIn` is the default behavior.

`<LoginButtons state="signUp" />`

### hideLinks

Stop your user changing the state using the `hideLinks` prop.  A good example of this might be when you are separating our your signUp and signIn forms onto different routes.

`<LoginButtons state="signUp" visible="true" hideLinks="true" />`

This will generate a `signUp` form that the user can't toggle or hide.

## Styles

We have made the styles a little simpler than the original ones, but recommend you skin the form to match your app.