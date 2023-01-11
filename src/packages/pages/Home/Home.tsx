import React from 'react';
import { useNavigate } from 'react-router-dom'

import { Box, Grid } from '@mui/material'; 
import { CustomGrid, CustomImage, CustomButton1, Subtitle, Title } from './styles';
import logopsf from "../../../assets/logopsf.png";


function Home() {
    const navigate = useNavigate();
    return (
        <Grid
            container
            height="100vh"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
        >
            <CustomGrid
                container
                item
                xs={12}
                sm={12}
                md={5}
                direction="column"
                justifyContent="center"
                alignItems="center"
                height="100%"
                style= {{ color: 'white', backgroundColor: '#0693E3' }}
            >
                <Box maxWidth="500px"> 
                    <Title> BEM-VINDO AO SISTEMA DE PSF!</Title>
                    <Subtitle> Programa Saúde da Família </Subtitle>
                </Box>
                <Box maxWidth="1000px">
                    <CustomButton1 style= {{ color: 'black', backgroundColor: '#E0E6F8' }}
                    onClick={() => {
                        navigate('/Areas');
                      }}
                    >
                   ACESSAR
                    </CustomButton1>
                </Box>
            </CustomGrid>
            <Grid
                item
                xs={12}
                sm={12}
                md={7}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                minWidth="400px"
            >
                
                <CustomImage src={logopsf} alt="logopsf" />
               
            </Grid>
       </Grid> 
    );
}

export default Home;