const hasBytes = require("has-bytes");

module.exports = ({ data, debug=false, strings, threshold }) => {
  if (debug) console.log("[has-strings] starting with", data);

  const sequences = {};
  if (Array.isArray(strings)) {
    strings.forEach(str => {
      sequences[str] = Array.from(str).map(char => char.charCodeAt(0));
    });
  } else if (typeof strings === "object") {
    Object.entries(strings).forEach(([key, value]) => {
      sequences[key] = Array.from(value).map(char => char.charCodeAt(0));
    });
  }
  if (debug) console.log("[has-strings] sequences:", sequences);

  const { result: passes } = hasBytes({
    data,
    debug: false, // set debug to true for increased logging
    sequences,
    threshold
  });

  const result = { result: passes };

  if (debug) console.log("[has-strings] finishing with", data);

  return result;
};
