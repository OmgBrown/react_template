export const selectUser = (user) => {
  return {
    type: 'USER SELECTED',
    payload: user
  };
};

export const clearActiveUser = () => {
  return {
    type: 'CLEAR ACTIVE USER',
    payload: null
  };
};


export const logStuff = () => {
  return {
    type: 'LOG STUFF',
    payload: 'log some stuff'
  }
}