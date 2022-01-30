#!/usr/bin/env node
"use strict";
const { Manifest } = require("../class");
const { update, save } = Manifest();
update("major");
save();
