import * as S from "./elements";
import { ImageProps as _ImageProps } from "next/legacy/image";

export interface ImageProps extends _ImageProps {}

export const Image = ({ ...props }: ImageProps) => {
  return <S.Image {...props} />;
};
