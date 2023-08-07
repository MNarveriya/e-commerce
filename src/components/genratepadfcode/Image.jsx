import React, { useState } from "react";

export const Image = () =>{
    const [file , setFile] = useState();
       const handlechange = (e) =>{
          console.log(e.target.files)
          setFile(URL.createObjectURL(e.target.files[0]));
       }

        const clicklme = () =>{
            handlechange();
        }
    return(
        <>
         <input type="file" onChange={handlechange}/>
         <img src={file}/>
         <button onClick={clicklme}>click</button>   
        </>
    )
}