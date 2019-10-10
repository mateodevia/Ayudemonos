import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import App from "/imports/ui/App";
import App2 from "/imports/ui/App2";
import "../imports/startup/accounts-config.js";

Meteor.startup(() => {
  render(<App2 />, document.getElementById("react-target"));
});
