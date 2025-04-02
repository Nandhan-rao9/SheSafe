import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const SafeRouting = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card"
        >
          <h2 className="text-2xl font-bold mb-6">Plan Your Safe Route</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-1">
                Starting Point
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="source"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Enter starting location"
                />
                <MapPin className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                Destination
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="destination"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Enter destination"
                />
                <MapPin className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
            <button className="w-full btn btn-primary">
              Find Safe Route
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card bg-gray-100 min-h-[400px] flex items-center justify-center"
        >
          <p className="text-gray-500">Map will be displayed here</p>
        </motion.div>
      </div>
    </div>
  );
};

export default SafeRouting;