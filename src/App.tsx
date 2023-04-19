import React from 'react';
import {SafeAreaView} from 'react-native';
import Routes from './Pages/Container/Routes';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => (
  <SafeAreaView style={{flex: 1}}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </SafeAreaView>
);

export default App;
