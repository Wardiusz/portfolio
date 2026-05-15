import { useTypingEffect } from '../hooks/useTypingEffect';

export default function HomeSlide({ words, typingDelay, blinkVisible }) {
  const displayText = useTypingEffect(words, typingDelay);

  return (
    <div className="slide" id="slide-home">
      <div className="content" id="bloczek">
        <h1>
          <span id="word">{displayText}</span>
          <span className={`blink${blinkVisible ? ' visible' : ''}`}>|</span>
        </h1>
      </div>
      <div className={`icon fadeIn${blinkVisible ? ' visible' : ''}`}>
        <span><i className="fa fa-keyboard-o" /></span>
        <span>Use keyboard</span>
      </div>
    </div>
  );
}
