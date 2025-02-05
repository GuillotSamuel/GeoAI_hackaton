import { useRef } from 'react';
import './App.css';
import EventXTeam from './EventXTeam.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Performances from './Performances.jsx';
import Presentation from './Presentation.jsx';

function App() {
  // Références pour chaque section (div)
  const presentationRef = useRef(null);
  const performancesRef = useRef(null);
  const eventXTeamRef = useRef(null);

  // Fonction pour défiler jusqu'à une section spécifique
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Fonction pour monter (vers la section précédente)
  const scrollUp = () => {
    const currentSection = window.scrollY;
    if (currentSection > 0) {
      window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
    }
  };

  // Fonction pour descendre (vers la section suivante)
  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      
      {/* Divs correspondant aux sections */}
      <div ref={presentationRef} style={{ height: '100vh', backgroundColor: '#f1f1f1' }}>
        <Presentation />
      </div>

      <div ref={performancesRef} style={{ height: '100vh', backgroundColor: '#e2e2e2' }}>
        <Performances />
      </div>

      <div ref={eventXTeamRef} style={{ height: '100vh', backgroundColor: '#d3d3d3' }}>
        <EventXTeam />
      </div>
  
      {/* Boutons pour faire défiler */}
      <div className="scroll-buttons">
        <button onClick={scrollUp} className="scroll-btn up-btn">↑</button>
        <button onClick={scrollDown} className="scroll-btn down-btn">↓</button>
      </div>
    </>
  );
}

export default App;
