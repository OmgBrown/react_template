export default (state=null, action) => {
  switch(action.type){
    case 'PAGE NAVIGATED':
      return action.payload;
      break;
  }
  return state;
}