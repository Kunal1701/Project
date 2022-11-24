import React from "react";
import { useNavigate } from "react-router-dom";
const Employee = ({ employee, deleteEmployee }) => {
  const navigate = useNavigate();
  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };
  return (
    <tr className="text-center">
      <td className=" px-4 py-2">{employee.firstName}</td>
      <td className=" px-4 py-2">{employee.lastName}</td>
      <td className=" px-4 py-2">{employee.email}</td>
      <td className=" px-4 py-2">
        <a
          onClick={(e, id) => editEmployee(e, employee.id)}
          className="text-blue-500 hover:text-blue-600 underline px-4 hover:cursor-pointer"
        >
          Edit
        </a>
        <a
          onClick={(e, id) => deleteEmployee(e, employee.id)}
          className="text-blue-500 hover:text-blue-600 underline px-4 hover:cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Employee;
