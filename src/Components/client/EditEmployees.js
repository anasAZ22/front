import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate ,useParams} from "react-router-dom";

export const EditEmployees=()=> {
  let navigate = useNavigate();
  const {id}= useParams()
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email,password } = employee;

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/products/${id}`, employee);
    navigate("/Clients");
  };
  useEffect(() => {
      loadEmployee();
    }, []);
  const loadEmployee = async () => {
        const result = await axios.get("http://localhost:8080/api/products/${id}");
        setEmployee(result.data);
      };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"> Edit Employee</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                First Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your first name"
                name="firstName"
                value={firstName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                LastName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your last name"
                name="lastName"
                value={lastName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type={"text"} className="form-control" placeholder="Enter your password" name="password" value={password} onChange={(e) => onInputChange(e)}  />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/Clients">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

