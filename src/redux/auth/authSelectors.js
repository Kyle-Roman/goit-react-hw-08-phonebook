const getIsLoggedIn = (state) => state.isLoggedIn;
const getUserName = (state) => state.users.name;
const getIsFetchingCurrentUser = (state) => state.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsFetchingCurrentUser,
};
export default authSelectors;