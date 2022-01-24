import React, { useState, useEffect } from 'react';
import Blogr from "../components/blogr/blogr"
import { Loader } from 'rsuite';


const Home = () => {
  const loaderStyle={
    height:"800px",
    width:"100% ",
    margin:"auto",
    padding:"200px",
    backgroundColor:"grey",
  };

  const [loading, setLoading] = useState(true);

  const instance = (
    <div id="loaderInverseWrapper" style={loaderStyle}>
    <Loader inverse center content="loading..." />
  </div>
  );

  function contentLoaded() {
    setLoading(false);
    console.log("load ho gya");
  }

  // {
  //   style={{display: loading ? "none" : "block"}}; 
  //   onLoad={contentLoaded};
  // }

  setTimeout(() =>
    setLoading(false), 5000);

  // useEffect(
  //   () => {
  //     let timer1 = setTimeout(() => setLoading(true), 5000);
  //     console.log("5seconds");

  //     // this will clear Timeout
  //     // when component unmount like in willComponentUnmount
  //     // and show will not change to true
  //     return () => {
  //       clearTimeout(timer1);
  //       contentLoaded();
  //     };
      
  //   },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
  //   []
  // );

  return (
    <div>
      <div style={{display: loading ? "block" : "none"}}>{instance} </div>
      <div style={{display: loading ? "none" : "block"}}><Blogr/></div>
      {/* style={{display: loading ? "none" : "block"}};  */}
    </div>
  );
  
};

export default Home;
