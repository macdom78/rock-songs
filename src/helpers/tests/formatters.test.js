import { formatTime, formatDate, formatCurrency } from "../formatters";

test("`formatTime` returns correctly parse time if passed positive integer", () => {
  expect(formatTime(3661000)).toEqual("1hrs 1min(s) 1sec(s)");
});

test("`formatTime` returns no time if non-positive integer supplied", () => {
  expect(formatTime(-1000)).toEqual("");
});

test("`formatTime` returns no time if non-number supplied", () => {
  expect(formatTime("1000")).toEqual("");
});

test("`formatDate` returns correctly formatted date if passed date", () => {
  expect(formatDate("2005-09-06T12:00:00Z")).toEqual("06/09/2005");
});

test("`formatDate` returns no date if not passed a valid date", () => {
  expect(formatDate("2005-13-06T12:00:00Z")).toEqual("");
});

test("`formatCurrency` returns correctly formatted currency", () => {
  expect(formatCurrency({ amount: 1.29, currency: "USD" })).toEqual("$1.29");
});
