import { createSelector } from "reselect";

const selectData = (state) => state.data.data;

export const selectTracks = createSelector([selectData], (data) => data.tracks);

export const selectArtistDetails = createSelector(
  [selectData],
  (data) => data.artist
);

export const selectTracksSearchResults = createSelector(
  [selectData],
  (data) => data
);
