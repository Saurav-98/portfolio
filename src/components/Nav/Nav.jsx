import React, { useState } from 'react';
import styled from 'styled-components';

import { AiOutlineHome } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { BiBookBookmark } from 'react-icons/bi';
import { MdOutlineMilitaryTech } from 'react-icons/md';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header');

  return (
    <NavContainer>
      <a
        href="#header"
        onClick={() => setActiveNav('#header')}
        className={activeNav === '#header' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <FiUsers />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBookBookmark />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav('#skills')}
        className={activeNav === '#skills' ? 'active' : ''}
      >
        <MdOutlineMilitaryTech />
      </a>
      <a
        href="#contacts"
        onClick={() => setActiveNav('#contacts')}
        className={activeNav === '#contacts' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: block;
  padding: 0.7rem 1.7rem;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 1rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);

  a {
    background: transparent;
    padding: 1rem;
    border-radius: 50%;
    display: flex;
    color: var(--color-light);
    font-size: 1.1rem;

    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }
  }
  .active {
    background: var(--color-bg);
    color: var(--color-white);
  }
`;
