import { fetchHelper } from "../fetch-helper";
import jsonp from "jsonp";
import mockSongData from "../mock-data";

const url = "https://itunes.apple.com/search?term=rock&media=music";

jest.mock("jsonp");

afterEach(() => {
  jest.resetAllMocks();
});

test("returns song data if request has been successful", done => {
  function mockCallback(_, data) {
    try {
      expect(data).toBe(mockSongData);
      done();
    } catch (error) {
      done(error);
    }
  }

  jsonp.mockImplementationOnce(() => mockCallback(null, mockSongData));

  fetchHelper({
    url,
    callback: mockCallback
  });
});

test("returns error data if error fetching", done => {
  function mockCallback(err) {
    try {
      expect(err).toBe("404");
      done();
    } catch (error) {
      done(error);
    }
  }

  jsonp.mockImplementationOnce(() => mockCallback("404"));

  fetchHelper({
    url,
    callback: mockCallback
  });
});
