import { Provider } from 'react-redux';
import './App.css';
import Form from './store/Form';
import { store } from './components/ContexstApi';
// import Dispaht from './components/Dispaht';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Provider store={store}>
        <Form/>
        {/* <Dispaht/> */}
      </Provider>
    

    </div>
  );
}

export default App;
