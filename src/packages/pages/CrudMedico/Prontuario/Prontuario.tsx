import * as React from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useNavigate } from 'react-router-dom'
import { Box, Grid } from '@mui/material'; 
import { CustomGrid, CustomButton1, Subtitle, Title } from './styles';
import { Header } from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';


function Prontuario() {
    const navigate = useNavigate();
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
          width="70vh"
          minHeight="68vh"
          // border="1px solid #000"
          borderRadius="12px"
        >
          <Box
            p="24px"
            display="flex"
            flexWrap="wrap"
            gap={5}
            justifyContent="center"
          >
            <TextareaAutosize
            aria-label="maximum height"
            minRows={5}
            placeholder="Dados do Paciente"
            style={{ width: 500 }}
            />
             <TextareaAutosize
            aria-label="maximum height"
            minRows={8}
            placeholder="Histórico de Consultas"
            style={{ width: 280 }}
            />
             <TextareaAutosize
            aria-label="maximum height"
            minRows={8}
            placeholder="Prescrição Médica"
            style={{ width: 280 }}
            />

            <CustomButton1 style={{ borderColor: "#ade1ff", backgroundColor: "#ade1ff" }}>
              Mostrar exames
             </CustomButton1>
             <CustomButton1 style={{ borderColor: "#ade1ff", backgroundColor: "#ade1ff" }}>
              Solicitar exames
             </CustomButton1>
            </Box>
          </CustomGrid>
        </Grid>
        <Footer
          onClick={() => {
          navigate('/');
        }}
      />
    </Grid>
  );
}

export default Prontuario;