import * as React from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useNavigate } from 'react-router-dom'
import { Box, Grid } from '@mui/material';
import { CustomGrid, CustomButton1, Subtitle, Title } from './styles';
import { Header } from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';

function Prontuario() {
  const navigate = useNavigate();
  return (
    <Grid container>
      <Header />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        my="20px"
      >
        <Box width="50%">
          <Title style={{ color: '#0693E3' }}>PRONTUÁRIO</Title>
        </Box>
        <CustomGrid
          container
          item
          xs={12}
          sm={12}
          md={8}
          p="20px"
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="60vh"
          minHeight="55vh"
          border="1px solid #AFDCF6"
          borderRadius="12px"
          style={{ backgroundColor: "#AFDCF6" }}
        >
          <Box
            sx={{
              display: "flex",
              '& > *': {
                m: 3,
              },
            }}
          >
            <FormControl style={{}}>
              <FormLabel style={{ color: "#034C81", fontSize: "20px" }}>Dados do Paciente</FormLabel>
              <text style={{ backgroundColor: "#FFF", borderRadius: "12px", borderColor: "#034C81", height: "250px", width: "350px" }}> </text>
            </FormControl>
            <FormControl>
              <FormLabel style={{ color: "#034C81", fontSize: "20px" }}>Descrição Médica</FormLabel>
              <Textarea style={{ backgroundColor: "#FFF", borderColor: "#FFF", borderRadius: "12px", height: "250px", width: "350px"}} minRows={5} />
              <Button sx={{ ml: 'auto', marginTop: "10px", borderColor: '#0693E3', color: 'white', backgroundColor: '#0693E3' }}                             
              data-testid="salvar"
              onClick={() => alert("Atendimento Finalizado com Sucesso!") 
              }>Salvar</Button>
            </FormControl>
          </Box>
        </CustomGrid>
      </Grid>
      <Footer
        onClick={() => {
          navigate('/');
        }}
      />
    </Grid >
  );
}

export default Prontuario;