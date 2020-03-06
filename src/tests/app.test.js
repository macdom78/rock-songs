import React from "react";
import { Provider } from "react-redux";
import { render, waitForElement } from "@testing-library/react";
import {
  createHistory,
  createMemorySource,
  LocationProvider
} from "@reach/router";
import App from "../App";
import mockSongData from "../helpers/mock-data";
import { mockStore } from "../helpers/mock-store";

jest.mock("../helpers/fetch-helper", () => ({
  fetchHelper: jest.fn().mockImplementation(() => Promise.resolve(mockSongData))
}));

jest.mock("../redux/actions", () => ({
  setRockSongs: jest.fn()
}));

afterEach(() => {
  jest.resetAllMocks();
});

const renderWithRouter = (
  ui,
  { route = "/", history = createHistory(createMemorySource(route)) } = {}
) => {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    history
  };
};

test("full app rendering/navigating", async () => {
  const {
    getByText,
    history: { navigate }
  } = renderWithRouter(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );

  await waitForElement(() => getByText("Rock"));
  expect(getByText("Rock")).toBeInTheDocument();

  await navigate("/song/1233328913");
  expect(getByText("06/09/2005")).toBeInTheDocument();
});

test("error page loads correctly", () => {
  const { getByText } = renderWithRouter(
    <Provider store={mockStore}>
      <App />
    </Provider>,
    { route: "/error" }
  );

  expect(getByText("Something went wrong :(")).toBeInTheDocument();
});
