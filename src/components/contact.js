import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import emailjs from '@emailjs/browser';

// Keyframes for typing and blinking effects
const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: white; }
`;

// Styled component for the typing effect
const TypingText = styled(animated.div)`
  font-family: 'Courier New', Courier, monospace;
  color: white;
  overflow: hidden;
  border-right: 0.15em solid white;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: ${typing} 5s steps(30, end) infinite, ${blink} 0.75s step-end infinite;
`;

// Styled component for the bounce button
const BounceButton = styled(animated.button)`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #f39c12;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #e67e22;
  }
`;

// Styled component for the contact container
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  background-color: #1f1f1f;
  color: white;
`;

// Styled component for the form
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
`;

// Styled component for input fields
const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 2px solid #444;
  background-color: #333;
  color: white;
  font-size: 16px;
  
  &:focus {
    border-color: #f39c12;
    outline: none;
  }
`;

// Styled component for text area
const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 2px solid #444;
  background-color: #333;
  color: white;
  font-size: 16px;
  
  &:focus {
    border-color: #f39c12;
    outline: none;
  }
`;

const Contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  // Spring animation for the button
  const bounce = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(1.1)' },
    reset: true,
    reverse: true,
    config: { tension: 200, friction: 5 },
  });

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'service_t723lqc', // Your service ID
      'template_yxoqhwr', // Your template ID
      form.current,
      'MStESyQO7vmzlNNpK' // Your public key
    ).then(
      (result) => {
        console.log('Email successfully sent!', result.text);
        setSubmitted(true);
      },
      (error) => {
        console.log('Failed to send email:', error.text);
      }
    );
  };

  return (
    <ContactContainer id="contact">
      {/* Typing effect text */}
      <TypingText>CONTACT ME!!</TypingText>
      {/* Contact form */}
      <Form ref={form} onSubmit={sendEmail}>
        <Input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />
        <Input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        />
        {!submitted ? (
          <BounceButton style={bounce} type="submit">
            Send Message
          </BounceButton>
        ) : (
          <p style={{ color: '#f39c12', marginTop: '20px' }}>Thank you for your message!</p>
        )}
      </Form>
    </ContactContainer>
  );
};

export default Contact;
