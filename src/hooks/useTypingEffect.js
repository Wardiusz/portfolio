import { useState, useEffect, useRef } from 'react';

export function useTypingEffect(words, delay = 0) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [started, setStarted] = useState(false);
  const timerRef = useRef(null);

  // Initial delay
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started || !words.length) return;

    const currentWord = words[wordIndex];

    if (isTyping) {
      if (displayText.length < currentWord.length) {
        timerRef.current = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 150);
      } else {
        // Pause before deleting
        timerRef.current = setTimeout(() => {
          setIsTyping(false);
        }, 5000);
      }
    } else {
      if (displayText.length > 0) {
        timerRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 130);
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timerRef.current);
  }, [started, displayText, isTyping, wordIndex, words]);

  return displayText;
}
