import './App.css';
import Header from './components/Header';
import LatestNews from './components/Latest/LatestNews';
import Navbar from './components/Navbar/Navbar';
import ScheduleCards from './components/Schedule/ScheduleCards';
import TeamCard from './components/TeamCard';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>

    <Navbar />
    <Header />
    <TeamCard />
    <ScheduleCards />
    <LatestNews />
    <Footer />
    </Router>
    </>
  );
}

export default App;
