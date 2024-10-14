import {action, thunk} from 'easy-peasy';
import {getRequestApi} from 'helpers/AxiosHelper';
import {URLS} from 'helpers/urls';
import {Utils} from 'helpers/utils';
import {Alert} from 'react-native';

export default {
  weatherData: undefined, // Default value of weather is undefined as we have no data
  setWeatherData: action((state, payload) => {
    // This method sets the value in reducer variable to save into redux store
    state.weatherData = payload;
  }),

  getWeatherData: thunk(async (actions, params) => {
    // This method calls the API from 3rd party weather API by latitude and longitude and saves the data into redux store
    actions.setWeatherData(undefined); // Clear weather data before fetching new data
    try {
      const response = await getRequestApi(URLS.WEATHER_DATA, params);
      actions.setWeatherData(response); // Store the fetched weather data
    } catch (error) {
      Alert.alert(JSON.stringify(error));
      Utils.showAlert('Error', error?.errorResponse?.message);
    }
  }),

  latlngFromCity: undefined,
  setLatLngFromCity: action((state, payload) => {
    state.latlngFromCity = payload;
  }),

  // In order to get weather info from 3rd party API, we need latitude and
  // longitude from user-entered city name. This API gets latitude and longitude from user-entered city name.
  getLatLngFromCity: thunk(async (actions, params) => {
    actions.setLatLngFromCity(undefined); // Clear existing latitude/longitude before fetching new data
    try {
      const response = await getRequestApi(URLS.LATLNG_FROM_CITY, params);
      actions.setLatLngFromCity(response); // Store the latitude and longitude in the state
    } catch (error) {
      actions.setLatLngFromCity(error); // Store the error in the state if needed
      Utils.showAlert('Error', error?.errorResponse?.message);
    }
  }),
};
