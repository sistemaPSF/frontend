import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { Grid, Box, styled } from '@mui/material';
import { Header } from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';
import { Title, CustomGrid } from './styles';
import { CustomButton1 } from '../Signin/styles';
import { AuthContext } from '../../../../contexts/Auth/AuthContext';
import { useContext, useState } from 'react';
import { Medico } from '../../../../types/Medicos';


function createData(
    nome: string
){
    return{
        nome
    }
}

const rows = [
    createData('Nome do Paciente'),
    createData('Nome do Paciente'),
    createData('Nome do Paciente')
  ];

function ConsultasAgendadas(){
    const navigate = useNavigate();
    const auth = useContext(AuthContext);

   
    return(
        <Grid container>
            <Box width="100%" minWidth="650px">
                <Header/>
            </Box>
            <Grid
            container
            minWidth="650px"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            my="2px"
            >
                <Box width="100%">
                    <Title style={{ color: '#0693E3' }}>CONSULTAS AGENDADAS</Title>
                </Box>
                <CustomGrid
                container
                item
                xs={12}
                sm={12}
                md={9}
                p="20px"
                direction="column"
                justifyContent="center"
                alignItems="center"
                width="55vh"
                minHeight="50vh"
                borderRadius="12px"
                gap={10}
                >
                    <Box
                     width="100%"
                     minWidth="625px"
                     display="flex"
                     flexDirection="column"
                     flexWrap="wrap"
                     gap={1}
                     alignItems="center"
                    >
                       
                        <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="simple table">
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.nome}>
                                <TableCell component="th" scope="row">
                                    {row.nome}
                                </TableCell>
                                <TableCell align="right">
                                    <CustomButton1 style={{ borderColor: "#ade1ff", backgroundColor: "#ade1ff" }}
                                    onClick={() => {
                                        navigate('/Prontuario') 
                                      }}
                                    >
                                        ATENDER
                                    </CustomButton1>
                                </TableCell>
                                </TableRow>
                            ))}
                            
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </Box>
                </CustomGrid>
            </Grid>
            <Box textAlign="end" width="98%" mt="4px">
                <CustomButton1 style={{ borderColor: '#0693E3', color: 'white', backgroundColor: '#FF0000' }}
                    data-testid="sair"
                    onClick={() => {
                        // navigate('/Areas')
                    }}
                >
                    Sair
                </CustomButton1>
            </Box>
            <Footer/>
        </Grid>
    )
}

export default ConsultasAgendadas;