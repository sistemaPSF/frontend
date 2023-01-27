import { useContext } from "react";
import { AuthContext } from "./Auth/AuthContext";
import SigninMedico from "../packages/pages/CrudMedico/Signin/Signin";
import SigninPaciente from "../packages/pages/CrudPaciente/Signin/Signin";
import { SigninAgente } from "../packages";

export const RequireAuth = ({ children} : { children: JSX.Element}) => {
    const auth = useContext(AuthContext);

    if (!auth.agente) {
        return < SigninAgente />
    }
    if (!auth.paciente) {
        return < SigninPaciente />
    }
    if (!auth.medico) {
        return < SigninMedico />
    }
    return children;
}