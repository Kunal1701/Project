import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

function NewUser() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    id: "",
  });
  const savedata = (e) => {
    e.preventDefault();
    EmployeeService.createEmployee(employee)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/list");
  };
  return (
    <div className="flex max-w-2xl mx-auto my-4">
      <div className="px-8 py-2 mx-auto ">
        <div className="font-thin text-2xl tracking-wider uppercase">
          <h1>Add New Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-5">
          <label className="block font-normal tracking-wider text-gray-400 text-sm">
            First Name
          </label>
          <input
            type="text"
            className="px-2 py-1 my-2 border"
            value={employee.firstName}
            onChange={(e) =>
              setEmployee({ ...employee, firstName: e.target.value })
            }
            name="firstName"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-5">
          <label className="block font-normal tracking-wider text-gray-400 text-sm">
            Last Name
          </label>
          <input
            type="text"
            className="px-2 py-1 my-2 border"
            value={employee.lastName}
            onChange={(e) =>
              setEmployee({ ...employee, lastName: e.target.value })
            }
            name="lastName"
          />
        </div>

        <div className="items-center justify-center h-14 w-full my-5">
          <label className="block font-normal tracking-wider text-gray-400 text-sm">
            Email
          </label>
          <input
            type="email"
            className="px-2 py-1 my-2 border"
            value={employee.email}
            onChange={(e) =>
              setEmployee({ ...employee, email: e.target.value })
            }
            name="email"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-7">
          <button
            type="submit"
            className="mx-4 bg-green-600 text-white px-2 rounded-lg hover:underline"
            onClick={savedata}
          >
            Submit
          </button>
          <button
            className="mx-4 bg-red-600 text-white px-2 rounded-lg hover:underline"
            onClick={() =>
              setEmployee({
                firstName: "",
                lastName: "",
                email: "",
                employeeId: "",
              })
            }
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewUser;
