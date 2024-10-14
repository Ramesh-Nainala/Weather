/* eslint-disable import/no-cycle */
import {action, thunk} from 'easy-peasy';
import {URLS} from '../../constants/urls';
import {getRequestApi, postRequestApi} from '../../helpers/AxiosHelper';
import utils from '../../helpers/utils';

export default {
  saveWeatherToRedis: thunk(async (actions, params) => {
    try {
      utils.startLoader();
      const response = await postRequestApi(URLS.ADD_WEATHER_REDIS, params);
      utils.stopLoader();
      alert(response?.response);
    } catch (error) {
      utils.stopLoader();
      utils.showAlert('Error', error?.response);
    }
  }),

  redisWeatherData: undefined,
  setRadisWeatherData: action((state, payload) => {
    state.redisWeatherData = payload;
  }),
  getRadisWeatherData: thunk(async (actions, params) => {
    utils.startLoader();
    actions.setRadisWeatherData(undefined);
    try {
      const response = await getRequestApi(URLS.GET_WEATHER_REDIS + params.city);
      actions.setRadisWeatherData(response.data);
      utils.stopLoader();
    } catch (error) {
      utils.stopLoader();
      utils.showAlert('Error', error.errorResponse.response);
    }
  }),
};
