import React from 'react';
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Grace Wambui',
      position: 'Marketing Manager',
      review: 'Working with Michael Chege has been an incredible experience. His deep understanding of marketing strategies helped us tremendously in reaching our target audience. The insights and guidance he provided have made a significant impact on our campaigns. He has a keen eye for design and strategy. I highly recommend his expertise for anyone looking to take their marketing efforts to the next level.',
    },
    {
      name: 'Daniel Mutiso',
      position: 'CEO',
      review: 'Michael Chege is an outstanding web developer. He helped us build a sleek, modern website that not only looks great but also functions flawlessly. His attention to detail and ability to implement cutting-edge technologies made the entire process smooth and efficient. I would highly recommend his web development services to anyone looking to create a standout online presence.',
    },
    {
      name: 'James Mwangi',
      position: 'Head of Sales',
      review: 'Michael is a brilliant strategist and a true professional. His ability to analyze complex situations and provide simple, actionable solutions is unparalleled. His work ethic and commitment to quality made him a pleasure to collaborate with. He’s not just a service provider—he’s a true partner. I would highly recommend him to anyone looking for professional consultation',
    }
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-16 px-6 md:px-12" id='testimonials'>
      <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -30 }}
      transition={{ duration: 1.5 }}
      className="text-3xl font-bold text-center mb-10 text-gray-800">
        Featured reviews
        </motion.h2>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 p-8 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 shadow-xl rounded-lg flex flex-col items-center justify-between"
          >
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mr-6">
                {testimonial.name[0]}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-sm text-gray-600 italic">{testimonial.position}</p>
              </div>
            </div>
            <p className="text-base text-gray-700 leading-relaxed text-center">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
