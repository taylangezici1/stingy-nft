import styled, { css } from "styled-components";
import { default as _Image, ImageProps } from "next/legacy/image";

export const Image = styled(({ ...props }: Omit<ImageProps, "img">) => (
  <_Image {...props} />
))(() => css``);
