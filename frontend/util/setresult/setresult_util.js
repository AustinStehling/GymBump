export const createResults = setresult => ({
  method: 'POST',
  url: '/api/setresults',
  data: { setresult }
});
