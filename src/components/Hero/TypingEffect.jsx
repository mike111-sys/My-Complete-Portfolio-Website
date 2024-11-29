import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TypingEffect = ({ textArray, typingSpeed }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentText = textArray[textIndex];
    const updateText = () => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, prev.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % textArray.length);
        }
      } else {
        setDisplayText((prev) => currentText.slice(0, prev.length + 1));
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      }
    };

    const timeout = setTimeout(updateText, typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textArray, textIndex, typingSpeed]);

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ fontSize: '1.5rem', color: 'tomato' }}
    >
      {displayText}
    </motion.h1>
  );
};

export default TypingEffect;