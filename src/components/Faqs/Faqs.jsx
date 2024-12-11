import React, { useState } from 'react';
import { motion } from "framer-motion"

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track only one active index

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between active and inactive
  };

  const faqs = [
    {
      category: 'General FAQs',
      questions: [
        {
          question: 'What services do you offer?',
          answer: 'I specialize in front-end and back-end web development, including responsive design, user-friendly interfaces, and integration with backend technologies.',
        },
        {
          question: 'What industries do you typically work with?',
          answer: 'I have experience working with well-known institutions and clients in e-commerce, education, portfolio development, and more.',
        },
        {
          question: 'What is your development process like?',
          answer: 'My process involves gathering requirements, creating wireframes, developing features, testing for functionality and responsiveness, and delivering a polished product.',
        },
        {
          question: 'Do you work with teams or only handle solo projects?',
          answer: 'I can work independently or collaborate with teams to deliver projects based on your needs.',
        },
        {
          question: 'Do you offer consultancy services?',
          answer: 'Yes, I provide expert advice to help you make informed decisions about your projects.',
        },
      ],
    },
    {
      category: 'Technical FAQs',
      questions: [
        {
          question: 'What technologies do you use?',
          answer: 'My stack includes HTML, CSS, JavaScript, TypeScript, React, Node.js, MySQL, and MongoDB.',
        },
        {
          question: 'Do you provide ongoing support and maintenance?',
          answer: 'Yes, I offer support and maintenance packages to ensure your website stays updated and functional.',
        },
        {
          question: 'Can you convert my existing website to use modern frameworks?',
          answer: 'Absolutely! I can help migrate your website to a more efficient tech stack like React or Tailwind CSS.',
        },
      ],
    },
    {
      category: 'Project FAQs',
      questions: [
        {
          question: 'How long does it take to complete a project?',
          answer: 'Timelines vary based on the scope of the project. A small portfolio site may take 1–2 weeks, while a complex application could take more weeks.',
        },
        {
          question: 'What do you need from me to get started?',
          answer: 'I require a clear understanding of your goals, project requirements, and any specific design elements or content you\'d like to include.',
        },
        {
          question: 'Do you offer revisions?',
          answer: 'Yes, I offer a set number of revisions as part of the project scope to ensure your satisfaction.',
        },
        {
          question: 'Can you help with hosting and domain setup?',
          answer: 'Yes, I can assist with setting up hosting and domains or recommend reliable providers like Truehost.',
        },
        {
          question: 'What is your pricing model?',
          answer: 'Pricing depends on the project size and complexity. I can provide a detailed estimate after discussing your needs.',
        },
      ],
    },
  ];

  return (
    <div id="faqs" className="max-w-7xl mx-auto p-6 space-y-8">
      <motion.h1 className="text-4xl font-bold text-center text-gray-800 mb-6"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -30 }}
      transition={{ duration: 1.5 }}
      >FAQs</motion.h1>
      {faqs.map((section, sectionIndex) => (
        <div key={sectionIndex} className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700">{section.category}</h2>
          {/* Multi-column grid layout for large screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {section.questions.map((item, questionIndex) => {
              const uniqueKey = `${sectionIndex}-${questionIndex}`; // Unique key for each question
              const isActive = activeIndex === uniqueKey; // Check if the FAQ item is active
              return (
                <div
                  key={uniqueKey}
                  className={`bg-white shadow-md rounded-md transition-all duration-500 overflow-hidden cursor-pointer`}
                  onClick={() => toggleFAQ(uniqueKey)} // Toggle the FAQ on click
                >
                  <div className="flex justify-between items-center p-4">
                    <p className="text-lg font-medium text-gray-800">{item.question}</p>
                    <span
                      className={`text-2xl font-bold text-gray-500 transition-transform ${
                        isActive ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </div>
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      isActive ? 'max-h-screen p-4' : 'max-h-0'
                    }`}
                    style={{
                      backgroundColor: '#eaf3ff',
                      overflow: 'hidden',
                    }}
                  >
                    {isActive && (
                      <p className="text-blue-700 text-sm">{item.answer}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faqs;
