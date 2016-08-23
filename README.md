# accounts-ui-react

The Meteor accounts-ui we know and love, wrapped in React.

## Installation

Assuming you've already got a React project up and running:

**Add the meteor package**

```
meteor add okgrow:accounts-ui-react
```

**Add the npm dependencies for this package**

```
npm install --save react-komposer classnames
```

**Add at least one [accounts login provider](https://guide.meteor.com/accounts.html#accounts-ui).  For example:**

 ```
meteor add accounts-password
```

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

The login form is hidden by default with a dropdown behavior.  If you want to show the dropdown by default, use the `visible` prop.

`<LoginButtons visible />`

### State

Set the initial state of the login form using the `state` prop.  Choose from `signUp` and `forgotPassword`.  `signIn` is the default behavior.

`<LoginButtons state="signUp" />`

### hideLinks

Stop your user changing the state using the `hideLinks` prop.  A good example of this might be when you are separating our your signUp and signIn forms onto different routes.

`<LoginButtons state="signUp" visible hideLinks />`

This will generate a `signUp` form that the user can't toggle or hide.

## Styles

We have made the styles a little simpler than the original ones, but recommend you skin the form to match your app.

## Known limitations

### static-html vs blaze-html-templates

This package uses the original Blaze accounts-ui package under the hood and is therefore incompatible with the static-html package. If you get this error when starting your app:

```
error: conflict: two packages included in the app (templating and static-html) are both trying to handle *.html
```

then you will need to run the following:

```
meteor remove static-html
meteor add blaze-html-templates
```
### Target container is not a DOM element

If you remove this package as usual with `meteor remove okgrow:accounts-ui-react`, but don't have `blaze-html-templates`installed, your app may fail to render, throwing an error in the browser console:

```
Uncaught Invariant Violation: _registerComponent(...): Target container is not a DOM element.
```

To solve this, you can add either `static-html` or `blaze-html-templates` as appropriate to your app's needs.

## Todo

- Add tests
- Verify social logins
