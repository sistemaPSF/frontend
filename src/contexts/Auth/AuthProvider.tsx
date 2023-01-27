import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { useApi } from "../../hooks/useApi";
import { Medico } from "../../types/Medicos";
import { Agente } from "../../types/Agentes";
import { Paciente } from "../../types/Pacientes";

export const AuthProvider = ({children}: {children: JSX.Element}) => {
    const [agente, setAgente] = useState<Agente | null>(null);
    const [paciente, setPaciente] = useState<Paciente | null>(null);
    const [medico, setMedico] = useState<Medico | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('access_token');

            if(storageData) {
                const data = await api.validateToken(storageData);
                if(data.paciente) {
                    setPaciente(data.paciente);
                }
            }
        }
        validateToken();
        
    }, [api]);

    const signinAgente = async (email: string, password: string) => {
        const data = await api.signinAgente(email, password);
        if(data.agente && data.token) {
            setAgente(data.agente);
            setToken(data.token);
            return true
        }
        return false;
    }
   
    const signinPaciente = async (email: string, password: string) => {
        const data = await api.signinPaciente(email, password);
        if(data.paciente && data.token) {
            setPaciente(data.paciente);
            setToken(data.token);
            return true
        }
        return false;
    
    }
    
    const signinMedico = async (email: string, password: string) => {
        const data = await api.signinMedico(email, password);
        if(data.medico && data.token) {
            setMedico(data.medico);
            setToken(data.token);
            return true
        }
        return false;
    }

    const signout = async () => {
        setMedico(null);
        setToken('');
        await api.logout();

    }
    const setToken = (token: string) => {
        localStorage.setItem('access_token', token);
    }
    return (
        <AuthContext.Provider value={{ agente, paciente, medico, signinAgente, signinPaciente, signinMedico, signout}}>
            {children}
        </AuthContext.Provider>
    )
}