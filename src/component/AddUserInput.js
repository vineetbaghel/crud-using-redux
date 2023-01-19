import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../redux/actions/AddUserAction";

function AddUserInput() {
  const { editUser, payload } = useSelector((state) => state.storeValue);
  console.log("payload", editUser);
  const [userDeatils, setUserDeatils] = useState({
    fname: "",
    lname: "",
    age: "",
    gender: "",
  });
  const dispatch = useDispatch();
  const onHandleInput = (e) => {
    setUserDeatils({
      ...userDeatils,
      [e.target.name]: e.target.value,
      id: new Date().getTime().toString(),
    });
  };
  const submitUser = () => {
    if (
      !userDeatils.fname ||
      !userDeatils.lname ||
      !userDeatils.age ||
      !userDeatils.gender
    ) {
      alert("Please fill all the inputs first");
    } else if (editUser?.id) {
      const updateData = payload.map((d) => {
        if (editUser.id === d.id) {
          return userDeatils;
        }
        return d;
      });
      dispatch(updateUser(updateData));
      setUserDeatils({
        fname: "",
        lname: "",
        age: "",
        gender: "",
      });
    } else {
      dispatch(addUser(userDeatils));
      setUserDeatils({
        fname: "",
        lname: "",
        age: "",
        gender: "",
      });
    }
  };
  console.log("user", userDeatils);

  useEffect(() => {
    if (editUser) {
      setUserDeatils({
        fname: editUser.fname,
        lname: editUser.lname,
        age: editUser.age,
        gender: editUser.gender,
      });
    }
  }, [editUser]);
  return (
    <>
      <div className="add-user">
        <div className="inputs">
          <input
            type="text"
            className="user-inputs"
            placeholder="Enter First Name"
            onChange={onHandleInput}
            name="fname"
            value={userDeatils.fname}
          />
          <input
            type="text"
            className="user-inputs"
            placeholder="Enter Last Name"
            onChange={onHandleInput}
            name="lname"
            value={userDeatils.lname}
          />
          <input
            type="text"
            className="user-inputs"
            placeholder="Age"
            onChange={onHandleInput}
            name="age"
            value={userDeatils.age}
          />

          <input
            type="text"
            className="user-inputs"
            placeholder="Enter Gender "
            onChange={onHandleInput}
            name="gender"
            value={userDeatils.gender}
          />
        </div>
        <div className="submit">
          <button className="btn" onClick={submitUser}>
            Submit User
          </button>
        </div>
      </div>
    </>
  );
}

export default AddUserInput;
