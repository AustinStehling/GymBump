export const fetchSingleUser = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });
};

export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/users`
  });
};

export const updateUser = (id, formData) => {
  debugger
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${id}`,
    contentType: false,
    processData: false,
    data: formData
  });
};
