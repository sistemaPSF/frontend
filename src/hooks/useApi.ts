import api from "../services/api";


export const useApi = () => ({
    validateToken: async (token: string) => {
        const response = await api.post('/refresh', { token });
        return response.data;
        
    },
    signinAgente: async (email: string, senha: string) => {
        const response = await api.post('/agentes/loginAgente', { username: email, password: senha});
        return response.data;
    },
    signinPaciente: async (email: string, senha: string) => {
        const response = await api.post('/pacientes/loginPaciente', { username: email, password: senha});
        return response.data;
    },
    signinMedico: async (email: string, senha: string) => {
        const response = await api.post('/medicos/loginMedico', { username: email, password: senha});
        return response.data;
    },
    logout: async () => {
        return { status: true};
        const response = await api.post('/logout');
        return response.data;
    }
});