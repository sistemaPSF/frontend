import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Grid, TextField } from '@mui/material';
import { CustomGrid } from '../Home/styles';
import { Title } from '../Signin/styles';
import { Subtitle } from '../Signin/styles';
import { CustomButton1 } from '../Signin/styles';
import { CustomButton2 } from '../Signin/styles';
import { CustomImage, LabelError} from '../Signin/styles';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Link } from '@mui/material';



function Signin() {

    const navigate = useNavigate();

    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');


    // Tratamento de Signin

    const handleLogin = async () => {
        if (!cpf || !senha) {
            setError('Preencha todos os campos');
            return;
        }

        // try {
            // Aqui a parte de autenticação
        // }
    }

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
                    minHeight="65vh"
                    border="1px solid #0693E3"
                    borderRadius="2px"
                >
                    <Title> LOGIN </Title>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                        
                        <TextField style={{ backgroundColor: '#AFDCF6' }}
                            data-testid="inputCpf"
                            label="CPF"
                            variant="outlined"
                            fullWidth
                            value={cpf}
                            onChange={(e) => {
                                setCpf(e.target.value);
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
                            <CustomButton1 style= {{ color: 'white', backgroundColor: '#0693E3' }}
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

export default Signin; 