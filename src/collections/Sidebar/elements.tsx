import { Typography } from "@/components";
import { Button } from "@mui/material";
import styled from "styled-components";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const SidebarContainer = styled.div`
  max-width: 240px;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors["blue-dark"]};
  padding: 8px;
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const SidebarHeaderTitle = styled(Typography.h1)`
  color: ${({ theme }) => theme.colors["orange-dark"]};
`;

export const SidebarBody = styled.div`
  margin-top: 16px;
`;

export const SidebarList = styled.ul``;

export const SidebarListItem = styled.li``;

export const SidebarButton = styled(Button)`
  color: ${({ theme }) => theme.colors.brown};
  width: 100%;
  text-transform: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 16px;
  &:hover {
    background-color: ${({ theme }) => theme.colors["blue-darker"]};
  }
`;

export const MenuText = styled(Typography.h3)`
  color: ${({ theme }) => theme.colors["grey-darker"]};
  margin: 8px;
  font-weight: 500;
`;

export const SidebarIcon = styled(DashboardIcon)`
  color: ${({ theme }) => theme.colors["grey-darker"]};
`;
