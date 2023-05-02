import React, {useEffect, useState} from 'react';
import EmployeeService from '../../service/EmployeeService';
import "../../Styles/main.css";
import axios from 'axios';
import { Link ,useParams} from "react-router-dom";
export const Customer = () => {
    const { id } = useParams();
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
             EmployeeService.getEmployees().then((res)=>{
                setEmployees(res.data);
             });
        }, []);
    useEffect(() => {
        loadEmployee();
      }, []);

      const loadEmployee = async () => {
        const result = await axios.get("http://localhost:8080/api/products");
        setEmployees(result.data);
      };

      const deleteEmployee = async (id) => {
        await axios.delete(`http://localhost:8080/api/products/${id}`);
        loadEmployee();
      };
return (
                        <>

                           <h2 className="text-center titre  "> Employees List </h2>
                           <Link to="/AddEmployees" class="btn btn-primary add" >Add Employee</Link>

                           <table className=" center table table-striped" border="5">
                               <thead>
                                   <tr className="tab">
                                       <th>  Id  </th>
                                       <th>First Name</th>
                                       <th>Last Name</th>
                                       <th> Email</th>
                                       <th>Password</th>
                                       <th> Action</th>
                                   </tr>
                               </thead>
                               <tbody>
                                    {
                                       employees.map(
                                           employees=>
                                                 <tr className="align-bottom" key ={employees.id}>
                                                    <td> {employees.id}</td>
                                                    <td> {employees.firstName}</td>
                                                    <td> {employees.lastName}</td>
                                                    <td> {employees.email}</td>
                                                    <td> {employees.password}</td>
                                                    <td><button onClick={() => deleteEmployee(employees.id)} type="button" class="btn btn-danger">Delete</button> <Link to="/EditEmployees" class="btn btn-primary add" >Edit Employee</Link></td>
                                                 </tr>
                                       )
                                    }
                               </tbody>
                           </table>
                   </>
    )
}