//Action creator
export const selectSong = songs => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: songs
  };
};