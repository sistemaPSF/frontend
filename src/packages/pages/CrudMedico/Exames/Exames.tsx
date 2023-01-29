import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Box, Grid, TextField } from '@mui/material'; 
import { CustomGrid, CustomButton1, Subtitle, Title } from './styles';
import { Header } from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



function Exames() {
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
           
          <Title style={{ color: '#0693E3' }}>TIPOS DE EXAMES</Title>
          <Box
            p="24px"
            display="flex"
            flexWrap="wrap"
            gap={15}
            justifyContent="center"
            borderRadius="12px"
            border="1px solid #000"
          >

            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Hemograma" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Glicemia" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Ureia" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Colesterol total" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Triglicerideos" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Hemoglobina" />
            </FormGroup>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="TGO e TGP" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Coagulograma" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Ácido Úrico" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="PSA total e livre" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Parasitológico de fezes" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="EAS" />
            </FormGroup>
            <TextField id="standard-basic" label="Outro" variant="standard" />
            <CustomButton1 style={{ borderColor: "#ade1ff", backgroundColor: "#ade1ff" }}>
              FINALIZAR CONSULTA
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

export default Exames;