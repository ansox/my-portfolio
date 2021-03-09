import React from 'react';
import Card from './Card';
import CardsSection from './CardsSection';
import ProjectsWrapper from './ProjectsWrapper';
import SectionTitle from './SectionTitle';

const myProjects = [
  {
    title: 'Teste 01',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'Teste 02',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'Teste 03',
    image: 'https://source.unsplash.com/random',
  },
];

const Projects = () => (
  <ProjectsWrapper>
    <SectionTitle>Meus projets</SectionTitle>
    <CardsSection>
      {
        myProjects.map((project) => (
          <Card title={project.title} image={project.image} />
        ))
      }
    </CardsSection>
  </ProjectsWrapper>
);

export default Projects;
