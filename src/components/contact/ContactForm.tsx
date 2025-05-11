'use client';

import { useState } from 'react';
import Image from 'next/image';
import Swal from 'sweetalert2';
import SectionIcon from '../common/SectionIcon';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setIsSubmitting(true);
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your message has been sent successfully!',
                    icon: 'success',
                    confirmButtonColor: '#5A90A8',
                });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            } else {
                throw new Error(result.error || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to send message. Please try again.',
                icon: 'error',
                confirmButtonColor: '#5A90A8',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-block bg-gray-50 px-4 py-2 rounded-full mb-4">
                        <h2 className="#5A90A8 font-bold flex items-center">
                            <SectionIcon />Contact Us
                        </h2>
                    </div>
                    <h2 className="text-[#002147] text-4xl lg:text-[42px] font-bold leading-[1.2]">
                        Reach out anytime for help!
                    </h2>
                </div>

                <div className="relative">
                    {/* Background Image - Hidden on mobile */}
                    <div className="hidden lg:block absolute right-0 top-0 w-[60%] h-full rounded-[40px] overflow-hidden">
                        <Image
                            src="/images/contact-img.jpg"
                            alt="Contact Us"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Form */}
                    <div className="relative z-10 w-full lg:max-w-[50%]">
                        <div className="bg-gray-50 rounded-[40px] p-6 sm:p-8 md:p-12">
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-[#5A90A8] placeholder-gray-400"
                                        required
                                    />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-[#5A90A8] placeholder-gray-400"
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone No:"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-[#5A90A8] placeholder-gray-400"
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-[#5A90A8] placeholder-gray-400"
                                        required
                                    />
                                </div>

                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-[30px] border-0 focus:outline-none focus:ring-2 focus:ring-[#5A90A8] placeholder-gray-400 resize-none"
                                        required
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#5A90A8] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#4d7789] transition-colors uppercase font-medium tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm; 