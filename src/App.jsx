import './App.css'
import ParticleBackground from './common/ParticleBackground'
import PlayerCard from './sections/PlayerCard/PlayerCard'
import Quests from './sections/Quests/Quests'
import Inventory from './sections/Inventory/Inventory'
import Achievements from './sections/Achievements/Achievements'
import Devlogs from './sections/Devlogs/Devlogs'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'

function App() {
  return (
    <>
      <ParticleBackground />
      <PlayerCard />
      <Quests />
      <Inventory />
      <Achievements />
      <Devlogs />
      <Contact />
      <Footer />
    </>
  );
}

export default App