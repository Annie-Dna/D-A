import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactInfoCards = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Address Card */}
          <div className="bg-white rounded-lg p-8 shadow-sm flex items-start gap-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <FaMapMarkerAlt className="#5A90A8 text-2xl" />
            </div>
            <div>
              <h3 className="text-[#002147] text-xl font-bold mb-2">Our Address</h3>
              <p className="text-gray-600">
                Office 301, Business Bay, Dubai, UAE
              </p>
            </div>
          </div>

          {/* Contact Number Card */}
          <div className="bg-white rounded-lg p-8 shadow-sm flex items-start gap-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <FaPhone className="#5A90A8 text-2xl" />
            </div>
            <div>
              <h3 className="text-[#002147] text-xl font-bold mb-2">Contact Number</h3>
              <div className="text-gray-600 mt-4">
                Phone: 0310 958 5555<br />
                Email: DnaYouthClub@gmail.com
              </div>
            </div>
          </div>

          {/* Opening Hour Card */}
          <div className="bg-white rounded-lg p-8 shadow-sm flex items-start gap-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <FaClock className="#5A90A8 text-2xl" />
            </div>
            <div>
              <h3 className="text-[#002147] text-xl font-bold mb-2">Opening Hour</h3>
              <p className="text-gray-600">
                Monday - Saturday: 9:00 - 18:00<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards; 