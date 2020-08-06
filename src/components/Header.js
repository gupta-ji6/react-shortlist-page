import React from 'react';
import styled from 'styled-components';

const linksData = [
  {
    id: 1,
    name: 'Stores & Preschool',
    url: 'https'
  },
  {
    id: 2,
    name: 'Support',
    url: 'https'
  },
  {
    id: 3,
    name: 'Track Order',
    url: 'https'
  },
  {
    id: 4,
    name: 'FirstCry Parenting',
    url: 'https'
  },
  {
    id: 5,
    name: 'My Account',
    url: 'https'
  },
  {
    id: 6,
    name: 'My Shortlist',
    url: 'https'
  },
  {
    id: 7,
    name: 'Cart',
    url: 'https'
  }
];

const Header = () => {
  return (
    <HeaderContainer>
      <Logo
        src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"
        alt="firstcry-logo"
      />
      <SearchBar
        type="search"
        placeholder="Search for a Category, Brand or Product"
      />
      <LinksContainer>
        {linksData.map((link, index) => {
          return (
            <Link key={link.id} href={link.url}>
              {link.name}
            </Link>
          );
        })}
      </LinksContainer>
    </HeaderContainer>
  );
};

export default Header;

const SearchBar = styled.input`
  flex: 1;
  height: 6vh;
  width: 25vw;
  padding: 5px;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 0.3rem;

  &:focus {
    border: 1px solid rgb(255, 112, 67);
    outline: 0;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 10vh;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const Logo = styled.img`
  width: auto;
  height: 8vh;
  padding: 0 20px;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 2;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
  font-family: sans-serif;
  font-size: smaller;

  &:hover {
    text-decoration: underline;
  }
`;
