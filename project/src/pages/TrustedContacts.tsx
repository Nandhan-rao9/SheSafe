import { motion } from 'framer-motion';
import { UserPlus, Phone, Mail, Trash2 } from 'lucide-react';

const TrustedContacts = () => {
  const contacts = [
    { id: 1, name: 'Nandhan Rao', phone: '+91-9392851715', email: 'abc@example.com' },
    { id: 2, name: 'Harshan Varma', phone: '+91-9494683365', email: 'def@example.com' },
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Trusted Contacts</h2>
            <button className="btn btn-primary flex items-center space-x-2">
              <UserPlus size={20} />
              <span>Add Contact</span>
            </button>
          </div>

          <div className="space-y-4">
            {contacts.map((contact) => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-50 rounded-lg p-4 flex items-center justify-between"
              >
                <div>
                  <h3 className="font-semibold">{contact.name}</h3>
                  <div className="space-y-1 mt-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Phone size={16} className="mr-2" />
                      {contact.phone}
                    </div>
                    <div className="flex items-center">
                      <Mail size={16} className="mr-2" />
                      {contact.email}
                    </div>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-600 p-2">
                  <Trash2 size={20} />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TrustedContacts;