#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_1 = require("../../class");
(0, class_1.MakeExtentionImage)("extensions/icons/icon.png").then(({ resizeImages }) => {
    const typeList = ["screenshot", "screenshot_big"];
    resizeImages({
        name: "extensions/images/image",
        background: "#222222",
        typeList: typeList,
    });
});
