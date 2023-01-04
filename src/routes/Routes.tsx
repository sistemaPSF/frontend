import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../packages/pages/Home';
import { Signin } from '../packages/pages/Signin';
import { CrudMedico } from '../packages/pages/CrudMedico';
import { CrudAgente } from '../packages/pages/CrudAgente';


function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<Home />} />
                    <Route path="/Signin" element={<Signin />} />
                    <Route path="/CrudMedico" element={<CrudMedico />} />
                    <Route path="/CrudAgente" element={<CrudAgente />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}



export default RoutesApp; 
