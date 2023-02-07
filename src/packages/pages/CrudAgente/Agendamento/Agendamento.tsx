import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TextField } from '@material-ui/core';
import { Container } from '../../Areas/styles';
import { Box, Link } from '@mui/material';
import { Grid } from '@mui/joy';
import { CustomGrid } from '../../../../components/Footer/styles';
import { CustomButton1, Subtitle } from '../Signin/styles';
import { Header } from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';
import api from '../../../../services/api';


function Agendamento() {
    const [medico, setMedico] = useState('');
    const [especialidade, setEspecialidade] = useState('');
    const [data, setData] = useState('');
    const [horario, setHorario] = useState('');

    const navigate = useNavigate();

    const CadastrarAgendamento = () => {
        api.post('/agendamento',
            {
                "medico": medico,
                "especialidade": especialidade,
                "data": data,
                "horario": horario
            }
        )
        .then(response => {
            navigate('/ListagemConsultas')
        }).catch(err => {
            alert(err)
        })
    }

    return (
        <Grid container>
            <Header />
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                my="20px"
                width="100rem"
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
                    <Subtitle style={{ color: '#0693E3'}}> CADASTRAR CONSULTAS </Subtitle>

                    <TextField style={{ backgroundColor: '#AFDCF6' }}
                        data-testid="medico"
                        label="Medico"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={medico}
                        onChange={(e) => {
                            setMedico(e.target.value);
                        }}
                        margin="dense"
                    />

                    <TextField style={{ backgroundColor: '#AFDCF6' }}
                        data-testid="especialidade"
                        label="Especialidade"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={especialidade}
                        onChange={(e) => {
                            setEspecialidade(e.target.value);
                        }}
                        margin="dense"
                    />

                    <TextField style={{ backgroundColor: '#AFDCF6' }}
                        data-testid="data"
                        label="Data"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={data}
                        onChange={(e) => {
                            setData(e.target.value);
                        }}
                        margin="dense"
                    />

                    <TextField style={{ backgroundColor: '#AFDCF6' }}
                        data-testid="horario"
                        label="Horário"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={horario}
                        onChange={(e) => {
                            setHorario(e.target.value);
                        }}
                        margin="dense"
                    />

                    <Box textAlign="end" width="100%" mt="5px">
                        <CustomButton1 style={{ borderColor: '#0693E3', color: 'white', backgroundColor: '#0693E3' }}
                            data-testid="cadastrar"
                            onClick={() =>  CadastrarAgendamento()}
                        >
                            Cadastrar
                        </CustomButton1>
                    </Box>
                    <Link
                        style= {{ color: '#034C81' }}
                        component="button"
                        variant="h6"
                        fontWeight="bold"
                        underline="none"
                        onClick={() => {
                            navigate('/ListagemConsultas')
                        }}
                        >
                        Mostrar consultas cadastradas
                    </Link>
                </CustomGrid>
                <Box textAlign="end" width="90%" mt="4px">
                    <CustomButton1 style={{ borderColor: '#0693E3', color: 'white', backgroundColor: '#FF0000' }}
                        data-testid="sair"
                        onClick={() => {
                            navigate('/Areas') 
                          }}
                    >
                        Sair
                    </CustomButton1>
                </Box>
            </Grid>
            <Footer />
        </Grid>
    );
}

export default Agendamento;