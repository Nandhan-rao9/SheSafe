import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Map, Volume2, AlertTriangle, Users, User } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/safe-routing', icon: Map, label: 'Safe Routing' },
    { path: '/sound-detection', icon: Volume2, label: 'Sound Detection' },
    { path: '/suspicious-locations', icon: AlertTriangle, label: 'Report' },
    { path: '/trusted-contacts', icon: Users, label: 'Contacts' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-pink-500">SafeGuard</Link>
          <div className="flex space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative flex flex-col items-center p-2 rounded-lg transition-colors
                    ${isActive ? 'text-pink-500' : 'text-gray-600 hover:text-pink-400'}`}
                >
                  <Icon size={20} />
                  <span className="text-xs mt-1">{item.label}</span>
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500"
                      layoutId="navbar-indicator"
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;