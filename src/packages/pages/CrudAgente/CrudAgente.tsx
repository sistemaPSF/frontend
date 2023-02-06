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

import { CustomGrid, Title } from '../HomeInicio/styles';
import { CustomImage } from '../HomeInicio/styles';
import logoSF from '../../../assets/logoSF.png';
import { CustomText, LabelError, CustomButton1, CustomButton2, Subtitle } from './Signin/styles';
import api from '../../../services/api';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';


// const cpfRegex = [0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2};

function CrudAgente() {
    const [nome, setNome] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [setor, setSetor] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const CadastroAgente = () => {
        api.post('/agentes',
            {
                "nome": nome,
                "rg": rg,
                "cpf": cpf,
                "dataNascimento": dataNascimento,
                "setor": setor,
                "rua": rua,
                "numero": numero,
                "bairro": bairro,
                "complemento": complemento,
                "cidade": cidade,
                "estado": estado,
                "celular": celular,
                "email": email,
                "senha": senha,
                "confirmarSenha": confirmarSenha
            }
        ).then(response => {
            navigate('/SigninAgente')
        }).catch(err => {
            alert(err)
        })
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
                md={8}
                p="32px"
                direction="column"
                justifyContent="center"
                alignItems="center"
                width="60vh"
                minHeight="65vh"
                border="2px solid #0693E3"
                borderRadius="12px"
            >
                    <Subtitle style={{ color: '#0693E3' }}> CADASTRO </Subtitle>
                    <TextField style={{ backgroundColor: '#AFDCF6' }}
                        data-testid="nome"
                        label="Nome"
                        variant="outlined"
                        size="small"
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
                        size="small"
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
                        size="small"
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
                        size="small"
                        fullWidth
                        value={dataNascimento}
                        onChange={(e) => {
                            setDataNascimento(e.target.value);
                        }}
                        margin="dense"
                    />
                    <TextField style={{ backgroundColor: '#AFDCF6' }}
                        data-testid="setor"
                        label="Setor"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={setor}
                        onChange={(e) => {
                            setSetor(e.target.value);
                        }}
                        margin="dense"
                    />
                    <TextField style={{ backgroundColor: '#AFDCF6' }}
                        data-testid="rua"
                        label="Rua"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={rua}
                        onChange={(e) => {
                            setRua(e.target.value);
                        }}
                        margin="dense"
                    />
                    <TextField style={{ backgroundColor: '#AFDCF6' }}
                        data-testid="numero"
                        label="Número"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={numero}
                        onChange={(e) => {
                            setNumero(e.target.value);
                        }}
                        margin="dense"
                    />
                    <TextField style={{ backgroundColor: '#AFDCF6' }}
                        data-testid="bairro"
                        label="Bairro"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={bairro}
                        onChange={(e) => {
                            setBairro(e.target.value);
                        }}
                        margin="dense"
                    />
                    <TextField style={{ backgroundColor: '#AFDCF6' }}
                        data-testid="complemento"
                        label="Complemento"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={complemento}
                        onChange={(e) => {
                            setComplemento(e.target.value);
                        }}
                        margin="dense"
                    />
                    <TextField style={{ backgroundColor: '#AFDCF6' }}
                        data-testid="cidade"
                        label="Cidade"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={cidade}
                        onChange={(e) => {
                            setCidade(e.target.value);
                        }}
                        margin="dense"
                    />
                    <TextField style={{ backgroundColor: '#AFDCF6' }}
                        data-testid="estado"
                        label="Estado"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={estado}
                        onChange={(e) => {
                            setEstado(e.target.value);
                        }}
                        margin="dense"
                    />

                    <TextField style={{ backgroundColor: '#AFDCF6' }}
                        data-testid="celular"
                        label="Celular"
                        variant="outlined"
                        size="small"
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
                        size="small"
                        fullWidth
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        margin="dense"
                    />

                    <TextField style={{ backgroundColor: '#AFDCF6' }}
                        data-testid="senha"
                        type="password"
                        label="Digite sua senha"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={senha}
                        onChange={(e) => {
                            setSenha(e.target.value)
                        }}
                        margin="dense"
                    />
                    <TextField style={{ backgroundColor: '#AFDCF6' }}
                        data-testid="ConfirmarSenha"
                        type="password"
                        label="Confirme a sua senha"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={confirmarSenha}
                        onChange={(e) => {
                            setConfirmarSenha(e.target.value)
                        }}
                        margin="dense"
                    />
                    <LabelError> {error} </LabelError>
                    <LabelError> {error} </LabelError>
                    <Box textAlign="end" width="100%" mt="4px">
                        <CustomButton1 style={{ borderColor: '#0693E3', color: 'white', backgroundColor: '#0693E3' }}
                            data-testid="cadastrar"
                            // variant="contained"
                            // onClick={handleSignup}
                            onClick={() => CadastroAgente()}
                        >
                            Criar conta
                        </CustomButton1>
                    </Box>
                </CustomGrid>
            </Grid>
            <Footer />
        </Grid>
    );
}

export default CrudAgente;