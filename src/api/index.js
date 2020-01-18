const BASE_API = 'https://randomuser.me/api/';

export const getUsers = async (pageNum) => {
  const query = await fetch(`${BASE_API}?page=${pageNum}&results=10`);
  const data = await query.json();

  return data;
};