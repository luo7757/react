export const type = function (target) {
  const ret = typeof target;
  const template = {
    "[object Array]": "array",
    "[object Object]": "object",
    "[object Number]": "number - object",
    "[object Boolean]": "boolean - object",
    "[object String]": "string - object",
  };
  if (target === null) {
    return "null";
  } else if (ret === "object") {
    const str = Object.prototype.toString.call(target);
    return template[str];
  } else {
    return typeof target;
  }
};
