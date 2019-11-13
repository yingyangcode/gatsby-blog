import React from 'react';
import  {navigate} from 'gatsby'
import Header from "../components/Header"

const Test = () => (
  <>
    <Header title="Header of Test"/>
    <div>
      <h1>This is a test</h1>
      <h1>This is a test</h1>
      <button onClick={() => navigate("/")}>Navigate To Homepage</button>
    </div>
    </>
)

export default Test;