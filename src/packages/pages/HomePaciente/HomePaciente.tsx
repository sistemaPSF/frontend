import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Box, Grid } from '@mui/material'; 
import { Button } from '@material-ui/core';
import { CustomGrid } from './styles';


function HomePaciente(){
    const navigate = useNavigate();
    return(
        <Grid container
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
            <Header/>
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
             borderRadius="12px"
            >
                <Box
                p="24px"
                display="flex"
                flexWrap="wrap"
                gap={3}
                
                >
                  <Button variant="contained" size="large" style={{ backgroundColor: "#0693E3",color: "white"}}
                    onClick={() => {
                        alert('clicked');
                    }}
                    >
                    Agendar consulta
                 </Button>
                 <Button variant="contained" size="large" style={{ backgroundColor: "#0693E3", color: "white"}}
                    onClick={() => {
                        alert('clicked');
                    }}
                    >
                    Histórico de consultas
                 </Button>
                 <Button variant="contained" size="large" style={{ backgroundColor: "#0693E3", color: "white"}}
                    onClick={() => {
                        alert('clicked');
                    }}
                    >
                    Consultas agendadas
                 </Button>


                </Box>
            </CustomGrid>
            
            <Footer/>
        </Grid>
        
    )
}
export default HomePaciente;