import React, { useContext } from "react";
import Warning from "../warning/Warning";
import "./update.css";
import { update, remove, addHelloToName, updateUser2 } from "../../redux/userSlice";
import { updateUser} from "../../redux/apiCalls";
import {useDispatch, useSelector } from "react-redux";
import { useState } from "react";
// import { updateUser2 } from "../../redux/userSlice";

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const {userInfo, pending, error, success} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // const handleClick = (e) => {
  //   e.preventDefault();
    // without API
    // dispatch(update({ name, email }));
    // with API
    // dispatch(updateUser2({ name, email }));
  // };

  const handleUpdate = (e) => {
    e.preventDefault();
  //  updateUser({name, email}, dispatch);
    dispatch(updateUser2({name, email}));
  }

  // const handleDelete = (e) => {
  //   e.preventDefault();
  //   dispatch(remove());
  // }
  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete" >Delete Account</button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder={userInfo.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                placeholder={userInfo.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button
            className="updateButton"
            disabled={pending}
              onClick={handleUpdate}
            >
              Update
            </button>
            {error && <span className="error">Something went wrong!</span>}
            {pending === false  &&(
              <span className="success">Account has been updated!</span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}