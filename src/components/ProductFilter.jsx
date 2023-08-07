// import { ProductLibrary } from "./ProductLibrary";
import React, { useEffect, useState } from "react";
import { ProductList } from "./ProductList";
import { Container, Inputsdiv, Select, Option, Input } from "./Styled";
// import Nodata from "./Nodata";
import { Getapifun } from "./Getapi";



export const ProductFilter = () => {
  const [query, setQuery] = useState("");
  const [api, setApi] = useState([]);
  const [sort, setSort] = useState("default");

  let newdata = api.filter((item) => {
    return (
      item.brand.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
    );
  });

  

  useEffect(() => {
   let data = Getapifun();
     data.then((res) => {
      setApi(res.data.products)
  
     })
  }, []);




  if (sort === "price") {
    newdata.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (sort === "name") {
    newdata.sort((a, b) => {
      return a.name < b.name ? -1 : 1;
    });
  }

  const changevalue = (e) => {
    let val = e.target.value;
    setQuery(val);
  };

  const sortproduct = (e) => {
    let sortpro = e.target.value;
    setSort(sortpro);
  };

  return (
    <>
      <Container>
        <Inputsdiv>
          <Select onChange={sortproduct} value={sort}>
            <Option value="default">default</Option>
            <Option value="name">sort by name</Option>
            <Option value="price">sort by price</Option>
          </Select>
          <Input
            type="text"
            value={query}
            placeholder="search for products"
            onChange={changevalue}
          />
        </Inputsdiv>
        <ProductList data={newdata} />
     
      </Container>
      
    </>
  );
};
