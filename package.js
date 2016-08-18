Package.describe({
  name: 'okgrow:accounts-ui-react',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Accounts-ui wrapped in React.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Package.onUse(function (api) {
  api.versionsFrom('1.4.0.1');
  api.use('ecmascript');
  api.use('session');
  api.use('blaze-html-templates');
  api.use('templating', 'client');
  api.use('accounts-ui');
  api.use('thereactivestack:blazetoreact@1.0.2');
  api.addFiles('style.css');
  api.mainModule('accounts-ui-react.js');
});

Npm.depends({
  classnames: '2.2.5',
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('okgrow:accounts-ui-react');
  api.mainModule('accounts-ui-react-tests.js');
});
