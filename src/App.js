import logo from './logo.svg';
import './App.css';
import { Surgalt } from './components/surgalt';
import { Home } from './components/home';

function App() {
  return (
    <div className="App">
        <div className="App-header">
          <Surgalt />
        </div>
      <Home />
      
    </div>
  );
}

export default App;
