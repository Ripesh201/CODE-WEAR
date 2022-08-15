import React, { useRef } from "react";
import Refcon from "./Refcontext";

function Contextprovider(props) {
    let reflog=useRef(null)
    let refreg=useRef(null)
    let refsignup=useRef(null)
    let refclose=useRef(null)
    let refsignin=useRef(null)
    let refclosein=useRef(null)
  return <>
    <Refcon.Provider value={{reflog,refreg,refsignup,refclose,refsignin,refclosein}}>
        {props.children}
    </Refcon.Provider>
  </>;
}

export default Contextprovider;