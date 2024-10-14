import React from 'react';
import {LogBox} from 'react-native';
import Navigation from 'navigation/index';
import {SafeAreaViewProvider} from 'providers/SafeAreaViewProvider';
import {LoaderProvider} from 'providers/LoaderProvider';
import {StoreProvider} from 'easy-peasy';
import store from 'reduxData/store';

function App() {
  React.useEffect(() => {
    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <StoreProvider store={store}>
      <SafeAreaViewProvider>
        <LoaderProvider>
          <Navigation />
        </LoaderProvider>
      </SafeAreaViewProvider>
    </StoreProvider>
  );
}

export default App;
