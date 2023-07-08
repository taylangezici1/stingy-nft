import styled from "styled-components";
import { Card } from "@/components";
export { CardActionArea, Card, CardContent, CardMedia } from "@mui/material";

export const Container = styled(Card)`
  max-width: 170px;
  width: 100%;
  height: fit-content;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;
