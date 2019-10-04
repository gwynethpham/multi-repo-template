import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { persistor, store } from './src/helpers/store';
import { PersistGate } from 'redux-persist/integration/react';
import { CookiesProvider } from 'react-cookie';
import Login from './src/module/layout/Login.js';
// import AppNavigator from './src/index.js';
import { createAppContainer } from 'react-navigation';
// import TabButtonNavigator from './src/module/layout/TabButtonNavigator.js'
import SwitchNavigator from './src/components/index.js'

function App(){
	// const AppContainer = createAppContainer(AppNavigator);
	// const handleNavigationChange = (prevState, newState, action) => {
	// 	//TODO something
	// }
	  return(
	       <CookiesProvider>
	          <Provider store={store}>
	              <PersistGate loading={null} persistor={persistor}>
	                  {/*<AppContainer onNavigationStateChange= {handleNavigationChange} uriPrefix="/app" />*/}
	                  {/*<TabButtonNavigator />*/}
	                  <SwitchNavigator />
	              </PersistGate>
	          </Provider>
	      </CookiesProvider>
	    )
 }

export default App;
