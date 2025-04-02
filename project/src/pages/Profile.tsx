import { motion } from 'framer-motion';
import { Phone, AlertTriangle, List, BookOpen, UserPlus, Shield } from 'lucide-react';

const Profile = () => {
  const menuItems = [
    { icon: Phone, label: 'Fake Caller' },
    { icon: AlertTriangle, label: 'Report Suspicious Places' },
    { icon: List, label: 'Your SOS Collection' },
    { icon: BookOpen, label: 'Explore Safety Articles' },
    { icon: UserPlus, label: 'Invite a Friend' },
    { icon: Shield, label: 'Privacy Policy' },
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <motion.div
        className="max-w-lg mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-8">
          <div className="flex flex-col items-center">
            <motion.img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            />
            <h2 className="mt-4 text-2xl font-bold">Sarah Johnson</h2>
            <p className="text-gray-600">sarah@example.com</p>
          </div>

          <div className="mt-8 space-y-3">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.label}
                className="w-full flex items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <item.icon className="text-gray-600 mr-3" size={20} />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <motion.button
          className="w-full bg-pink-500 text-white py-4 text-lg font-semibold hover:bg-pink-600 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          SOS
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Profile;