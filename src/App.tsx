import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import CustomRoutes from 'routes';
import { persistor, store } from 'store';
import GlobalStyles from 'styles/GlobalStyles';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <GlobalStyles />
          <CustomRoutes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
