import * as React from 'react';

import { Grid, Box } from '@mui/material';
import { CustomGrid } from './styles';
import { Title } from '../../packages/pages/Areas/styles';


function Header({ onClick }: { onClick?: () => void }) {
  return (
    
    <Grid container>
      <CustomGrid
        container
        item
        xs={12}
        display="flex"
        style= {{ color: "white", backgroundColor: "#0693E3"}}
      >
        <Grid
          container
          textAlign="center"
          width="inherit"
          display="flex"
          // direction='row' 
          justifyContent='center'
          margin="auto"
        >
        
          <Box>
            <Title> PROGRAMA SAÚDE DA FAMÍLIA </Title>
          </Box>
        </Grid>
      </CustomGrid>
    </Grid>
  );
}

export default Header;