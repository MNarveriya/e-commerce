import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
// import { ProductLibrary } from "./ProductLibrary";
import { Getapiproductindivisual } from "./Getapi";
import { useEffect } from "react";

export const Parentdiv = styled.div`
  height: 84.3vh;
  width: 100%;
  display: flex;
  /* position: relative; */
  justify-content: center;
  align-items: center;
`;

export const Productcard = styled.div`
  width: 800px;
  margin: 50px 12px;
  background-color: #fff;
  text-transform: capitalize;
  padding: 50px 50px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  box-shadow: 0px 0px 0px 1px whitesmoke;
`;

export const Child = styled.div`
  margin: 0px 20px;
`;

export const NamePrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Producdetails = styled.div`
  color: gray;
  font-size: 13px;
  margin: 15px 0px;

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

export const Button = styled.button`
  ${(props) =>
    props.back &&
    css`
      position: absolute;
      top: 1rem;
      left: 1rem;
      color: #fff;
      text-transform: capitalize;
      background-color: indigo;
    `}

  ${(props) =>
    props.privious &&
    css`
      position: absolute;
      top: 25rem;
      left: 10rem;
      color: #fff;
      text-transform: capitalize;
      background-color: indigo;
    `}

  ${(props) =>
    props.next &&
    css`
      position: absolute;
      top: 25rem;
      color: #fff;
      right: 10rem;
      text-transform: capitalize;
      background-color: indigo;
    `}

  ${(props) =>
    props.cart &&
    css`
      border: none;
      outline: none;
      box-shadow: 0px 0px 0px 1px indigo;
      padding: 5px;
      text-transform: capitalize;
      color: #fff;
      text-transform: capitalize;
      background-color: indigo;
    `}
`;

const Input = styled.input`
  box-shadow: 0px 0px 0px 1px indigo;
  width: 50px;
  padding: 5px;
  margin-right: 5px;
`;

export const ProductDetails = ({ oncount }) => {
  const key = useParams();
  const keyid = parseInt(key.id);
  const id = keyid + 1;

  const [pro, setPro] = useState();

  useEffect(() => {
    const indivisual = Getapiproductindivisual(id);
    indivisual.then((respose) => {
      setPro(respose.data);
    });
  }, [id]);

  const nav = useNavigate();

  const [count, setCount] = useState(1);

  const addTocart = () => {
    oncount(count, id);
    //  console.log(count)
  };

  const handleval = (e) => {
    setCount(+e.target.value);
  };

  //  if (!pro) {
  //     return <div>Loding...</div>
  //  }

  return (
    <Parentdiv>
      {pro ? (
        <>
          <Productcard>
            <Image src={pro.thumbnail} alt="image" />
            <Child>
              <NamePrice>
                <Producdetails>{pro.brand}</Producdetails>
                <Producdetails star> ${pro.price}.00</Producdetails>
              </NamePrice>
              <Producdetails changelogo>{pro.title}</Producdetails>
              <Producdetails changelogo>{pro.description}</Producdetails>
              <Producdetails>{pro.category}</Producdetails>
              <Input type="number" onChange={handleval} value={count} />
              <Button cart onClick={addTocart}>
                Add to Cart
              </Button>
            </Child>
            <Button onClick={() => nav("/")} back>
              &#8656;back
            </Button>
          </Productcard>
          {id > 1 && (
            <Button
              onClick={() =>
                nav("/productdetails/" + (id - 1 - 1) + "/details")
              }
              privious
            >
              &#8656;privious
            </Button>
          )}
          {id < 30 && (            
              <Button
              onClick={() =>
                nav("/productdetails/" + (id + 1 - 1) + "/details")
              }
              next
            >
              next&#8658;
            </Button>
          )}
        </>
      ) : (
        <>Loding...</>
      )}
    </Parentdiv>
  );
};
