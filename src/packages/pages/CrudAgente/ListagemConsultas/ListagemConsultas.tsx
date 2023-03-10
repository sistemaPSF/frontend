import * as React from 'react';

import { Box, styled, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import Table from '@mui/material/Table';
import { Grid } from '@mui/joy';
import { CustomGrid } from '../../HomeInicio/styles';
import { Subtitle, CustomButton1 } from '../Signin/styles';
import { Header } from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';
import { tableCellClasses } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../../../services/api';
import { Agendamanto } from '../../../../types/Agendamento';
import { Link } from '@mui/material';



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


function ListagemConsultas() {
    const [listagemconsultas, setListagemConsultas] = useState<Agendamanto[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/agendamento')
            .then(res => {
                console.log(res.data)
                setListagemConsultas(res.data)
            }).catch(err => console.log(err))
    }, [])

    const cancelarConsulta = () => {
        api.delete('/agendamento')
            .then(response => {
                navigate('/ListagemConsultas')
            }).catch(err => {
                alert(err)
            })
    }

    const consultas = listagemconsultas.map((listagemconsultas, index) => {
        return (
            <TableBody>


                <TableRow >
                    <TableCell>{listagemconsultas.medico}</TableCell>
                    <TableCell>{listagemconsultas.especialidade}</TableCell>
                    <TableCell>{listagemconsultas.data}</TableCell>
                    <TableCell>{listagemconsultas.horario}</TableCell>

                    <StyledTableCell align="right">
                        {/* <CustomButton1 style={{ borderColor: 'white', color: 'white', backgroundColor: '#008000' }}
                        data-testid="sair"
                        onClick={() => {
                            navigate('/')
                        }}
                    >
                        Editar
                    </CustomButton1> */}

                        <Box textAlign="end" width="90%" mt="4px">
                            <CustomButton1 style={{ borderColor: '#0693E3', color: 'white', backgroundColor: '#FF0000' }}
                                data-testid="cancelar"
                                onClick={() => {
                                    navigate('/SigninPaciente')
                                }}
                            >
                                Cancelar
                            </CustomButton1>
                        </Box>

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
                    p="32px"
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    width="60vh"
                    minHeight="65vh"
                    border="2px solid #0693E3"
                    borderRadius="12px"
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
                    <Link
                        style={{ color: '#034C81', float: "left", width: "100%", marginRight: "2%", marginTop: "250px" }}
                        component="button"
                        textAlign="right"
                        variant="h6"
                        fontSize="18px"
                        fontWeight="lighter"
                        underline="none"
                        onClick={() => {
                            navigate('/Agendamento')
                        }}
                    >
                        Cadastrar uma nova consulta
                    </Link>
                </CustomGrid>
                <Box textAlign="end" width="100%" mt="10px">
                <CustomButton1 style={{ borderColor: '#0693E3', color: 'white', backgroundColor: '#FF0000', float: "left", width: "100%", marginRight: "100%", marginTop: "550px" }}
                    data-testid="sair"
                    onClick={() => {
                        navigate('/')
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


export default ListagemConsultas;