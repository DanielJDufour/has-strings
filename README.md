# has-strings
Fast Way to Check if a File Contains Text Strings

# install
```bash
npm install has-strings
```

# usage
```js
const hasStrings = require("has-strings");

const { result } = hasStrings({
  data: buffer, // data can be ArrayBuffer, Buffer, DataView, String, or Uint8Array
  debug: true, // set debug to true for increased logging
  strings: ["[", "]", "DATUM"]
});
// result is true
```
