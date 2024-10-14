import {action, createStore} from 'easy-peasy';
import nodeRedisDB from './models/nodeRedisDB';
import weatherAPI from './models/weatherAPI';

let initialState = {};
/* this is store of redux that includes all reducer  */
const store = createStore({
  weatherAPI, // this reducer save the data into redux store from weather api and use to display it
  nodeRedisDB, // this reducer helps to save the weather data from weatherAPI reducer into radis db to view history city wise
  reset: action(() => ({
    // this function helpts to clear redux store if  needed
    ...initialState,
  })),
});

initialState = store.getState();
export default store;
