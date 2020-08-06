import React, { useState } from 'react';
import styled from 'styled-components';
import shortlistProdcuts from '../shortlistProducts';
import ProductItem from './ProductItem.component';

// let products = shortlistProdcuts;

const ShortListCard = () => {
  const [products, setProcucts] = useState(shortlistProdcuts);

  const clearAll = () => {
    setProcucts([]);
    console.log('Cleared all items');
  };

  const addToCart = product => {
    let allProdcuts = products;
    allProdcuts = allProdcuts.filter(item => item.id !== product.id);
    setProcucts(allProdcuts);
    alert(`${product.productName} is added to your cart!`);
  };

  const removeFromShortlist = product => {
    let allProdcuts = products;
    allProdcuts = allProdcuts.filter(item => item.id !== product.id);
    setProcucts(allProdcuts);
    // console.log('Removed!');
  };

  return (
    <ShortlistCardContainer>
      <TitleContainer>
        <div>
          <Title>My Shortlist </Title>
          <NumOfProdcuts>({products.length} Products) </NumOfProdcuts>
        </div>
        <ClearAllBtn onClick={clearAll}>Clear All</ClearAllBtn>
      </TitleContainer>
      <Divider />
      {products.length > 0 ? (
        <ProductItemContainer>
          {products.map(product => {
            return (
              <ProductItem
                key={product.id}
                product={product}
                remove={removeFromShortlist}
                addToCart={addToCart}
              />
            );
          })}
        </ProductItemContainer>
      ) : (
        <div>Noooo</div>
      )}
    </ShortlistCardContainer>
  );
};

export default ShortListCard;

const ShortlistCardContainer = styled.div`
  width: 80vw;
  margin: 5vw 10vw;
  background-color: white;
  border-radius: 0.5em;
  padding: 30px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-family: sans-serif;
  display: inline;
`;

const NumOfProdcuts = styled.span`
  font-size: large;
`;

const ClearAllBtn = styled.button`
  background-color: white;
  border: none;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    /* box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05); */
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: lightgray;
  margin: 20px 0;
`;

const ProductItemContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 20px 0px;
`;
