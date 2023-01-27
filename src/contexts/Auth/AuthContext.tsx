import { createContext } from "react";
import { Medico } from "../../types/Medicos";
import { Paciente } from "../../types/Pacientes";
import { Agente } from "../../types/Agentes";

export type AuthContextType ={
    agente: Agente | null;
    paciente: Paciente | null;
    medico: Medico | null;
    
    signinAgente: (email: string, password: string) => Promise<boolean>;
    signinPaciente: (email: string, password: string) => Promise<boolean>;
    signinMedico: (email: string, password: string) => Promise<boolean>;
    signout: () => void;
}
export const AuthContext = createContext<AuthContextType>(null!);