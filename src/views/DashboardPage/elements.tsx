import styled from "styled-components";
import { Card, Typography } from "@/components";

export const Container = styled.div`
  padding: 20px;
  display: flex;
`;

export const MyCollectionsContainer = styled(Card)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

export const MyCollectionsHeader = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const MyCollectionsTitle = styled(Typography.h3)``;

export const MyCollectionsBody = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`;
