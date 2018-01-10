export const pageChange = (page) => {
  console.log(page)
  return {
    type: 'PAGE NAVIGATED',
    payload: page
  };
};