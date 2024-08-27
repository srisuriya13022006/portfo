import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  background-color: #ECF0F1;
  padding: 50px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #17202A;
  margin-bottom: 20px;
`;

const ProjectsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProjectCard = styled.div`
  background-color: #F7F9F9;
  color: #17202A;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  width: 300px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ProjectLink = styled.a`
  color: #3498DB;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Projects() {
  return (
    <ProjectsSection id="projects">
      <Title>Projects</Title>
      <ProjectsList>
        <ProjectCard>
          <ProjectTitle>Green Horizon</ProjectTitle>
          <p>Website with ML Model</p>
          <ProjectLink href="https://github.com/srisuriya13022006/green-horizon.git" target="_blank">View on GitHub</ProjectLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Weather App</ProjectTitle>
          <p>Python Project with AI Features</p>
          <ProjectLink href="https://github.com/srisuriya13022006/weather-app" target="_blank">View on GitHub</ProjectLink>
        </ProjectCard>
      </ProjectsList>
    </ProjectsSection>
  );
}

export default Projects;
