import { count } from "../../types";

const plus = (payload) => {
  console.log("action =====", {
    type: count.PLUS,
    payload,
  });
  return {
    type: count.PLUS,
    payload,
  };
};
//REact-query (Cache data)
const minus = (payload) => {
  console.log("action =====", {
    type: count.MINUS,
    payload,
  });
  return {
    type: count.MINUS,
    payload,
  };
};

const clean = () => {
  console.log("action =====", {
    type: count.CLEAN,
  });
  return {
    type: count.CLEAN,
  };
};

export { plus, minus, clean };
