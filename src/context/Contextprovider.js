import React, { useRef ,useState} from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import Dbcon from "./Dbcon";
import Refcon from "./Refcontext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contextprovider(props) {
  let reflog = useRef(null);
  let refreg = useRef(null);
  let refsignup = useRef(null);
  let refclose = useRef(null);
  let refsignin = useRef(null);
  let refclosein = useRef(null);
  let refpass = useRef(null);
  let refclosepass = useRef(null);
  let refopass = useRef(null);
  let refnpass = useRef(null);
  let refrpass = useRef(null);
  let refloc = useRef(null);
  let reflocclose = useRef(null);
  let reflocsub = useRef(null);

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
      localStorage.setItem("userId", jsondata._id)
      if (res.status === 200) {
        
        localStorage.setItem("fname", jsondata.fname.toString());
      }
    } catch (e) {
      console.log("getcontact data err" + e);
    }
  };


   //.change password
   const changepass = async (opass, npass, rpass) => {

    const res = await fetch("http://localhost:5000/auth/changepass", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({ opass, npass, rpass })
    })
    const msg = await res.json()
    if (res.status === 200) {
      toast.success(`your passord has been changed`, {
        position: "top-right",
        autoClose: 2300,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          textTransform: "capitalize"
        }
      })
      refclosepass.current.click();
      // console.log(msg);
      refopass.current.value = "";
      refnpass.current.value = "";
      refrpass.current.value = "";
    }
    else {
      toast.warn(`${msg}`, {
        position: "top-right",
        autoClose: 2300,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          textTransform: "capitalize"
        }
      })
    }
  }

  let navigate = useNavigate()
  const yourorder = async (hno, area, pin, cod, city) => {
    
    try {
      const res = await fetch("http://localhost:5000/yourorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify({ hno, area, pin, cod, city })
      })
      const msg=await res.json()
      if (res.status === 200) {
        // localStorage.setItem("count", 0)

        Swal.fire({
          title: 'Order Has Been placed!',
          text: 'Your order will be delivered in next 30 minutes',
          icon: 'success',
          confirmButtonColor: "#2ec780",
         
        })
        navigate('/');
        reflocclose.current.click()
      }else{
        toast.warning(`${msg}`, {
          position: "top-right",
          autoClose: 2300,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
              textTransform: "capitalize"
          }
      })
      }
    } catch (e) {
      console.log(`your order err ${e}`);

    }
  }
  return (
    <>
      <Refcon.Provider
        value={{ reflog, refreg, refsignup, refclose,refnpass,reflocclose,reflocsub,refrpass, refsignin, refclosein ,refloc,reload,setreload,refclosepass,refpass,refopass}}
      >
        <Dbcon.Provider value={{getcontact,changepass,yourorder}}>
          {props.children}
          </Dbcon.Provider>
      </Refcon.Provider>
    </>
  );
}

export default Contextprovider;
