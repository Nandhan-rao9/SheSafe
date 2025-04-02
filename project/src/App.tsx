import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SafeRouting from './pages/SafeRouting';
import SoundDetection from './pages/SoundDetection';
import SuspiciousLocations from './pages/SuspiciousLocations';
import TrustedContacts from './pages/TrustedContacts';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/safe-routing" element={<SafeRouting />} />
            <Route path="/sound-detection" element={<SoundDetection />} />
            <Route path="/suspicious-locations" element={<SuspiciousLocations />} />
            <Route path="/trusted-contacts" element={<TrustedContacts />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;