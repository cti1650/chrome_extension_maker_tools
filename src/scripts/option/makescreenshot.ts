#!/usr/bin/env node
import { MakeExtentionImage } from "../../class";
MakeExtentionImage("extensions/images/image.png").then(({ resizeImages }) => {
  const typeList = ["screenshot", "screenshot_big"];
  resizeImages({
    name: "extensions/images/image",
    background: "#222222",
    typeList: typeList,
  });
});
