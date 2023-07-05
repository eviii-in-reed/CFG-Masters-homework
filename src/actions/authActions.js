export const setUsername = (username) => {
  return {
    type: 'SET_USERNAME',
    payload: username,
  };
};
  
export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

  
