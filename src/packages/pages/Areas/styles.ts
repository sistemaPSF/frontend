
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

export const Title = styled.h1`
  font-family: 'Calibri';
  font-weight: 800;
  font-size: 50px;
`;

export const Subtitle = styled.p`
    font-size: 24px;
    font-weight: 200;
    font-family: 'Calibri';

`;

export const CustomGrid = styled(Grid)`
  background-color: "blue";
`;


export const CustomButton1 = styled.button`
    font-size: 15px;
    padding: 10px 40px;
    border-radius: 5px;
`;


