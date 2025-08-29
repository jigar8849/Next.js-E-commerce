'use client';
import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  {
    question: 'How long will shipping take?',
    answer: 'Shipping usually takes 3-5 business days depending on your location.',
  },
  {
    question: 'How do I know if my order is confirmed?',
    answer: 'You will receive a confirmation email with your order details once it is processed.',
  },
  {
    question: 'Can I change my shipping address after my order is placed?',
    answer: 'This is an example of a response that you might give. It\'s good to be as thorough as possible in responses as that has a tendency to improve trust overall.',
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="max-w-3xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-2">FAQs</h2>
      <p className="text-gray-600 mb-8">Below are some of our common questions</p>

      <div className="divide-y divide-gray-200 text-left">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4 cursor-pointer" onClick={() => toggleFAQ(index)}>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className="text-xl text-gray-600">
                {openIndex === index ? <FiMinus /> : <FiPlus />}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
