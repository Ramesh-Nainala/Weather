import {getRequestApi, postRequestApi} from '../helpers/AxiosHelper';
import {URLS} from '../helpers/urls';

const doLogin = async (params) => {
  try {
    const response = await postRequestApi(URLS.LOGIN, params);
    return response;
  } catch (e) {
    return e;
  }
};

const doSignup = async (params) => {
  try {
    const response = await postRequestApi(URLS.SIGN_UP, params);
    return response;
  } catch (e) {
    return e;
  }
};

export default {
  doLogin,
  doSignup,
};
