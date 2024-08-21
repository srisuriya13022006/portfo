import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';  // Hook import
import myPhoto from '../assets/hi.jpg';  // Import the image

const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #F4F6F7;
  padding: 80px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const TextSection = styled.div`
  flex: 1;
  max-width: 50%;
  padding-right: 20px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(-50px)')};
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #2C3E50;
  margin-bottom: 30px;
  animation: fadeIn 1s ease-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  color: #5D6D7E;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.6;
  animation: fadeInText 1s ease-out;
  @keyframes fadeInText {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Photo = styled.div`
  flex: 1;
  max-width: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(50px)')};
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }
`;

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,  // Trigger only once when it enters the viewport
    threshold: 0.2,     // Trigger when 20% of the section is visible
  });

  return (
    <AboutSection ref={ref} id="about">
      <TextSection isVisible={inView}>
        <Title>About Me</Title>
        <Text>
          I am Sri Suriya S, a passionate AI developer and freelancer. I specialize in front-end web development, AI chatbot development, and converting Figma designs to functional Flutter applications. Currently, I'm pursuing a B.Tech in AI and Data Science at Sri Eshwar College of Engineering.
        </Text>
      </TextSection>
      <Photo isVisible={inView}>
        <img src={myPhoto} alt="Sri Suriya S" />
      </Photo>
    </AboutSection>
  );
}

export default About;
