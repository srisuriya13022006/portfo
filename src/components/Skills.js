import React from 'react';
import styled from 'styled-components';

// Import images
import htmlLogo from '../assets/html.jpeg';
import javascriptLogo from '../assets/javasc.jpeg';
import reactLogo from '../assets/react.jpeg';
import pythonLogo from '../assets/python.jpeg';
import flaskLogo from '../assets/flask.jpeg';
import phpLogo from '../assets/php.jpeg';
import uiuxLogo from '../assets/uiux.jpeg';

// Styled components
const SkillsSection = styled.section`
  background-color: #F7F9F9;
  padding: 50px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #17202A;
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

const Category = styled.div`
  margin-bottom: 40px;
`;

const CategoryTitle = styled.h3`
  font-size: 2rem;
  color: #2C3E50;
  margin-bottom: 20px;
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

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Skill = styled.div`
  background-color: #ECF0F1;
  color: #17202A;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  width: 150px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Title>Skills</Title>
      <Category>
        <CategoryTitle>Front-end</CategoryTitle>
        <SkillsList>
          <Skill>
            <img src={htmlLogo} alt="HTML5" />
            HTML/CSS
          </Skill>
          <Skill>
            <img src={javascriptLogo} alt="JavaScript" />
            JavaScript
          </Skill>
          <Skill>
            <img src={reactLogo} alt="React" />
            React.js
          </Skill>
        </SkillsList>
      </Category>
      <Category>
        <CategoryTitle>Back-end</CategoryTitle>
        <SkillsList>
          <Skill>
            <img src={pythonLogo} alt="Python" />
            Python
          </Skill>
          <Skill>
            <img src={flaskLogo} alt="Flask" />
            Flask
          </Skill>
          <Skill>
            <img src={phpLogo} alt="PHP" />
            PHP/MySQL
          </Skill>
        </SkillsList>
      </Category>
      <Category>
        <CategoryTitle>Design</CategoryTitle>
        <SkillsList>
          <Skill>
            <img src={uiuxLogo} alt="UI/UX Design" />
            UI/UX Design
          </Skill>
        </SkillsList>
      </Category>
    </SkillsSection>
  );
}

export default Skills;
