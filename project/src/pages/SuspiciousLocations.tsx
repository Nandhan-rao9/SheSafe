import { motion } from 'framer-motion';
import { MapPin, AlertTriangle } from 'lucide-react';

const SuspiciousLocations = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card"
        >
          <div className="flex items-center mb-6">
            <AlertTriangle className="text-pink-500 mr-3" size={24} />
            <h2 className="text-2xl font-bold">Report Location</h2>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="location"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Enter location name or address"
                />
                <MapPin className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description/Situation of place
              </label>
              <textarea
                id="description"
                rows={3}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Describe the location and situation"
              />
            </div>

            <div>
              <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-1">
                Describe the problem you encountered
              </label>
              <textarea
                id="problem"
                rows={3}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="What made this location feel unsafe?"
              />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center space-x-2 btn btn-secondary"
            >
              <MapPin size={20} />
              <span>Select Location from Map</span>
            </button>

            <button type="submit" className="w-full btn btn-primary">
              Submit Report
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SuspiciousLocations;