import React, { useContext, useState } from "react";
import Dbcon from "../context/Dbcon";
import Refcon from "../context/Refcontext";


function Changepass() {
  const refcon = useContext(Refcon);
  const { refpass, refclosepass, refopass,refnpass,refrpass } = refcon;
  const condb = useContext(Dbcon);
  const [pass, setPass] = useState({ opass: "", npass: "", rpass: "" });

  const subHandler = (e) => {
    e.preventDefault();
    let { opass, npass, rpass } = pass;
    condb.changepass(opass, npass, rpass);
  };
  const changeHandler = (e) => {
    setPass({ ...pass, [e.target.name]: e.target.value });
  };
  return (
    <>
      <button
        className="btn btn-primary d-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
        ref={refpass}
      ></button>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header ">
          <h5 className=" text-center m-auto d-flex" id="offcanvasExampleLabel">
            Change Password
          </h5>
         
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            ref={refclosepass}
          ></button>
        </div>
        <hr className="fx-dark w-75 d-block m-auto  pb-4"/>
        
        <div className="offcanvas-body">
          <form method="POST" onSubmit={subHandler}>
          
            <div className="mb-3">
              <label htmlFor="opass" className="form-label text-capitalize  ">
                Old Password
              </label>
              <input
                type="text"
                className="form-control border border-dark"
                id="opass"
                aria-describedby="emailHelp"
                name="opass"
                required
                onChange={changeHandler}
                value={pass.opass}
                ref={refopass}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="npass" className="form-label text-capitalize ">
                New Password
              </label>
              <input
                type="password"
                className="form-control boder border-dark"
                id="npass"
                name="npass"
                required
                onChange={changeHandler}
                value={pass.npass}
                ref={refnpass}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="rpass" className="form-label text-capitalize ">
                Re-Type Password
              </label>
              <input
                type="password"
                className="form-control boder border-dark"
                id="rpass"
                name="rpass"
                required
                onChange={changeHandler}
                value={pass.rpass}
                ref={refrpass}
              />
            </div>

            <input
              type="submit"
              className="mt-4 btn btn-dark d-block m-auto"
              value="Save Password"
              style={{  fontSize: "18px" }}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Changepass;
