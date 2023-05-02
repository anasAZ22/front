import {Routes, Route} from 'react-router-dom'
import ContactForm from "./ContactForm";
import {Customer} from "./client/index";
import {AddEmployees} from './client/AddEmployees';
import {EditEmployees} from './client/EditEmployees';

import React from 'react';
function Routers() {
    return (
        <Routes>
            <Route exact path="/Contact" element={<ContactForm />} />
            <Route exact path="/Clients" element={<Customer />} />
            <Route exact path="/AddEmployees" element={<AddEmployees />} />
            <Route exact path="/editEmployee" element={<EditEmployees />} />
        </Routes>
    )
}

export default Routers