import styled from "styled-components";
import { Card, Image, Typography } from "@/components";

export const CollectionCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CollectionImageWrapper = styled.div`
  margin-top: 16px;
`;

export const CollectionImage = styled(Image)`
  border-radius: 50%;
`;

export const CollectionCardBody = styled.div``;

export const CollectionCardTitle = styled(Typography.bodyM)``;

export const CollectionCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CollectionCardStatKey = styled(Typography.bodyS)``;

export const CollectionCardStatValue = styled(Typography.bodyS)`
  color: ${({ theme }) => theme.colors["orange-dark"]};
`;
