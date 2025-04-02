import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome 
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your personal safety companion. Stay protected with our advanced features and real-time assistance.
          </p>
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Tip of the Day</h2>
            <p className="text-gray-600">
              Remember to keep your emergency contacts updated and test the SOS feature regularly.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Quick Actions</h2>
            <Shield className="text-pink-500" size={24} />
          </div>
          <div className="space-y-4">
            <button className="w-full bg-pink-500 text-white rounded-lg py-3 px-4 hover:bg-pink-600 transition-colors">
              Activate SOS Mode
            </button>
            <button className="w-full bg-gray-100 text-gray-800 rounded-lg py-3 px-4 hover:bg-gray-200 transition-colors">
              Check Safe Route
            </button>
            <button className="w-full bg-gray-100 text-gray-800 rounded-lg py-3 px-4 hover:bg-gray-200 transition-colors">
              Report Location
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;