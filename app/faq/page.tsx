import React from 'react';

export default function FAQPage() {
    const faqs = [
        {
            question: "What is your product?",
            answer: "Our product is a comprehensive solution designed to help you streamline your workflow and increase productivity."
        },
        {
            question: "How do I get started?",
            answer: "Simply sign up for an account, complete the onboarding process, and you'll be ready to use all our features."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers."
        },
        {
            question: "Is there a free trial available?",
            answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required."
        },
        {
            question: "Can I cancel my subscription anytime?",
            answer: "Absolutely! You can cancel your subscription at any time from your account settings."
        },
        {
            question: "Do you offer customer support?",
            answer: "Yes, we provide 24/7 customer support via email and live chat for all our users."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
                    Frequently Asked Questions
                </h1>
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                {faq.question}
                            </h2>
                            <p className="text-gray-600">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}