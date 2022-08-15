import React, { useRef } from "react";
import Refcon from "./Refcontext";

function Contextprovider(props) {
    let reflog=useRef(null)
    let refreg=useRef(null)
  return <>
    <Refcon.Provider value={{reflog,refreg}}>
        {props.children}
    </Refcon.Provider>
  </>;
}

export default Contextprovider;