import styled, { css } from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import Nodata from "./Nodata";

export const Granddiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  height: 100vh;
  overflow-y: scroll;
  justify-content: center;
  align-items: center;
  padding-top: 8rem;
  width: 100%;
 
  &::-webkit-scrollbar{
    /* width: 5px; */
    /* height: 2px; */
  }



`;

export const Parentdiv = styled.div`
  width: 250px;
  background-color: #fff;
  margin: 10px 1rem;
  text-transform: capitalize;
  box-shadow: 0px 0px 0px 1px whitesmoke;
  @media(max-width: 600px) {
    display: flex;
      flex-direction: column;
  }

`;

export const Imagediv = styled.div`
  width: 250px;
  height: 200px;
 
  /* box-shadow: 0px 0px 0px 1px ; */
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Child = styled.div`
padding: 0px 5px;
`;

export const NamePrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Producdetails = styled.div`
  color: gray;
  font-size: 13px;
  ${(props) =>
    props.star &&
    css`
      color: red;
    `}

  ${(props) =>
    props.changelogo &&
    css`
      color: black;
      font-size: 15px;
    `}
`;

const Buttondiv = styled.div`
  border: none;
  outline: none;
  /* box-shadow: 0px 0px 0px 1px red; */
  text-align: end;
  font-size: 12px;
  margin: 2px 0px;
  padding: 2px 0px;
`;
const Buttonspan = styled.span`
  cursor: pointer;
  color: blue;
  box-shadow: 0px 1px 0px 0px blue;
`;

export const ProductList = (props) => {
  const nav = useNavigate();

  const { data } = props;

  return (
    <Granddiv>
      {data.map((item, id) => {
        return (
          <Parentdiv key={id}>
            <Imagediv>
              <Image src={item.thumbnail} alt="image" />
            </Imagediv>

            <Child>
              <NamePrice>
                <Producdetails> {item.brand}</Producdetails>
                <Producdetails star> ${item.price}.00</Producdetails>
              </NamePrice>
              <Producdetails changelogo> {item.title}</Producdetails>
              <Producdetails > {item.rating}</Producdetails>
              <Producdetails > {item.category}</Producdetails>
            </Child>
            <Buttondiv>
              <Buttonspan
                onClick={() => nav("/productdetails/" + id + "/details")}
              >
                view details
              </Buttonspan>
            </Buttondiv>
          </Parentdiv>
        );
      })}
      {data.length === 0 && <Nodata />}
    
    </Granddiv>


  );
};
