"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  subtitle: string;
  items: FAQItem[];
}

const faqs: FAQSection[] = [
  {
    title: "Orders",
    subtitle: "Below are some of our common questions about orders",
    items: [
      {
        question: "How do I make a purchase?",
        answer:
          "You can purchase by adding items to your cart and completing checkout.",
      },
      {
        question: "How do I know if my order is confirmed?",
        answer: "You will receive an email confirmation after placing your order.",
      },
      {
        question: "Can I change my shipping address after my order is placed?",
        answer:
          "Please contact support immediately to request address changes.",
      },
    ],
  },
  {
    title: "Shipping & Returns",
    subtitle: "Below are some of our common questions about shipping & returns",
    items: [
      { question: "Do you ship internationally?", answer: "Yes, we ship worldwide." },
      {
        question: "When will my order be shipped?",
        answer: "Orders are processed within 1-2 business days.",
      },
      {
        question: "What is your return policy?",
        answer: "We accept returns within 30 days of purchase.",
      },
      {
        question: "How long will it take until I receive my order?",
        answer: "Delivery time depends on your location, typically 5-7 business days.",
      },
    ],
  },
];

export default function Contact() {
  const [openIndex, setOpenIndex] = useState<{ [key: string]: number | null }>({});

  const toggleAccordion = (sectionTitle: string, index: number) => {
    setOpenIndex((prev) => ({
      ...prev,
      [sectionTitle]: prev[sectionTitle] === index ? null : index,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {faqs.map((section) => (
        <div key={section.title} className="mb-12">
          {/* Section Heading */}
          <h2 className="text-6xl flex justify-center font-semibold text-gray-900 mb-1">
            {section.title}
          </h2>
          <p className="text-gray-600 flex justify-center text-xl mt-5 mb-6">{section.subtitle}</p>

          {/* FAQ Items */}
          <div className="divide-y divide-gray-200">
            {section.items.map((item, index) => (
              <div key={index} className="py-4">
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => toggleAccordion(section.title, index)}
                >
                  <span className="text-gray-800 font-medium">{item.question}</span>
                  {openIndex[section.title] === index ? (
                    <Minus className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                {openIndex[section.title] === index && (
                  <p className="mt-2 text-gray-600 text-sm">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
