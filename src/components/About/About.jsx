import React from 'react';
import styled from 'styled-components';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <AboutSection id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <Container className="container">
        <AboutMe>
          <div>
            <img src={ME} alt="About section Profile Pic" />
          </div>
        </AboutMe>

        <AboutContent>
          <Cards>
            <Card>
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </Card>
            <Card>
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </Card>
            <Card>
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </Card>
          </Cards>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sed
            praesentium voluptatum, nulla nostrum incidunt quia vero harum
            distinctio ducimus maiores enim eligendi tenetur corrupti accusamus
            dolores delectus doloremque quo!
          </p>
          <a href="#contacts" className="btn btn-primary">
            Let's Talk
          </a>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;
const AboutSection = styled.section``;
const Container = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;
const AboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(45deg, var(--color-primary), transparent);
  display: grid;
  place-items: center;

  @media screen and (max-width: 1024px) {
    width: 50%;
    margin: 2rem auto 4rem;
  }

  @media screen and (max-width: 600px) {
    width: 65%;
    margin: 0 auto 3rem;
  }

  div {
    border-radius: 2rem;
    overflow: hidden;
    transform: rotate(10deg);
    transition: var(--transition);

    &:hover {
      transform: rotate(0deg);
    }
  }
`;
const AboutContent = styled.div`
  p {
    color: var(--color-light);
    font-size: 0.8rem;
    margin: 2rem 0 2.6rem;

    @media screen and (max-width: 1024px) {
      margin: 1.5rem 0;
    }
  }
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;
const Card = styled.div`
  background: var(--color-bg-variant);
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
  }

  .about-icon {
    color: var(--color-primary);
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  h5 {
    font-size: 0.9rem;
  }
  small {
    font-size: 0.6rem;
    color: var(--color-light);
  }
`;
