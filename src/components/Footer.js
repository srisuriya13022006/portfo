import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background-color: #17202A;
  color: #F7F9F9;
  padding: 20px;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
`;

function Footer() {
  return (
    <FooterSection>
      <FooterText>&copy; 2024 Sri Suriya S. All rights reserved.</FooterText>
    </FooterSection>
  );
}

export default Footer;
