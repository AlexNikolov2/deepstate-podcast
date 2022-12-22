import './App.css';
import { FooterComponent } from './components/Footer/Footer';
import { HeaderComponent } from './components/Header/Header';
import { EpisodePage } from './pages/episodes/EpisodesPage';
import { HomePage } from './pages/home/HomePage';
import { GuestPage } from './pages/podcast-guests/GuestsPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App exo-2">
      <HeaderComponent></HeaderComponent>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/episodes" element={<EpisodePage />}></Route>
        <Route path="/guests" element={<GuestPage />}></Route>
      </Routes>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
