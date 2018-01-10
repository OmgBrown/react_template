export const receivedPairID = (pairID) => {
  return {
    type: 'PAIRID RECEIVED',
    payload: pairID
  };
};