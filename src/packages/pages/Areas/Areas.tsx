import React from 'react';
import { useNavigate } from 'react-router-dom'

import { Box, Grid } from '@mui/material'; 
import { CustomGrid, CustomButton1, Subtitle, Title } from './styles';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import PersonIcon from '@mui/icons-material/Person';

import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';

function Areas() {
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
          width="60vh"
          minHeight="65vh"
          // border="1px solid #000"
          borderRadius="12px"
        >
          <Box
            p="24px"
            display="flex"
            flexWrap="wrap"
            gap={3}
            justifyContent="center"
          >
            <Card variant="outlined" sx={{ width: 200, height: 250}} style={{ backgroundColor: "#0693E3"}}>
                <IconButton>
                  <PersonIcon style={{ fontSize: 200, color: 'white'}}/>
                </IconButton>
                <CustomButton1 style={{ backgroundColor: "#FFFFFF"}}
                
                onClick={() => {
                  navigate('/SigninPaciente') 
                }}
                >
                  Área do Paciente
                </CustomButton1>
            </Card>
            <Card variant="outlined" sx={{ width: 200, height: 250}} style={{ backgroundColor: "#0693E3"}}>
                <IconButton>
                  <PersonIcon style={{ fontSize: 200, color: 'white'}}/>
                </IconButton>
                <CustomButton1 style={{ backgroundColor: "#FFFFFF"}}
                
                onClick={() => {
                  navigate('/SigninAgente') 
                }}
                >
                  Área da Agente
                </CustomButton1>
            </Card>
            <Card variant="outlined" sx={{ width: 200, height: 250}} style={{ backgroundColor: "#0693E3"}}>
                <IconButton>
                  <PersonIcon style={{ fontSize: 200, color: 'white'}}/>
                </IconButton>
                <CustomButton1 style={{ backgroundColor: "#FFFFFF"}}
                
                onClick={() => {
                  navigate('/SigninMedico') 
                }}
                >
                  Área do Médico
                </CustomButton1>
            </Card>
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

export default Areas;