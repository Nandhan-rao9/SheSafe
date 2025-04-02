import { motion } from 'framer-motion';
import { Volume2, AlertCircle } from 'lucide-react';
import { useState } from 'react';

const SoundDetection = () => {
  const [isListening, setIsListening] = useState(false);
  const [showSosAlert, setShowSosAlert] = useState(false);

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card text-center"
        >
          <Volume2 className="mx-auto text-pink-500 mb-4" size={48} />
          <h2 className="text-2xl font-bold mb-4">Sound Detection</h2>
          <p className="text-gray-600 mb-8">
            We'll listen for your safe word and activate SOS mode if detected
          </p>

          <motion.button
            className={`w-32 h-32 rounded-full mb-6 flex items-center justify-center mx-auto
              ${isListening ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-800'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleListening}
          >
            <span className="text-lg font-medium">
              {isListening ? 'Stop' : 'Start'}
            </span>
          </motion.button>

          {isListening && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-gray-500"
            >
              Listening for safe word...
            </motion.div>
          )}
        </motion.div>

        {showSosAlert && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center"
          >
            <AlertCircle className="text-red-500 mr-3" size={24} />
            <div>
              <h3 className="font-semibold text-red-800">SOS Mode Activating</h3>
              <p className="text-red-600 text-sm">Safe word detected! Click to cancel.</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SoundDetection;