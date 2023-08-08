export const API_METHODS = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete',
};

export const base_url = "http://172.20.10.6:2020/api"

export const getImage = img => {
  return `${base_url}/auth/${img}`;
};

export const ENDPOINTS = {
  sendOtp: '/auth/customer/login',
  verifyOtp: '/auth/customer/verifyotp'
};
