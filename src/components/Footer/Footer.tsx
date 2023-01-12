import React from 'react';

import { Box, Grid } from '@mui/material';

import { CustomGrid } from './styles';

function Footer({ onClick }: { onClick?: () => void }) {
  return (
    <Grid container>
      <CustomGrid
        container
        item
        xs={12}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        height="125%"
        px="24px"
        style= {{ color: "white", backgroundColor: "#0693E3"}}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <p> © Copyright 2022 -TSI 2020.1  </p>
        </Box>
      </CustomGrid>
    </Grid>
  );
}

export default Footer;