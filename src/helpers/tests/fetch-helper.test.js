import fetchMock from "fetch-mock";
import { fetchHelper } from "../fetch-helper";
import mockSongData from "../mock-data";

const url = "https://itunes.apple.com/search?term=rock&media=music";
const navigate = jest.fn();

test("returns song data if request has been successful", async () => {
  fetchMock.mock(url, mockSongData);
  const data = await fetchHelper({ url, navigate });
  expect(data).toEqual(mockSongData);
  fetchMock.restore();
});

test("navigates to error page if request returns 500", async () => {
  fetchMock.mock(url, 500);
  await fetchHelper({ url, navigate });
  expect(navigate).toHaveBeenCalledWith("/error");
  fetchMock.restore();
});

test("navigates to error page if request returns 404 not found", async () => {
  fetchMock.mock(url, 404);
  await fetchHelper({ url, navigate });
  expect(navigate).toHaveBeenCalledWith("/error");
  fetchMock.restore();
});
