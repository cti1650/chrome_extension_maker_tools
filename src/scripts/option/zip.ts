#!/usr/bin/env node
const file_system = require("fs");
const archiver = require("archiver");

const zip_name = "zip_extensions";

const output = file_system.createWriteStream(`${zip_name}.zip`);
const archive = archiver("zip");

output.on("close", function () {
  console.log(archive.pointer() + " total bytes");
  console.log(
    "archiver has been finalized and the output file descriptor has closed."
  );
});

archive.on("error", function (err: any) {
  throw err;
});
archive.directory("extensions", zip_name);
archive.pipe(output);
archive.finalize();
