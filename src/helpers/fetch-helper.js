import jsonp from "jsonp";

export const fetchHelper = async ({ url, callback }) => {
  jsonp(url, {}, callback);
};
