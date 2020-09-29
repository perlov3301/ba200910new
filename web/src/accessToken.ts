// instead of global variable your have to use 
// state management libriry or request from apollo
let accessToken = "";

export const setAccessToken = (s: string) => {
  accessToken = s;
}

export const getAccessToken = () => {
  return accessToken;
}
