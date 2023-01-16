import { Grid } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 400vh;

`;

export const CustomGrid = styled(Grid)`
  background-color: "blue";
`;
