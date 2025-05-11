'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import SectionIcon from '../common/SectionIcon';

const qualifications = ['Matric', 'Inter', 'BS', 'MS', 'MPhil', 'Other'];
const occupations = ['Student', 'Businessman', 'Employee', 'Entrepreneur'];

const instituteOptions = [
  { value: 'school', label: 'School' },
  { value: 'college', label: 'College' },
  { value: 'university', label: 'University' },
  { value: 'institute', label: 'Technical Institute' },
  { value: 'academy', label: 'Academy' },
  { value: 'other', label: 'Other' },
];

const interestOptions = [
  { value: 'health', label: 'Health & Wellness' },
  { value: 'technology', label: 'Technology' },
  { value: 'travel', label: 'Travel' },
  { value: 'finance', label: 'Finance' },
  { value: 'fitness', label: 'Fitness' },
  { value: 'food', label: 'Food & Cooking' },
  { value: 'fashion', label: 'Fashion & Style' },
  { value: 'education', label: 'Education' },
  { value: 'art', label: 'Art & Design' },
  { value: 'music', label: 'Music' },
  { value: 'sports', label: 'Sports' },
  { value: 'gaming', label: 'Gaming' },
  { value: 'movies', label: 'Movies & TV' },
  { value: 'entrepreneurship', label: 'Entrepreneurship' },
  { value: 'nature', label: 'Nature & Outdoors' },
  { value: 'photography', label: 'Photography' },
  { value: 'reading', label: 'Reading & Writing' },
  { value: 'spirituality', label: 'Spirituality' },
  { value: 'volunteering', label: 'Volunteering' },
  { value: 'parenting', label: 'Parenting' },
];

type FormData = {
  name: string;
  qualification: string;
  occupation: string;
  whatsapp: string;
  guardianName: string;
  guardianNumber: string;
  address: string;
  hobbies: string;
  institute: string;
};

const MembershipForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInterestChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (!value) return; // Don't add empty values
    if (selectedInterests.includes(value)) {
      return;
    }
    setSelectedInterests(prev => [...prev, value]);
  };

  const removeInterest = (interest: string) => {
    setSelectedInterests(prev => prev.filter(i => i !== interest));
  };

  const onSubmit = async (data: FormData) => {
    try {
      if (selectedInterests.length === 0) {
        Swal.fire({
          title: 'Warning!',
          text: 'Please select at least one interest',
          icon: 'warning',
          confirmButtonColor: '#5A90A8',
        });
        return;
      }

      setIsSubmitting(true);
      const response = await fetch('/api/membership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, interests: selectedInterests }),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: 'Success!',
          text: 'Your membership application has been submitted successfully!',
          icon: 'success',
          confirmButtonColor: '#5A90A8',
        });
        reset();
        setSelectedInterests([]);
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to submit form. Please try again.',
        icon: 'error',
        confirmButtonColor: '#5A90A8',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-50 px-4 py-2 rounded-full mb-4">
            <h2 className="#5A90A8 font-bold flex items-center">
              <SectionIcon />Membership Application
            </h2>
          </div>
          <h2 className="text-[#002147] text-4xl lg:text-[42px] font-bold leading-[1.2]">
            Join Our Community
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-[40px] p-6 sm:p-8 md:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  {...register('name', { required: true })}
                  placeholder="Your Name"
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-[#5A90A8] placeholder-gray-400"
                />
                {errors.name && <span className="text-red-500 text-sm mt-1 ml-4">Name is required</span>}
              </div>

              {/* Qualification */}
              <div>
                <select
                  {...register('qualification', { required: true })}
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-[#5A90A8] placeholder-gray-400"
                >
                  <option value="">Select Qualification</option>
                  {qualifications.map(qual => (
                    <option key={qual} value={qual}>{qual}</option>
                  ))}
                </select>
                {errors.qualification && <span className="text-red-500 text-sm mt-1 ml-4">Qualification is required</span>}
              </div>

              {/* Institute */}
              <div>
                <select
                  {...register('institute', { required: true })}
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-[#5A90A8] placeholder-gray-400"
                >
                  <option value="">Select Institute</option>
                  {instituteOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
                {errors.institute && <span className="text-red-500 text-sm mt-1 ml-4">Institute is required</span>}
              </div>

              {/* Occupation */}
              <div>
                <select
                  {...register('occupation', { required: true })}
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-[#5A90A8] placeholder-gray-400"
                >
                  <option value="">Select Occupation</option>
                  {occupations.map(occ => (
                    <option key={occ} value={occ}>{occ}</option>
                  ))}
                </select>
                {errors.occupation && <span className="text-red-500 text-sm mt-1 ml-4">Occupation is required</span>}
              </div>

              {/* WhatsApp */}
              <div>
                <input
                  type="tel"
                  {...register('whatsapp')}
                  placeholder="WhatsApp Number"
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-[#5A90A8] placeholder-gray-400"
                />
              </div>

              {/* Guardian Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    {...register('guardianName')}
                    placeholder="Guardian Name (Optional)"
                    className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-[#5A90A8] placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    {...register('guardianNumber')}
                    placeholder="Guardian Number (Optional)"
                    className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-[#5A90A8] placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <textarea
                  {...register('address', { required: true })}
                  placeholder="Address"
                  rows={3}
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-[30px] border-0 focus:outline-none focus:ring-2 focus:ring-[#5A90A8] placeholder-gray-400 resize-none"
                />
                {errors.address && <span className="text-red-500 text-sm mt-1 ml-4">Address is required</span>}
              </div>

              {/* Hobbies/Passion */}
              <div>
                <textarea
                  {...register('hobbies', { required: true })}
                  placeholder="Hobbies/Passion"
                  rows={3}
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-[30px] border-0 focus:outline-none focus:ring-2 focus:ring-[#5A90A8] placeholder-gray-400 resize-none"
                />
                {errors.hobbies && <span className="text-red-500 text-sm mt-1 ml-4">Hobbies are required</span>}
              </div>

              {/* Interests */}
              <div>
                <div className="mb-2 flex justify-between items-center">
                  <span className="text-sm text-gray-700">Select Your Interests</span>
                  <span className="text-sm text-gray-500">Selected: {selectedInterests.length}</span>
                </div>
                <select
                  onChange={handleInterestChange}
                  value=""
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-[#5A90A8] placeholder-gray-400"
                >
                  <option value="">Select Interest</option>
                  {interestOptions.map(option => (
                    <option 
                      key={option.value} 
                      value={option.value}
                      disabled={selectedInterests.includes(option.value)}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>

                {/* Selected Interests */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {selectedInterests.map(interest => {
                    const option = interestOptions.find(opt => opt.value === interest);
                    return (
                      <div 
                        key={interest}
                        className="bg-[#5A90A8]/10 text-[#5A90A8] px-3 py-1 rounded-full flex items-center gap-2"
                      >
                        <span>{option?.label}</span>
                        <button
                          type="button"
                          onClick={() => removeInterest(interest)}
                          className="text-[#5A90A8] hover:text-[#4d7789]"
                        >
                          ×
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#5A90A8] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#4d7789] transition-colors uppercase font-medium tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipForm; 