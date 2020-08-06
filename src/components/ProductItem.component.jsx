import React from 'react';
import styled from 'styled-components';

const ProductItem = props => {
  const {
    productImage,
    productName,
    isNew,
    stockCount,
    mrp,
    discount,
    price
  } = props.product;

  return (
    <ProductCard>
      <div style={{ position: 'relative' }}>
        <ProductImage src={productImage} />
        {isNew && <NewTag>New!</NewTag>}
        {stockCount <= 5 ? <StockCount>{stockCount} left!</StockCount> : null}
      </div>
      <ProductName>{productName}</ProductName>
      <PriceRow>
        <Price>&#x20B9; {price}</Price>
        {discount > 0 ? (
          <>
            <MRP>&#x20B9; {mrp}</MRP>
            <Discount>(Upto {discount}% Off)</Discount>
          </>
        ) : null}
      </PriceRow>
      <CTARow>
        <AddToCartBtn onClick={() => props.addToCart(props.product)}>
          Add To Cart
        </AddToCartBtn>
        <DeleteBtn onClick={() => props.remove(props.product)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-trash"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="#9e9e9e"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
        </DeleteBtn>
      </CTARow>
    </ProductCard>
  );
};

export default ProductItem;

const ProductCard = styled.div`
  width: 20vw;
  margin-right: 2vw;
  margin-left: 2vw;
  margin-bottom: 4vw;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 0.3em;
  cursor: pointer;
  transition: transform 200ms ease-in-out;

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transform: scale(1.03);
    /* transition: transform 200ms ease-in-out; */
  }
`;

const ProductImage = styled.img`
  width: 20vw;
  height: auto;
  border-top-left-radius: 0.3em;
  border-top-right-radius: 0.3em;
  /* background-image: url('${props => props.url}'); */
`;

const ProductName = styled.h2`
  font-size: medium;
  font-weight: normal;
  padding: 0 10px;
  height: 10vh;
  text-overflow: ellipsis;
  overflow-y: auto;
  white-space: pre-line;
`;

const NewTag = styled.span`
  position: absolute;
  bottom: 5px;
  left: 0;
  background-color: #9bab2f;
  color: white;
  padding: 4px;
  font-size: smaller;
  font-weight: bolder;
`;

const StockCount = styled.span`
  position: absolute;
  bottom: 5px;
  right: 0;
  background-color: whitesmoke;
  color: red;
  padding: 4px;
  font-size: smaller;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
  padding: 0 10px;
`;

const MRP = styled.span`
  text-decoration: line-through;
  font-size: 14px;
  color: #424242;
  margin-right: 10px;
  line-height: 17px;
`;

const Price = styled.span`
  font-size: 16px;
  font-weight: bolder;
  line-height: 20px;
  margin-right: 10px;
`;

const Discount = styled.span`
  color: #e53935;
  font-size: 14px;
  line-height: 17px;
`;

const CTARow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding: 0 10px;
`;

const AddToCartBtn = styled.button`
  background-color: #ff7043;
  border: 0.1px solid transparent;
  color: white;
  font-size: 14px;
  font-weight: bolder;
  line-height: 28px;
  border-radius: 3px;
  text-transform: uppercase;
  margin-right: 15px;
  cursor: pointer;
  margin-top: 10px;
`;

const DeleteBtn = styled.button`
  border: 1px solid #9e9e9e;
  border-radius: 3px;
  background-color: white;
  cursor: pointer;
  margin-top: 10px;
`;
