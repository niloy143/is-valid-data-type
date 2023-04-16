const {
  STRING,
  INTEGER,
  BOOLEAN,
  ARRAY,
  OBJECT,
  STR_ARR,
  INT_ARR,
  EMAIL,
  DATE,
} = require("../types");

const isValidEmail = (email) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};

const isValidDataType = (type, data) => {
  switch (type) {
    case STRING:
      return typeof data === "string";

    case INTEGER:
      return typeof data === "number";

    case BOOLEAN:
      return typeof data === "boolean";

    case ARRAY:
      return Array.isArray(data);

    case OBJECT:
      return Object.prototype.toString.call(data) === "[object Object]";

    case STR_ARR:
      if (!Array.isArray(data)) {
        return false;
      }
      try {
        for (const el of data) {
          if (typeof el !== "string") {
            throw new Error();
          }
        }
      } catch (e) {
        return false;
      }
      return true;

    case INT_ARR:
      if (!Array.isArray(data)) {
        return false;
      }
      try {
        for (const el of data) {
          if (typeof el !== "number") {
            throw new Error();
          }
        }
      } catch (e) {
        return false;
      }
      return true;

    case EMAIL:
      return isValidEmail(data);

    case DATE:
      return !isNaN(new Date(data));

    default:
      break;
  }
};

module.exports = isValidDataType;
