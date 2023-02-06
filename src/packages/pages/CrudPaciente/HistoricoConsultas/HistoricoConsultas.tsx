import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, Box } from '@mui/material';
import { Header } from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';
import { CustomGrid, Title } from './styles';
import { Button, Link } from '@material-ui/core';
import { CustomButton1 } from '../../HomeInicio/styles';
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
    medico: string,
    especialidade: string,
    data: string,
    horario: string,

) {
    return { medico, especialidade, data, horario };
}

const rows = [
    createData('Medico', 'clínico geral', '20/01', '11:00'),
    createData('Medico', 'pediatra', '20/01', '11:00'),
    createData('Medico', 'ortopedista', '20/01', '11:00'),
];

function HistoricoConsultas() {
    const [consultas, setConsultas] = useState([] as any[]);
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/agendamento')
            .then(res => {
                console.log(res.data)
                setConsultas(res.data)
            }).catch(err => console.log(err))
    }, [])

    const listarConsultas = consultas.map((consultas, index) => {
        return (
            <TableBody>
                <StyledTableRow key={consultas.medico}>
                    <StyledTableCell component="th" scope="row">{consultas.medico}</StyledTableCell>
                    <StyledTableCell align="right">{consultas.especialidade}</StyledTableCell>
                    <StyledTableCell align="right">{consultas.data}</StyledTableCell>
                    <StyledTableCell align="right">{consultas.horario}</StyledTableCell>
                    <StyledTableCell align="right">
                        <CustomButton1 style={{ borderColor: "#ade1ff", backgroundColor: "#ade1ff" }}>
                            VISUALIZAR
                        </CustomButton1>
                    </StyledTableCell>
                </StyledTableRow>

            </TableBody>
        )
    })
    return (
        <Grid container>
            <Box width="100%" minWidth="650px">
                <Header />
            </Box>
            <Grid
                container
                minWidth="650px"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                my="5px"
            >
                <Box width="100%">
                    <Title style={{ color: '#0693E3' }}>HISTÓRICO DE CONSULTAS</Title>
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
                    width="60vh"
                    minHeight="55vh"
                    borderRadius="12px"
                    gap={10}
                >
                    <Box display="flex" justifyContent="right" alignItems="right">
                        <Link
                            style={{ color: "#0693E3", position: "absolute", top: "150px", left: "1400px" }}
                            component="button"
                            variant="h6"
                            underline="none"
                            onClick={() => {
                                navigate('/Perfil')
                            }}
                        >
                            Meu Perfil
                        </Link>
                    </Box>
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
                            <Table sx={{ minWidth: 200 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">Médico</StyledTableCell>
                                        <StyledTableCell align="center">Especialidade</StyledTableCell>
                                        <StyledTableCell align="center">Data</StyledTableCell>
                                        <StyledTableCell align="center">Horário</StyledTableCell>
                                        <StyledTableCell align="center">Opção</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                {listarConsultas}
                            </Table>
                        </TableContainer>
                    </Box>
                </CustomGrid>
                <Box textAlign="end" width="90%" mt="4px">
                    <CustomButton1 style={{ borderColor: '#0693E3', color: 'white', backgroundColor: '#FF0000' }}
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


export default HistoricoConsultas;
