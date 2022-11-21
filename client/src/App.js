import './App.css';
import { HeaderComponent } from './components/Header/Header';

function App() {
  return (
    <div className="App">
        <HeaderComponent></HeaderComponent>
        <div className="colors">
          <h2>Background color: rgb(20, 20, 20) <div className="sphere"></div></h2>
          <h2>Main text color: rgb(252, 252, 252) <div className="white"></div></h2>
        </div>
    </div>
  );
}

export default App;