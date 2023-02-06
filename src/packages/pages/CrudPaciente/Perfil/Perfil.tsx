import * as React from 'react';

import { Grid, Box } from '@mui/material';
import { Title } from '../../Areas/styles';
import { Header } from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';
import { CustomGrid } from '../../Areas/styles';
import { useContext, useEffect, useState } from 'react';
import api from '../../../../services/api';
import { CustomButton3 } from './styles';
import { useNavigate } from 'react-router-dom';
import { Paciente } from '../../../../types/Pacientes';
import { AuthContext } from '../../../../contexts/Auth/AuthContext';
import { CustomButton1 } from './../HistoricoConsultas/styles';




function Perfil() {
  const [paciente, setPaciente ]= useState<Paciente[]>([]);
  const navigate = useNavigate();
 const auth = useContext(AuthContext)
  useEffect(() => {
    api.get('/pacientes/')
    .then(response => {
      setPaciente(response.data)
    }).catch(err => console.log(err))
  }, [])

    

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
            
            {paciente?.map((paciente) => {
              return (
                <Box
                  width="75%"
                  display="flex"
                  flexDirection="column"
                  textAlign="left"
                  key={paciente.id}
                >
                  <label>Nome:
                  <text> {paciente.nome}</text>
                  </label>
                  
                  <label>RG:
                  <text> {paciente.rg}</text>
                  </label>
                  
                  <label>CPF:
                  <text> {paciente.cpf} </text>
                  </label>
                  
                  <label>SUS:
                  <text> {paciente.sus}</text>
                  </label>
                  <label>Pai: 
                  <text> {paciente.pai} </text>
                  </label>

                  <label>Mãe:
                  <text> {paciente.mae} </text>
                  </label>

                  <label>Naturalidade:
                  <text> {paciente.naturalidade} </text>
                  </label>

                  <label>Profissão:
                  <text>{paciente.profissao} </text>
                  </label>
                  
                  <label>Endereço: 
                  <text> {paciente.rua}, {paciente.numero}, {paciente.bairro}, {paciente.cidade}, {paciente.estado}    </text>
                  </label>
                  
                  <label>
                  <text> {paciente.email} </text>
                  </label>
                  
                  <label>Celular:
                  <text> {paciente.celular} </text>
                  </label>
                  <text>________________________________________________________</text>
                  
                </Box>
              )
            })}
        
            </Box>
              <Box display="flex" width="100%" justifyContent="center">
                <Box width="90%" textAlign="right">
                  <CustomButton3 
                  style={{ borderColor: "#FF0000",
                   backgroundColor: "#FF0000" }}
                   onClick={() => {
                    navigate('/Areas') 
                   }}
                   >
                    Sair
                  </CustomButton3>
                </Box>
              </Box>

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
      < Footer />
    </Grid>
  )
}

export default Perfil; 