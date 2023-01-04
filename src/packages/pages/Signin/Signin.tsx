import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Grid, TextField } from '@mui/material';
import { CustomGrid } from '../Home/styles';
import { Title } from '../Home/styles';
import { Subtitle } from '../Signin/styles';
import { CustomButton1 } from '../Signin/styles';
import { CustomButton2 } from '../Signin/styles';
import { CustomImage, LabelError} from '../Signin/styles';

import logoSF from '../../../assets/logoSF.png';

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
        <Grid
            container
            height="100vh"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
        >
            <title> Login </title>
            <CustomGrid
                container
                item
                xs={12}
                sm={12}
                md={5}
                direction="column"
                justifyContent="center"
                alignItems="center"
                height="100%"
                style= {{ color: 'white', backgroundColor: '#0693E3' }}
            >
                <Box maxWidth="500px">
                    <Title> BEM-VINDO AO SISTEMA DE PSF! </Title>
                    <CustomImage src={logoSF} alt="logoSF" />
                </Box>
            </CustomGrid>
            <Grid
                item
                xs={12}
                sm={12}
                md={7}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                minWidth="400px"
            >
            <Box
                p="20px"
                gap="15px"
                borderRadius="5px"
                boxShadow="0 1px 10px #0003"
                maxWidth="350px"
            >
                <Subtitle style= {{ color: '#0693E3'}}>LOGIN</Subtitle>
                <br />
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
                    type="password"
                    label="Digite sua senha"
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
            < br />
            <Box flexDirection="column" justifyContent="end">
                <CustomButton2 style= {{ color: 'black', backgroundColor: '#E0E6F8' }}
                    data-testid="btnCadastrar"
                    onClick={() => {
                        navigate('/CrudMedico');
                    }}
                >
                    Cadastre-se
                </CustomButton2>
            </Box>





            </Box>


            </Grid>




        </Grid>
    ) 
}

export default Signin; 