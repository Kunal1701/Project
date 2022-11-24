import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee";
function DisplayUser() {
  const navigate = useNavigate();
  const [employees, setEmployees] = React.useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await EmployeeService.getEmployees();
        setEmployees(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res) => {
      if (employees) {
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id);
        });
      }
    });
  };
  return (
    <div className="my-4 w-full h-full">
      <div>
        <button
          onClick={() => navigate("/new")}
          className="border rounded-lg font-normal tracking-wide bg-gray-600 uppercase text-white px-2 hover:underline hover:bg-gray-700 mx-4"
        >
          Add Employee
        </button>
      </div>
      <div className="my-3">
        <table className="table-auto w-full border">
          <thead className="bg-gray-100">
            <tr className="font-bold text-gray-600 tracking-wider text-sm">
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees &&
              employees.map((employee) => (
                <Employee
                  employee={employee}
                  deleteEmployee={deleteEmployee}
                  key={employee.id}
                ></Employee>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DisplayUser;
