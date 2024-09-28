import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { persistor, store } from './app/store/Store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
      <BrowserRouter>
            <PersistGate loading={null} persistor={persistor} />
            <Provider store={store}>
                  <App />
            </Provider>
      </BrowserRouter>
)
