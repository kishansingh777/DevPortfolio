import { useState, useEffect } from "react";

interface TypingAnimationProps {
  phrases: string[];
  className?: string;
}

export default function TypingAnimation({ phrases, className = "" }: TypingAnimationProps) {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeText = () => {
      const phrase = phrases[phraseIndex];
      
      if (isDeleting) {
        setCurrentPhrase(phrase.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        setCurrentPhrase(phrase.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === phrase.length) {
        typeSpeed = 2000;
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        typeSpeed = 500;
      }

      setTimeout(typeText, typeSpeed);
    };

    const timer = setTimeout(typeText, 100);
    return () => clearTimeout(timer);
  }, [phrases, phraseIndex, charIndex, isDeleting]);

  return (
    <span className={`${className} border-r-2 border-code-accent animate-pulse`}>
      {currentPhrase}
    </span>
  );
}
