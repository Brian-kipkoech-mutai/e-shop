
import { Provider } from 'react-redux';
import './App.css';
import HomeComponent from './presentational/homeComponent';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <HomeComponent/> 
    </Provider>
     

  );
}

export default App;
