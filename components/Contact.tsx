// components/Contact.tsx

'use client';

import { motion } from 'framer-motion';
import { CONTACT_INFO } from '@/lib/data';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="container mx-auto py-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white">Visit Us Today</h2>
        <p className="text-lg text-gray-400 mt-2">
          Ready to experience exceptional dining? We'd love to welcome you to Madras.
        </p>
        <p className="text-lg text-gray-400">Make a reservation or simply drop by!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Left Side: Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-2">📍 Location</h3>
            <p className="text-gray-300 text-sm">{CONTACT_INFO.address}</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-2">📞 Phone</h3>
            <p className="text-gray-300 text-sm">Order & Reservations:</p>
            <p className="text-gray-300 text-sm">{CONTACT_INFO.phone}</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-2">✉️ Email</h3>
            <p className="text-gray-300 text-sm">{CONTACT_INFO.email}</p>
            <p className="text-gray-300 text-sm">events@madras.com</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-2">⏳ Hours</h3>
            <ul className="text-gray-300 text-sm">
              {CONTACT_INFO.hours.map(line => <li key={line}>{line}</li>)}
            </ul>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Send us a Message</h2>
          <form
            action="https://formspree.io/f/YOUR_UNIQUE_CODE" // Make sure to replace with your Formspree URL
            method="POST"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="firstName" type="text" placeholder="First Name" required className="w-full bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
              <input name="lastName" type="text" placeholder="Last Name" required className="w-full bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            </div>
            <input name="email" type="email" placeholder="Email" required className="w-full bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            <input name="phone" type="tel" placeholder="Phone (Optional)" className="w-full bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            <textarea name="message" placeholder="Message" rows={5} required className="w-full bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-yellow-500 text-black font-bold py-3 px-8 rounded-full transition-colors hover:bg-yellow-400"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;