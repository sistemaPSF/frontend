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
import api from '../../../../services/api';
import { useEffect, useState } from 'react';
import { Paciente } from '../../../../types/Pacientes';

function Prontuario() {
  const navigate = useNavigate();
  const [descricao, setDescricao] = useState('')
  const [paciente, setPaciente ]= useState<Paciente[]>([]);

  useEffect(() => {
    api.get('/pacientes/')
    .then(response => {
      setPaciente(response.data)
    }).catch(err => console.log(err))
  }, [])
  
  const Atendimento = () => {
    api.post('/atendimentos',
        {
            "descricao": descricao,
            
        }
    )
    .then(response => {
        alert("Atendimento Finalizado com Sucesso!")
        
    }).catch(err => {
        alert(err)
    })
}
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
            {paciente?.map((paciente) => {
              return (
                <FormControl style={{}}>
                <FormLabel style={{ color: "#034C81", fontSize: "20px",  }}>Dados do Paciente</FormLabel>
                <text 
                  style={{ backgroundColor: "#FFF", 
                  borderRadius: "12px", 
                  borderColor: "#034C81", 
                  height: "250px", 
                  width: "350px" ,
                }}> 
                <Box
                 
                  width="100%"
                  display="flex"
                  flexDirection="column"
                  textAlign="left"
                  key={paciente.id}
                >
                  <label>Nome: {paciente.nome} </label>
                  
                  <label>RG: {paciente.rg}  </label>
                  
                  <label>CPF:  {paciente.cpf} </label>
                  
                  <label>SUS: {paciente.sus} </label>
                  <label>Pai: {paciente.pai} </label>
                  

                  <label>Mãe: {paciente.mae} </label>

                  <label>Naturalidade: {paciente.naturalidade} </label>

                  <label>Profissão: {paciente.profissao}  </label>
                  
                  <label>Endereço:  {paciente.rua}, {paciente.numero},</label>

                  <label> {paciente.bairro}, {paciente.cidade}/{paciente.estado}  </label>
                  
                  
                </Box>

                  

                </text>
              </FormControl>
              )
            })}
           

            <FormControl>
              <FormLabel style={{ color: "#034C81", fontSize: "20px" }}>Descrição Médica</FormLabel>
              <Textarea 
              style={{ backgroundColor: "#FFF",
               borderColor: "#FFF", borderRadius: "12px",
                height: "250px", width: "350px"}} minRows={5}
                value={descricao}
                onChange={(e) => {
                    setDescricao(e.target.value);
                }}
                 />
              <Button sx={{ ml: 'auto', marginTop: "10px", borderColor: '#0693E3', color: 'white', backgroundColor: '#0693E3' }}                             
              data-testid="salvar"
              onClick={() => Atendimento()
              }>Salvar</Button>

            </FormControl>
          </Box>
        </CustomGrid>
      </Grid>
      <Box textAlign="end" width="98%" mt="4px">
                <CustomButton1 style={{ borderColor: '#0693E3', color: 'white', backgroundColor: '#FF0000' }}
                    data-testid="sair"
                    onClick={() => {
                        navigate('/Areas')
                    }}
                >
                    Sair
                </CustomButton1>
            </Box>
      <Footer
        onClick={() => {
          navigate('/');
        }}
      />
    </Grid >
  );
}

export default Prontuario;