export default (state=null, action) => {
  switch(action.type){
    case "USER SELECTED":
      return action.payload;
      break;
    case "CLEAR ACTIVE USER":
      return action.payload;
      break;
    case 'LOG STUFF':
      console.log(action.payload);
      break;
  }
  return state;
}