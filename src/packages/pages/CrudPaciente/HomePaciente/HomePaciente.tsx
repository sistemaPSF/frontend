import { Header } from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Box, Grid } from '@mui/material'; 
import { Button, Link } from '@material-ui/core';
import { CustomGrid } from './styles';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { IconButton } from '@mui/joy';

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
             width="70vh"
             minHeight="73vh"
             borderRadius="12px"
            >
            <Box display="flex" justifyContent="right" alignItems="right">
                <IconButton>
                    <AccountCircleRoundedIcon style={{ fontSize: 50, color: "#0693E3", position: "absolute", top: "-180px", left: "640px" }}/>
                </IconButton>
                <Link
                    style= {{ color: "#0693E3", position: "absolute", top: "180px", left: "1300px" }}
                    component="button"
                    variant="h6"
                    underline="none"
                    onClick={() => {
                        navigate('/Perfil')
                    }}
                    >
                    Meu Perfil
                </Link>
            </Box>
               
                <Box
                p="24px"
                display="flex"
                flexWrap="wrap"
                gap={3}
                
                >
                  <Button variant="contained" size="large" style={{ backgroundColor: "#0693E3",color: "white"}}
                    onClick={() => {
                        navigate('/AgendarConsulta')
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
                        // navigate('/')
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