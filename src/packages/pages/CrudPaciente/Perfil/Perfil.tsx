import * as React from 'react';

import { Grid, Box } from '@mui/material';
import { Title } from '../../Areas/styles';
import { Header } from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';
import { CustomGrid } from '../../Areas/styles';


function Perfil() {
  return (
    <Grid container>
      <Header />
      <Grid
        container
        minWidth="650px"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        my="30px"
      >
        <Box width="100%">
          <Title style={{ color: "#0693E3"}}> MEU PERFIL </Title>
        </Box>
        <CustomGrid
          container
          item
          xs={12}
          sm={12}
          md={9}
          p="10px"
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="55vh"
          minHeight="50vh"
          border="2px solid #0693E3"
          borderRadius="12px"
          gap={10}
        >
         <Box
            width="100%"
            p="16px"
            display="flex"
            flexDirection="column"
            flexWrap="wrap"
            gap={1}
            alignItems="center"
          >
            <Box
              width="75%"
              display="flex"
              flexDirection="column"
              textAlign="left"
            >
            {/* Puxar do Banco */}
            <label>Nome:
              <text> Vanessa dos Santos Pontes  </text>
            </label>
            <label>RG:
              <text> 00000000  </text>
            </label>
            <label>CPF:
              <text> _____  </text>
            </label>
            <label>SUS:
              <text> _____  </text>
            </label>
            <label>Data de Nascimento:
              <text> _____  </text>
            </label>
            <label>Mãe:
              <text> _____  </text>
            </label>
            <label>Pai:
              <text> _____ </text>
            </label>
            <label>Naturalidade:
              <text> _____  </text>
            </label>
            <label>Profissão:
              <text> _____  </text>
            </label>
            <label>Endereço:
              <text> _____  </text>
            </label>
            </Box>
              {/* <Box display="flex" width="100%" justifyContent="center">
                <Box width="90%" textAlign="right">
                  <CustomButton3 style={{ borderColor: " #75D284", backgroundColor: " #75D284" }}>
                    Editar
                  </CustomButton3>
                </Box>
              </Box> */}

            </Box>
        </CustomGrid>
      </Grid>
      < Footer />
    </Grid>
  )
}

export default Perfil; 