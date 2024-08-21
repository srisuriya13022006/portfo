import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import { Typewriter } from 'react-simple-typewriter';
import profilePhoto from '../assets/hi.jpg'; // Adjust the path based on your file location
import backgroundImage from '../assets/background.png'; // Replace with your actual image path
import typingSound from '../assets/mixkit-keyboard-typing-1386.wav'; // Adjust the path based on your file location

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 20px;
  position: relative;
`;

const WelcomeText = styled(animated.h1)`
  font-size: 3.5rem;
  color: #fff;
  margin-bottom: 15px;
  letter-spacing: 2px;
  font-weight: bold;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const SubText = styled(animated.p)`
  font-size: 1.8rem;
  color: #e0e0e0;
  margin-bottom: 25px;
  letter-spacing: 1.5px;
`;

const TypingText = styled.div`
  font-size: 1.6rem;
  color: #d4d4d4;
  margin-top: 10px;
  padding: 0 20px;
`;

const Photo = styled(animated.div)`
  width: 250px;
  height: 250px;
  background-image: url(${profilePhoto});
  background-size: cover;
  background-position: center;
  border-radius: 50% 45% 45% 30%;
  border: 5px solid #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 12px 25px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

function Hero() {
  const [typingStarted, setTypingStarted] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const welcomeSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
  });

  const subTextSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 400,
  });

  const photoSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 600,
  });

  const audioRef = useRef(null);

  const handleButtonClick = () => {
    setTypingStarted(true);
  };

  useEffect(() => {
    if (typingStarted && !typingComplete) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [typingStarted, typingComplete]);

  return (
    <HeroSection>
      <audio ref={audioRef} src={typingSound} preload="auto" />
      <Photo style={photoSpring} />
      <WelcomeText style={welcomeSpring}>
        Welcome to My Portfolio
      </WelcomeText>
      <SubText style={subTextSpring}>
        I am Sri Suriya S, Freelancing AI Developer
      </SubText>
      <Button onClick={handleButtonClick}>Know About Me</Button>
      {typingStarted && (
        <TypingText>
          <Typewriter
            words={['Hello, I am Sri Suriya, currently pursuing my B.Tech in Artificial Intelligence and Data Science.']}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1000}
            onEnd={() => setTypingComplete(true)}
          />
        </TypingText>
      )}
    </HeroSection>
  );
}

export default Hero;
