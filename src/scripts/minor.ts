#!/usr/bin/env node
import { Manifest } from "../class";
const { update, save } = Manifest();
update("minor");
save();
