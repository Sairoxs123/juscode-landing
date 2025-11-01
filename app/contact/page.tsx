'use client';

import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

// Assuming createLog is imported from your utils
// import { createLog } from '@/utils/logs';

// Mock function if you don't have createLog yet
const createLog = (event: string, data?: object) => {
  console.log('Log Event:', event, data);
};

// Interface for our form's state
interface FormDataState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormDataState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    createLog('homepage_contact_form_view');
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        createLog('homepage_contact_form_submit_success', {
          user_email: formData.email,
          subject: formData.subject,
        });

        // Reset form after showing success message
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
      }, 1500);
    } catch (error: any) {
      createLog('homepage_contact_form_submit_failed', {
        user_email: formData.email,
        subject: formData.subject,
        error: error.message,
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 min-h-[calc(100vh-4rem)] py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full mb-6 animate-pulse"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? Drop us a message and
            we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-indigo-600 opacity-10 rounded-full"></div>
          <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-purple-600 opacity-10 rounded-full"></div>

          <h3 className="text-2xl font-bold text-gray-800 mb-8 relative z-10">
            Send us a Message
          </h3>

          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-fadeIn">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Message Sent!
              </h4>
              <p className="text-gray-600">
                Thank you for contacting us. We'll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-indigo-400 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700 transform hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <div className="text-sm text-gray-500 text-center mt-6">
                We'll never share your email with anyone else.
              </div>
            </form>
          )}
        </div>

        {/* Decorative elements */}
        <div className="relative h-24 mt-20">
          <div
            className="absolute top-0 left-1/4 w-6 h-6 bg-indigo-400 rounded-full animate-bounce"
            style={{ animationDelay: '0.2s' }}
          ></div>
          <div
            className="absolute top-8 left-1/3 w-4 h-4 bg-purple-400 rounded-full animate-ping"
            style={{ animationDelay: '0.6s', animationDuration: '3s' }}
          ></div>
          <div
            className="absolute top-4 right-1/3 w-8 h-8 bg-pink-400 rounded-full opacity-70 animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;