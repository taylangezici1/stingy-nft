import * as S from "./elements";
import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return <S.Container {...props}>{children}</S.Container>;
};
