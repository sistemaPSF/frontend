import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    IconButton,
    Radio,
    RadioGroup,
    TextField,
  } from '@mui/material';

import { CustomGrid, Title } from '../Home/styles';
import { CustomImage } from '../Home/styles';
import logoSF from '../../../assets/logoSF.png';
import { CustomText, LabelError, CustomButton1, CustomButton2, Subtitle } from './../Signin/styles';
import api from '../../../services/api';


// const cpfRegex = [0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2};

function CrudMedico() {
    const [nome, setNome] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [crm, setCrm] = useState('');
    const [especialidade, setEspecialidade] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const CadastroMedico =  () => {
        api.post('/medicos',
        {
            "nome": nome,
            "rg": rg,
            "cpf": cpf,
            "dataNascimento": dataNascimento,
            "crm": crm,
            "especialidade": especialidade,
            "celular": celular,
            "email": email,
            "senha": senha,
            "confirmarSenha": confirmarSenha
        }
        ).then(response => {
            navigate('/Signin') 
        }).catch(err => {
            alert(err)
        })
    }

    return (
        <Grid
            container
            height="100vh"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
        >
            <title>PSF - Cadastre-se</title>
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
                    {/* <Subtitle></Subtitle> */}
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
                <Subtitle style= {{ color: '#0693E3'}}> Cadastre-se </Subtitle>
                <TextField style={{ backgroundColor: '#AFDCF6' }}
                    data-testid="nome"
                    label="Nome"
                    variant="outlined"
                    fullWidth
                    value={nome}
                    onChange={(e) => {
                        setNome(e.target.value);
                    }}
                    margin="dense"
                />

                <TextField style={{ backgroundColor: '#AFDCF6' }}
                    data-testid="rg"
                    label="RG"
                    variant="outlined"
                    fullWidth
                    value={rg}
                    onChange={(e) => {
                        setRg(e.target.value);
                    }}
                    margin="dense"
                />
                <TextField style={{ backgroundColor: '#AFDCF6' }}
                    data-testid="cpf"
                    label="CPF"
                    variant="outlined"
                    fullWidth
                    value={cpf}
                    onChange={(e) => {
                        setCpf(e.target.value);
                    }}
                    margin="dense"
                />

                <TextField style={{ backgroundColor: '#AFDCF6' }}
                    data-testid="dataNascimento"
                    label="Data de Nascimento"
                    variant="outlined"
                    fullWidth
                    value={dataNascimento}
                    onChange={(e) => {
                        setDataNascimento(e.target.value);
                    }}
                    margin="dense"
                />

                <TextField style={{ backgroundColor: '#AFDCF6' }}
                    data-testid="crm"
                    label="CRM"
                    variant="outlined"
                    fullWidth
                    value={crm}
                    onChange={(e) => {
                        setCrm(e.target.value);
                    }}
                    margin="dense"
                />
                
                <TextField style={{ backgroundColor: '#AFDCF6' }}
                    data-testid="especialidade"
                    label="Especialidade"
                    variant="outlined"
                    fullWidth
                    value={especialidade}
                    onChange={(e) => {
                        setEspecialidade(e.target.value);
                    }}
                    margin="dense"
                />

                <TextField style={{ backgroundColor: '#AFDCF6' }}
                    data-testid="celular"
                    label="Celular"
                    variant="outlined"
                    fullWidth
                    value={celular}
                    onChange={(e) => {
                        setCelular(e.target.value);
                    }}
                    margin="dense"
                />

                <TextField style={{ backgroundColor: '#AFDCF6' }}
                    data-testid="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    margin="dense"
                />
                <TextField style={{ backgroundColor: '#AFDCF6' }}
                    data-testid="senha"
                    label="Digite sua senha"
                    variant="outlined"
                    fullWidth
                    value={senha}
                    onChange={(e) => {
                        setSenha(e.target.value)
                    }}
                />
                <TextField style={{ backgroundColor: '#AFDCF6' }}
                    data-testid="ConfirmarSenha"
                    label="Confirme a sua senha"
                    variant="outlined"
                    fullWidth
                    value={confirmarSenha}
                    onChange={(e) => {
                        setConfirmarSenha(e.target.value)
                    }}
                    margin="dense"
                />
                <LabelError> {error} </LabelError>
                <Box textAlign="end" width="100%" mt="4px">
                    <CustomButton1 style= {{ color: 'white', backgroundColor: '#0693E3' }}
                        data-testid="cadastrar"
                        // variant="contained"
                        // onClick={handleSignup}
                        onClick={() => CadastroMedico()}
                    >
                        Criar conta
                    </CustomButton1>
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="end">
                <CustomText> Faça seu login </CustomText>
                <CustomButton2 style= {{ color: 'black', backgroundColor: '#E0E6F8' }}
                    data-testid="btnEntrar"
                    // variant="contained"
                    onClick={() => {
                        navigate('/Signin') 
                    }}
                >
                    Entrar
                </CustomButton2>
                </Box>
            </Grid>
        </Grid>

    );
}

export default CrudMedico;