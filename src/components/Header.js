import React from 'react';
import styled, { keyframes } from 'styled-components';

// Fade-in animation for the name
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Navbar = styled.nav`
  position: sticky;
  top: 0;
  background-color: #17202A;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between; /* Space between name and nav links */
  align-items: center;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Styling for your name on the left side
const Name = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #F39C12;
  font-family: 'Courier New', Courier, monospace;
  animation: ${fadeIn} 1s ease forwards; /* Adding fade-in effect */
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1); /* Slight grow effect on hover */
    color: #F7F9F9; /* Change color on hover */
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px; /* Equal space between links */
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  color: #F7F9F9;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #F39C12;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: #F39C12;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
    left: 0;
    right: auto;
  }
`;

function Header() {
  return (
    <Navbar>
      {/* Name on the left side */}
      <Name>Sri Suriya</Name>
      
      {/* Navigation links */}
      <NavList>
        <NavItem>
          <NavLink href="#hero">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#about">About Me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#skills">Skills</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">Contact</NavLink>
        </NavItem>
      </NavList>
    </Navbar>
  );
}

export default Header;
