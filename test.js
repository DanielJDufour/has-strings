const fs = require("fs");
const test = require("ava");
const hasStrings = require("./has-strings");

test("prj file contains GEOGCS and [", async t => {
  const buffer = fs.readFileSync("./data/michigan_lld.prj");
  const { result } = hasStrings({
    data: buffer,
    debug: true,
    strings: ["[", "]", "DATUM"]
  });
  t.true(result);
});
