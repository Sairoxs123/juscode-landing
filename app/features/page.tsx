import React from 'react';

export default function FeaturesPage() {
    const features = [
        {
            title: 'Fast Performance',
            description: 'Lightning-fast load times and optimal performance for the best user experience.',
            icon: '⚡',
        },
        {
            title: 'Secure & Reliable',
            description: 'Enterprise-grade security with 99.9% uptime guarantee.',
            icon: '🔒',
        },
        {
            title: 'Easy Integration',
            description: 'Seamlessly integrate with your existing tools and workflows.',
            icon: '🔌',
        },
        {
            title: 'Analytics Dashboard',
            description: 'Comprehensive analytics and insights to track your progress.',
            icon: '📊',
        },
        {
            title: '24/7 Support',
            description: 'Round-the-clock customer support to help you succeed.',
            icon: '💬',
        },
        {
            title: 'Scalable Solution',
            description: 'Grows with your business from startup to enterprise.',
            icon: '📈',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        Features
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Everything you need to succeed, all in one place.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}