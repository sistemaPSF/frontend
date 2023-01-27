import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Grid, TextField } from '@mui/material';
import { CustomGrid } from '../../HomeInicio/styles';
import { Title } from './styles';
import { Subtitle } from './styles';
import { CustomButton1 } from './styles';
import { CustomButton2 } from './styles';
import { CustomImage, LabelError} from './styles';
import { Header } from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';
import { Link } from '@mui/material';
import api from '../../../../services/api';
import { AuthContext } from '../../../../contexts/Auth/AuthContext';




function SigninMedico() {
    const auth = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    
      const handleLogin = async () => {
        if (!email || !senha) {
          setError('Preencha todos os campos');
          return;
        }
        try {
         await auth.signinMedico(email, senha);
          navigate('/ConsultasAgendadas');
        } catch {
          setError('E-mail ou senha incorretos');
        }
      };
      
    

    // const handleLogin = async () => {
    //     if (!email || !senha) {
    //         setError('Preencha todos os campos');
    //         return;
    //     } else {
    //         return (
    //             api.post('/medicos/login', 
    //             {
    //                 username: email,
    //                 password: senha
    //             })
    //             .then(response => {
    //                 navigate('/ConsultasAgendadas')
    //             }).catch(error => {
    //                 setError('Email ou senha inválidos');
    //             })
    //         )
    //     }

        // try {
            // Aqui a parte de autenticação
        // }
    // }

    return (
        <Grid container>
            <Header/>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                my="20px"
            >
                <CustomGrid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    p="32px"
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    width="70vh"
                    minHeight="68vh"
                    border="1px solid #0693E3"
                    borderRadius="2px"
                >
                    <Title> LOGIN </Title>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                        
                        <TextField style={{ backgroundColor: '#AFDCF6' }}
                            data-testid="inputEmail"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        /> 
                        <TextField style={{ backgroundColor: '#AFDCF6' }}
                            data-testid="inputSenha"
                            label="Senha"
                            type="password"
                            variant="outlined"
                            fullWidth
                            value={senha}
                            margin="normal"
                            onChange={(e) => {
                                setSenha(e.target.value);
                            }}
                        />  
                        <LabelError>{error}</LabelError>
                        <Box textAlign="end" width="100%">
                            <CustomButton1 style= {{ borderColor: '#0693E3', color: 'white', backgroundColor: '#0693E3' }}
                                data-testid="btnEntrar"
                                onClick={handleLogin}
                                >
                                Entrar
                            </CustomButton1>
                        </Box> 
                    </Box> 
                        <Box display="flex" flexDirection="column" justifyContent="center">
                            <Link
                                style= {{ color: '#034C81' }}
                                component="button"
                                variant="h6"
                                fontWeight="bold"
                                underline="none"
                                onClick={() => {
                                  navigate('/CrudMedico')
                                }}
                              >
                                Cadastre-se
                              </Link>
                            {/* <CustomButton2 style= {{ color: 'black', backgroundColor: '#E0E6F8' }}
                                data-testid="btnCadastrar"
                                onClick={() => {
                                navigate('/CrudMedico');
                            }}
                            >
                                Cadastre-se
                             </CustomButton2> */}
                        </Box> 
                </CustomGrid>
                
             
            </Grid> 
            <Footer />
        </Grid>
    );
}

export default SigninMedico; 