import mockSongData from "./mock-data";

export const mockStore = {
  dispatch: jest.fn(),
  subscribe: jest.fn(),
  getState: jest.fn(() => ({
    rockSongs: {
      songData: mockSongData
    }
  }))
};
