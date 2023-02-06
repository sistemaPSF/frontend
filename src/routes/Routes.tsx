import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../packages/pages/HomeInicio';
// import { Signin } from '../packages/pages/CrudAgente/Signin';
import { CrudMedico } from '../packages/pages/CrudMedico';
import { CrudAgente } from '../packages/pages/CrudAgente';
import { Areas } from '../packages/pages/Areas';
import { CrudPaciente } from '../packages/pages/CrudPaciente';
import SigninAgente from '../packages/pages/CrudAgente/Signin/Signin';
import SigninPaciente from '../packages/pages/CrudPaciente/Signin/Signin';
import SigninMedico from '../packages/pages/CrudMedico/Signin/Signin';
import { HomePaciente } from '../packages/pages/CrudPaciente/HomePaciente';
import { AgendarConsulta } from '../packages/pages/CrudPaciente/AgendarConsulta';
import { Perfil } from '../packages/pages/CrudPaciente/Perfil';
import { ConsultasAgendadas } from '../packages/pages/CrudMedico/ConsultasAgendadas';
import { Agendamento } from '../packages/pages/CrudAgente/Agendamento';
import { ListagemConsultas } from '../packages/pages/CrudAgente/ListagemConsultas';
import { RequireAuth } from '../contexts/RequireAuth';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { AuthProvider } from '../contexts/Auth/AuthProvider';
import { Prontuario } from '../packages/pages/CrudMedico/Prontuario';
import { HistoricoConsultas } from '../packages/pages/CrudPaciente/HistoricoConsultas';
import { DetalhamentoConsultas } from '../packages/pages/CrudPaciente/DetalhamentoConsultas';
import { Consultas } from '../packages/pages/CrudPaciente/Consultas';



function RoutesApp() {
    const auth = useContext(AuthContext)
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    {auth.medico && <a href='/'>Sair</a>}
                    <Route path="/" element={<Home />} />
                    <Route path="/Areas" element={<Areas />} />
                    <Route path="/SigninPaciente" element={<SigninPaciente />} />
                    <Route path="/SigninAgente" element={<SigninAgente />} />
                    <Route path="/SigninMedico" element={<SigninMedico />} />
                    <Route path="/CrudMedico" element={<CrudMedico />} />
                    <Route path="/CrudAgente" element={<CrudAgente />} />
                    <Route path="/CrudPaciente" element={<CrudPaciente />} />
                    <Route path="/HomePaciente" element={<HomePaciente />} />
                    <Route path="/AgendarConsulta" element={<AgendarConsulta />} />
                    <Route path="/HistoricoConsultas" element={<HistoricoConsultas />} />
                    <Route path="/Perfil" element={<Perfil />} />
                    <Route path="/Consultas" element={<Consultas />} />
                    <Route path="/DetalhamentoConsultas" element={<DetalhamentoConsultas />} />
                    <Route path="/Agendamento" element={<Agendamento />} />
                    <Route path="/ListagemConsultas" element={<ListagemConsultas />} />
                    <Route path="/ConsultasAgendadas" element={<ConsultasAgendadas />} />
                    <Route path="/Prontuario" element={<Prontuario />} />
                    <Route path="/Consultas" element={<Consultas />} />
                    
                </Route>
            </Routes>

        </BrowserRouter>
    );
}
export default RoutesApp; 
