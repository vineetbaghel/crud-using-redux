import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, edituser } from "../redux/actions/AddUserAction";

function UsersList() {
  const users = useSelector((state) => state.storeValue.payload);
  const dispatch = useDispatch();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Male</th>
            <th>Edit user</th>
            <th>Delete User</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>
                    <button onClick={() => dispatch(edituser(user))}>
                      Edit user
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => dispatch(deleteUser(user.id))}
                    >
                      Delete user
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
