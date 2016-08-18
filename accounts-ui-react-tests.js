// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by accounts-ui-react.js.
import { name as packageName } from "meteor/okgrow:accounts-ui-react";

// Write your tests here!
// Here is an example.
Tinytest.add('accounts-ui-react - example', function (test) {
  test.equal(packageName, "accounts-ui-react");
});
