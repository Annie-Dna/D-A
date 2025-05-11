import SectionIcon from '../common/SectionIcon';

const CollaborationContent = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-50 px-4 py-2 rounded-full mb-4">
            <h2 className="text-[#5A90A8] font-bold flex items-center">
              <SectionIcon />Partner With Us
            </h2>
          </div>
          <h2 className="text-[#002147] text-4xl lg:text-[42px] font-bold leading-[1.2] mb-6">
            Let's Make a Difference Together
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We believe in the power of collaboration to create meaningful impact in our community. 
            Join us in our mission to empower youth and create positive change through various partnership opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Partnership Types */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-[#002147] mb-4">Program Sponsorship</h3>
            <p className="text-gray-600">
              Support our youth development programs through financial sponsorship or resource provision.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-[#002147] mb-4">Mentorship</h3>
            <p className="text-gray-600">
              Share your expertise and experience with our youth through mentorship programs.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-[#002147] mb-4">Event Partnership</h3>
            <p className="text-gray-600">
              Collaborate with us on events, workshops, and community initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationContent; 