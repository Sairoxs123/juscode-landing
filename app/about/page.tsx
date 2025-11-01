import React from 'react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold text-center mb-8 text-gray-900">
                    About Us
                </h1>

                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-semibold mb-4 text-blue-600">Our Story</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Founded in 2020, we started with a simple mission: to make technology
                        accessible to everyone. What began as a small team of passionate developers
                        has grown into a thriving company serving thousands of customers worldwide.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        We believe in innovation, collaboration, and creating products that
                        make a real difference in people's lives.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Innovation</h3>
                        <p className="text-gray-600">Pushing boundaries with cutting-edge solutions</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Quality</h3>
                        <p className="text-gray-600">Excellence in everything we deliver</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Community</h3>
                        <p className="text-gray-600">Building together, growing together</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-semibold mb-4 text-blue-600">Join Us</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Interested in working with us? We're always looking for talented
                        individuals to join our team. Reach out and let's create something amazing together.
                    </p>
                </div>
            </div>
        </div>
    );
}