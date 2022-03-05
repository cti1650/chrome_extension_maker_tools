#!/usr/bin/env node
const fs = require("fs");

try {
  const filePath1 = require("path").resolve("public/ext-config.json");
  const filePath2 = "ext-config.json";

  if (fs.existsSync(filePath1)) {
    if (!fs.existsSync(filePath2)) {
      fs.copyFile(filePath1, filePath2, (err: any) => {
        if (err) {
          console.log(err.stack);
        } else {
          console.log("create ext-config.json");
          console.log(`${filePath1} => ${filePath2}`);
        }
      });
    } else {
      console.log(`already created ${filePath2}`);
    }
  } else {
    console.log(`none ${filePath1}`);
  }
} catch (err) {
  console.log(err);
}
