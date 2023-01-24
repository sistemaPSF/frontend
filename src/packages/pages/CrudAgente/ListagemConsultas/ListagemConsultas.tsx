import * as React from 'react';

import { Box, styled, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import Table from '@mui/material/Table';
import { Grid } from '@mui/joy';
import { CustomGrid } from '../../HomeInicio/styles';
import { Subtitle, CustomButton1 } from '../../Areas/styles';
import { Header } from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';
import { tableCellClasses } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../../../services/api';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        fontSize: 20,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 20,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 5,
    },
}));


function createData(
    consultas: string,

) {
    return { consultas };
}

const rows = [
    createData('Consulta 1'),
    createData('Consulta 2'),
    createData('Consulta 3'),
    createData('Consulta 4'),
];


function ListagemConsultas() {
    const [ listagemconsultas, setListagemConsultas ]= useState([] as any[]);
    const navigate = useNavigate();
    
    useEffect(() => {
        api.get('/agendamento')
        .then(res => {
          console.log(res.data)
          setListagemConsultas(res.data)
        }).catch(err => console.log(err))
      }, [])

      const consultas = listagemconsultas.map((listagemconsultas, index) => {
        return(
            <TableBody>

          
            <TableRow key={listagemconsultas.id}>
                <TableCell>{listagemconsultas.medico}</TableCell>
                <TableCell>{listagemconsultas.especialidade}</TableCell>
                <TableCell>{listagemconsultas.data}</TableCell>
                <TableCell>{listagemconsultas.horario}</TableCell>

                <StyledTableCell align="right">
                    <CustomButton1 style={{ borderColor: 'white', color: 'white', backgroundColor: '#008000' }}
                        data-testid="sair"
                        onClick={() => {
                            navigate('/')
                        }}
                    >
                        Editar
                    </CustomButton1>

                    <CustomButton1 style={{ borderColor: 'white', color: 'white', backgroundColor: '#FF0000' }}
                        data-testid="sair"
                        onClick={() => {
                            navigate('/')
                        }}
                    >
                        Cancelar
                    </CustomButton1>
                </StyledTableCell>
            </TableRow>
            
        </TableBody>
        )
      })
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
                    // p="2px"
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    width="60vh"
                    minHeight="65vh"
                    border="3px solid #0693E3"
                    borderRadius="10px"
                >
                    <Subtitle style={{ color: '#0693E3' }}> LISTAGEM DE CONSULTAS </Subtitle>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">CONSULTAS</StyledTableCell>
                                </TableRow>
                            </TableHead>
                           {consultas}
                        </Table>
                    </TableContainer>
                </CustomGrid>
            </Grid>
            <Box textAlign="end" width="90%" mt="4px">
                {/* <CustomButton1 style={{ borderColor: '#0693E3', color: 'white', backgroundColor: '#0693E3' }}
                        data-testid="sair"
                        onClick={() => {
                            navigate('/Agendamento')
                        }}
                >
                    Cadastrar uma nova consulta
                </CustomButton1> */}
                <CustomButton1 style={{ borderColor: '#0693E3', color: 'white', backgroundColor: '#FF0000' }}
                    data-testid="sair"
                    onClick={() => {
                        navigate('/Areas')
                    }}
                >
                    Sair
                </CustomButton1>
            </Box>
            <Footer />
        </Grid>
    );
}


export default ListagemConsultas;