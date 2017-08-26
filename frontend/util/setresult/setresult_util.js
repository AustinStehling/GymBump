export const createResults = setresult => {
  return $.ajax({
    method: 'POST',
    url: '/api/setresults',
    data: { setresult }
  });
}
