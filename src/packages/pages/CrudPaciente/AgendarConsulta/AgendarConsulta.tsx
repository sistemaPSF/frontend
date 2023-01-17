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
import { CustomButton1 } from '../../HomeInicio/styles';


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
  createData('Medico', 'clínico geral','20/01', '11:00'),
  createData('Medico', 'pediatra', '20/01', '11:00'),
  createData('Medico', 'ortopedista', '20/01', '11:00'),
];

function AgendarConsulta () {
  return (
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
          <Title style={{ color: '#0693E3' }}>AGENDAR CONSULTA</Title>
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
          <Box width="100%">
            <Box
              width="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mx="24px"
            >
            </Box>
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
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Médicos</StyledTableCell>
                        <StyledTableCell align="right">Especialidade</StyledTableCell>
                        <StyledTableCell align="right">Data</StyledTableCell>
                        <StyledTableCell align="right">Horário</StyledTableCell>
                        <StyledTableCell align="right"> Agendar Consulta </StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.medico}>
                        <StyledTableCell component="th" scope="row">{row.medico}</StyledTableCell>
                        <StyledTableCell align="right">{row.especialidade}</StyledTableCell>
                        <StyledTableCell align="right">{row.data}</StyledTableCell>
                        <StyledTableCell align="right">{row.horario}</StyledTableCell>
                        <StyledTableCell align="right">
                          <CustomButton1 style={{ borderColor: "#ade1ff", backgroundColor: "#ade1ff" }}>
                            AGENDAR
                          </CustomButton1>
                        </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Box>
        </CustomGrid>
      </Grid>
        <Footer/>

    </Grid>

  );
}

export default AgendarConsulta;