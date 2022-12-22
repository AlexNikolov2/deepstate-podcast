import './App.css';
import { FooterComponent } from './components/Footer/Footer';
import { HeaderComponent } from './components/Header/Header';
import { EpisodePage } from './pages/episodes/EpisodesPage';
// import { HomePage } from './pages/home/HomePage';

function App() {
  return (
    <div className="App exo-2">
      <HeaderComponent></HeaderComponent>
      <EpisodePage></EpisodePage>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
