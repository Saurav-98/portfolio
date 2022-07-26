import React from 'react';
import styled from 'styled-components';
import CV from '../../assets/cv.pdf';
import ME from '../../assets/me.png';

import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

const Header = () => {
  return (
    <HeaderContainer>
      <Container className="container">
        <h5>Hello I'm</h5>
        <h1>Saurav Kumar Verma</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CtaComponent>
          <a href={CV} download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </CtaComponent>

        <ScrollLink href="#contacts">Scroll Down</ScrollLink>

        <SocialsContainer>
          <a href="https://github.com/">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/">
            <BsLinkedin />
          </a>
          <a href="https://twitter.com/">
            <BsTwitter />
          </a>
        </SocialsContainer>

        <ProfileComponent>
          <img src={ME} alt="profile" />
        </ProfileComponent>
      </Container>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  height: 105vh;
  padding-top: 7rem;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    height: 70vh;
  }
  @media screen and (max-width: 600px) {
    height: 100vh;
  }
`;
const Container = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
`;
const CtaComponent = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
`;
const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  position: absolute;
  bottom: 3rem;
  left: 0;

  @media screen and (max-width: 600px) {
    display: none;
  }

  a {
    font-size: 1.2rem;
  }

  &::after {
    content: '';
    height: 2rem;
    width: 1px;
    background-color: var(--color-primary);
  }
`;
const ProfileComponent = styled.div`
  background: linear-gradient(var(--color-primary), transparent);
  width: 22rem;
  height: 30rem;
  position: absolute;
  left: calc(50% - 11rem);
  margin-top: 2rem;
  border-radius: 12rem 12rem 0 0;
  overflow: hidden;
  padding: 5rem 1.5rem 1.5rem;
`;

const ScrollLink = styled.a`
  position: absolute;
  right: -2.3rem;
  bottom: 5rem;
  transform: rotate(90deg);
  font-weight: 300;
  font-size: 0.9rem;
  letter-spacing: 1.6px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
