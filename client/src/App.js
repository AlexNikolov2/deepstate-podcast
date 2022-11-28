import './App.css';
import { FooterComponent } from './components/Footer/Footer';
import { HeaderComponent } from './components/Header/Header';
import { HomePage } from './pages/home/HomePage';

function App() {
  return (
    <div className="App">
        <HeaderComponent></HeaderComponent>
        <HomePage></HomePage>
        <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;