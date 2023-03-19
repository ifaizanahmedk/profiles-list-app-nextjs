/* eslint-disable react/prop-types */
import { Provider } from 'react-redux';

import '@/styles/globals.css';
import store from '@/redux/store';

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
