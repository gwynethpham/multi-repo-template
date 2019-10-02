import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { persistor, store } from './src/helpers/store';
import { PersistGate } from 'redux-persist/integration/react';
import { CookiesProvider } from 'react-cookie';
import Login from './src/module/layout/Login.js'


function App(){
  return(
       <CookiesProvider>
          <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                  <Login />
              </PersistGate>
          </Provider>
      </CookiesProvider>
    )
 }

export default App;
