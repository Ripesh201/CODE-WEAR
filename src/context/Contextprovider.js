import React, { useRef ,useState} from "react";
import Dbcon from "./Dbcon";
import Refcon from "./Refcontext";

function Contextprovider(props) {
  let reflog = useRef(null);
  let refreg = useRef(null);
  let refsignup = useRef(null);
  let refclose = useRef(null);
  let refsignin = useRef(null);
  let refclosein = useRef(null);

  const [reload, setreload] = useState()
  // 1.get use details for contact page
  const getcontact = async () => {
    try {
      const res = await fetch("http://localhost:5000/details/getcontact", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const jsondata = await res.json();
      console.log(jsondata);
      if (res.status === 200) {
        
        localStorage.setItem("fname", jsondata.fname.toString());
      }
    } catch (e) {
      console.log("getcontact data err" + e);
    }
  };
  return (
    <>
      <Refcon.Provider
        value={{ reflog, refreg, refsignup, refclose, refsignin, refclosein ,reload,setreload}}
      >
        <Dbcon.Provider value={{getcontact}}>
          {props.children}
          </Dbcon.Provider>
      </Refcon.Provider>
    </>
  );
}

export default Contextprovider;
