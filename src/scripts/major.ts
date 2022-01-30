#!/usr/bin/env node
const { Manifest } = require("../class");
const { update, save } = Manifest();
update("major");
save();
