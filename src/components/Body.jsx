import React from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Container = styled.div`
  background-color: lightgray;
  width: 100%;
  /* height: 100vh; */
`;

const Navbar = styled.div`
  color: black;
  width: 100%;
  padding: 15px 0;
  z-index: 1;
  text-transform: capitalize;
  background-color: #fff;
  /* text-align: center; */
  display: flex;
  justify-content: space-around;
`;
const Footer = styled.div`
  color: black;
  padding: 15px 0;
  width: 100%;
  background-color: #fff;
  text-transform: capitalize;
  text-align: center;
`;

const Restpart = styled.div`
  /* background-color: blue; */
  width: 100%;
  padding: 5rem 15rem;
  @media (max-width: 600px) {
    padding: 5rem 0rem;
  }
`;

const Icondiv1 = styled.div`
  position: relative;
  /* width: 1.5rem;
  height: 1.5rem; */
  /* box-shadow: 0px 0px 0px 1px red; */
  /* display: flex; */
  /* align-items: center; */
  /* padding: 20px 0; */
`;

const Icondiv1span = styled.span`
  position: absolute;
  bottom: 10px;
  left: 15px;
  font-weight: bolder;
  color: blue;
`;

export const Body = ({ children, count }) => {
  return (
    <Container>
      <Navbar>
        <p>navbar</p>
        <Icondiv1>
          <AiOutlineShoppingCart />
          <Icondiv1span>{count}</Icondiv1span>
        </Icondiv1>
      </Navbar>
      <Restpart>{children}</Restpart>
      <Footer>copy@write</Footer>
    </Container>
  );
};
