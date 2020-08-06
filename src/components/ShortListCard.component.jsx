import React from 'react';
import styled from 'styled-components';
import shortlistProdcuts from '../shortlistProducts';

const ShortListCard = () => {
  return (
    <ShortlistCardContainer>
      <div>
        <Title>My Shortlist </Title>
        <NumOfProdcuts>({shortlistProdcuts.length} Products) </NumOfProdcuts>
      </div>
      <Divider />
    </ShortlistCardContainer>
  );
};

export default ShortListCard;

const ShortlistCardContainer = styled.div`
  width: 80vw;
  margin: 10vh 10vw;
  background-color: white;
  border-radius: 0.5em;
  padding: 30px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const Title = styled.h1`
  font-family: sans-serif;
  display: inline;
`;

const NumOfProdcuts = styled.span`
  font-size: large;
`;

const Divider = styled.div`
  height: 1px;
  background-color: lightgray;
  margin: 20px 0;
`;
