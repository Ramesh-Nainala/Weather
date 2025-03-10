/* eslint-disable import/no-extraneous-dependencies */
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

const reactron = Reactotron.configure({
  name: 'WeatherApp',
  host: '192.168.29.245',
})
  .useReactNative({
    storybook: true,
    asyncStorage: false, // there are more options to the async storage.
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
    editor: false, // there are more options to editor
    overlay: false, // just turning off overlay
  })
  .use(reactotronRedux())
  .connect();

export default reactron;
