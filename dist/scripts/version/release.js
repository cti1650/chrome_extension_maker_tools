#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_1 = require("../../class");
const { update, save } = (0, class_1.Manifest)();
update("release");
save();
