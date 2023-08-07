import styled from "styled-components";


export const Container = styled.div`
  position: relative;
  width: 100%;
  /* background-color: lightgray;  */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Inputsdiv = styled.div`
  background-color: #fff;
  padding: 15px 0px;
  position: absolute;
  right: 0rem;
  top: 0rem;
  width: 52rem;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 1.5rem;

`;

export const Input = styled.input`
  /* position: absolute;
  right: 0.1rem;
  top: 0px; */
  margin-right: 20px;
  padding: 5px;
  outline: none;
  border: none;
  background-color: whitesmoke;
  /* box-shadow: 0px 0px 0px 1px red; */
`;

export const Select = styled.select`
  /* position: absolute; */
  /* top: 20px; */
  margin-right: 10px;
  /* right: 12rem; */
  padding: 5px;
  outline: none;
  border: none;
  background-color: whitesmoke;
  /* box-shadow: 0px 0px 0px 1px red; */

`;

export const Option = styled.option`
  padding: 5px;
  outline: none;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 0px 1px red;
`;