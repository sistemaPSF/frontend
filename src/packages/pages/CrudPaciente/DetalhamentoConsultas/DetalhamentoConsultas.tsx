import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import { Grid } from '@mui/material';
import { Header } from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';
import { CustomGrid, Title } from './styles';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../../../services/api';
import Box from '@mui/joy/Box';


function DetalhamentoConsultas() {

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
        my="40px"
      >
        <Box width="100%">
          <Title style={{ color: '#0693E3' }}>DETALHAMENTO DE CONSULTAS</Title>
        </Box>
        <CustomGrid
          container
          item
          xs={8}
          sm={8}
          md={6}
          p="20px"
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="60vh"
          minHeight="55vh"
          border="2px solid #0693E3"
          borderRadius="12px"
          gap={5}
          style={{ backgroundColor: "#AFDCF6" }}
          
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
            <FormControl>
              <FormLabel style={{ color: "#034C81", fontSize: "20px", justifyContent: "center" }}>Descrição da Consulta</FormLabel>
              <text style={{ backgroundColor: "#FFF",  borderRadius: "12px", borderColor: "#034C81",  height: "350px", width: "550px"}}> </text>
            </FormControl>
          </Box>
        </CustomGrid>
      </Grid>
      <Footer />

    </Grid>

  );
}



export default DetalhamentoConsultas;