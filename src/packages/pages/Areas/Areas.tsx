import React from 'react';
import { useNavigate } from 'react-router-dom'

import { Box, Grid } from '@mui/material'; 
import { CustomGrid, CustomButton1, Subtitle, Title } from './styles';


function Areas() {
    const navigate = useNavigate();
    return (
        <Grid
            container
            height="100vh"
            width="400vh"
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
                    <Title> PROGRAMA SAÚDE DA FAMÍLIA</Title>
                    <Subtitle> Escolha sua Area </Subtitle>
                </Box>
                <Box maxWidth="1000px">
                    <CustomButton1 style= {{ color: 'black', backgroundColor: '#E0E6F8' }}
                    onClick={() => {
                        navigate('/crudPaciente');
                      }}
                    >
                   AREA DO PACIENTE
                    </CustomButton1>

                    <CustomButton1 style= {{ color: 'black', backgroundColor: '#E0E6F8' }}
                    onClick={() => {
                        navigate('/CrudAgente');
                      }}
                    >
                   AREA DO AGENTE
                    </CustomButton1>

                    <CustomButton1 style= {{ color: 'black', backgroundColor: '#E0E6F8' }}
                    onClick={() => {
                        navigate('/CrudMedico');
                      }}
                    >
                   AREA DO MEDICO
                    </CustomButton1>
                </Box>
            </CustomGrid>
            
       </Grid> 
    );
}

export default Areas;