import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../packages/pages/Home';
// import { Signin } from '../packages/pages/CrudAgente/Signin';
import { CrudMedico } from '../packages/pages/CrudMedico';
import { CrudAgente } from '../packages/pages/CrudAgente';
import { Areas } from '../packages/pages/Areas';
import { CrudPaciente } from '../packages/pages/CrudPaciente';
import SigninAgente from '../packages/pages/CrudAgente/Signin/Signin';
import SigninPaciente from '../packages/pages/CrudPaciente/Signin/Signin';
import SigninMedico from '../packages/pages/CrudMedico/Signin/Signin';


function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<Home />} />
                    <Route path="/Areas" element={<Areas />} />
                    <Route path="/SigninPaciente" element={<SigninPaciente />} />
                    <Route path="/SigninAgente" element={<SigninAgente />} />
                    <Route path="/SigninMedico" element={<SigninMedico />} />
                    <Route path="/CrudMedico" element={<CrudMedico />} />
                    <Route path="/CrudAgente" element={<CrudAgente />} />
                    <Route path="/CrudPaciente" element={<CrudPaciente />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}



export default RoutesApp; 
