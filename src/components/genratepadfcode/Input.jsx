import React, { useState } from "react";
import styled from "styled-components";
import { Output } from "./Output";
import jsPDF from "jspdf";


const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const InputBlock = styled.div``;

const Inputs = styled.input``;

const Outputclear = styled.div``;

const Valuedesign = styled.div`
    background-color: gray;
    color: black;
`;


export const Input = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    address: "",
    lastname: "",
    project: "",
    details: "",
    describe: "",
  });



   const [file, setFile] = useState();

  const getValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const Getoutput = () => {
    // event.preventDefault();
    // setReceive([...receive, value]);
    const pdf = new jsPDF();
  
      // add content to the PDF
      pdf.text(`name: ${value.name}`, 10, 10);
      pdf.text(`email: ${value.email}`, 10, 20);
      pdf.text(`address: ${value.address}`, 10, 30);
      pdf.text(`address: ${value.address}`, 10, 30);
      pdf.text(`address: ${file}`, 10, 30);
      // <Image src={file} alt="img" />
      // save the PDF
      pdf.save('my-file.pdf');
  };

  const selectimage = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };
 
  return (
    <>
      <Container id="hide">
      <Input picture type="file" required onChange={selectimage} />
        <InputBlock>
          <label>name</label>
          <Inputs
            type="text"
            onChange={getValue}
            value={value.name}
            name="name"
          />
        </InputBlock>
        <InputBlock>
          <label>email</label>
          <Inputs
            type="text"
            onChange={getValue}
            value={value.email}
            name="email"
          />
        </InputBlock>
        <InputBlock>
          <label>address</label>
          <Inputs
            type="text"
            onChange={getValue}
            value={value.address}
            name="address"
          />
        </InputBlock>
        <InputBlock>
          <label>lastname</label>
          <Inputs
            type="text"
            onChange={getValue}
            value={value.lastname}
            name="lastname"
          />
        </InputBlock>
      </Container>

      <Container id="hide1">
        <InputBlock>
          <label>project</label>
          <Inputs
            type="text"
            onChange={getValue}
            value={value.project}
            name="project"
          />
        </InputBlock>
        <InputBlock>
          <label>details</label>
          <Inputs
            type="text"
            onChange={getValue}
            value={value.details}
            name="details"
          />
        </InputBlock>
        <InputBlock>
          <label>describe</label>
          <Inputs
            type="text"
            onChange={getValue}
            value={value.describe}
            name="describe"
          />
        </InputBlock>
      </Container>
       
     
          {/* <div>
            <h4>{value.name}</h4>
            <h4>{value.email}</h4>
            <h4>{value.address}</h4>
            <h4>{value.lastname}</h4>
            <h4>{value.project}</h4>
            <h4>{value.details}</h4>
            <h4>{value.describe}</h4>
          </div>
        */}

        {/* <Output userdata={value} /> */}
      <button onClick={Getoutput} id="hide2">download</button>
    </>
  );
};
