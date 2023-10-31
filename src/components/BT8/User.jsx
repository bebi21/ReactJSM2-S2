import React from "react";
import "./User.css";
let listUser = [
  {
    name: "locnx",
    age: 22,
    email: "asda@gmail.com",
    dateofbirth: "1998-05-25",
  },
  {
    name: "locnx",
    age: 22,
    email: "asda@gmail.com",
    dateofbirth: "1998-05-25",
  },
  {
    name: "locnx",
    age: 22,
    email: "asda@gmail.com",
    dateofbirth: "1998-05-25",
  },
];

export default function User() {
  return listUser.map((user, index) => (
    <tbody key={index}>
      <tr>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.email}</td>
        <td>{user.dateofbirth}</td>
        <td className="modul">Modulator</td>
        <td>
          <button>delete</button>
          <button>edit</button>
        </td>
      </tr>
    </tbody>
  ));
}
