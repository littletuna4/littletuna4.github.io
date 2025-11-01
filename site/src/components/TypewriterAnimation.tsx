'use client';

import { useState, useEffect } from 'react';
export const professions = [
  'engineers',
  'scientists',
  'technologists',
  'it professionals',
  'geologists',
  'mathematicians',
  'chemists',
  'web developers',
  'biologists',
  'doctors',
  'healthtech',
  'data analysts',
  'software engineers',
  'cybersecurity specialists',
  'mechanical engineers',
  'electrical engineers',
  'civil engineers',
  'environmental scientists',
  'project managers',
  'product designers',
  'automation specialists',
  'systems engineers',
  'researchers',
  'biomedical engineers',
  'process engineers',
  'materials scientists',
  'robotics engineers',
  'ux/ui designers',
  'machine learning engineers',
  'aerospace engineers',
  'industrial designers',
  'energy consultants',
  'mining engineers',
  'quality assurance specialists',
  'technical writers',
  'data scientists',
  'ai researchers',
  'chemical engineers',
  'environmental consultants',
  'network administrators',
  'database engineers',
  'mechanics',
  'mechatronics engineers',
  'medical researchers',
  'software architects',
  'construction managers',
  'statisticians',
  'optical engineers',
  'marine scientists',
  'agronomists',
  'urban planners',
  'hydrologists',
  'ecologists',
  'geneticists',
];

/**
 * TypewriterAnimation Component
 *
 * Functional Requirements:
 * - Display a typing animation that cycles through the professions array
 * - Type out each profession character by character
 * - Delete each profession character by character before moving to the next
 * - Loop infinitely through all professions
 * - Provide smooth typing and deleting animations with configurable speeds
 * - Be fully responsive and accessible
 * - Support customizable styling through className prop
 */

interface TypewriterAnimationProps {
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  prefix?: string;
  suffix?: string;
}

export default function TypewriterAnimation({
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  prefix = 'for ',
  suffix = '',
}: TypewriterAnimationProps) {
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentProfession = professions[currentProfessionIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing phase
          if (currentText.length < currentProfession.length) {
            setCurrentText(currentProfession.slice(0, currentText.length + 1));
          } else {
            // Finished typing, pause before deleting
            setIsPaused(true);
          }
        } else {
          // Deleting phase
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            // Finished deleting, move to next profession
            setIsDeleting(false);
            setCurrentProfessionIndex(
              prevIndex => (prevIndex + 1) % professions.length
            );
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    isPaused,
    currentProfessionIndex,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className={`inline-block ${className}`}>
      {prefix}
      <span className='text-primary font-semibold'>
        {currentText}
        <span className='animate-pulse'>|</span>
      </span>
      {suffix}
    </span>
  );
}
