export const createResults = setresult => {
  return $.ajax({
    method: 'POST',
    url: '/api/setresults',
    data: { setresult }
  });
}

export const fetchSetResult = id => {
  return $.ajax({
    method: 'GET',
    url: `api/setresults/${id}`
  });
}

export const editSetResult = id => {
  return $.ajax({
    method: 'PATCH',
    url: `api/setresults/${id}`,
    data: { data }
  });
}
