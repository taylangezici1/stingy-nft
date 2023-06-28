import "styled-components";
import {
  BreakpointsValuesType,
  MaxWidthBreakpointsType,
  MinWidthBreakpointsType,
  TypographyStylesProps,
} from "styles";

declare module "styled-components" {
  type PrimaryColors =
    | "red"
    | "red-dark"
    | "black"
    | "black-light"
    | "skin"
    | "skin-light"
    | "skin-dark";

  type SecondaryColors =
    | "orange"
    | "orange-dark"
    | "sand"
    | "blue"
    | "blue-dark"
    | "blue-darker"
    | "brown"
    | "brown-light"
    | "brown-light-2";

  type NeutralColors =
    | "grey"
    | "grey-dark"
    | "grey-darker"
    | "price-light"
    | "custom-grey"
    | "custom-black"
    | "white";

  type AllColors = PrimaryColors | SecondaryColors | NeutralColors;

  type Colors = Record<AllColors, string>;

  type Breakpoints = {
    max: MaxWidthBreakpointsType;
    min: MinWidthBreakpointsType;
    val: BreakpointsValuesType;
  };

  export interface DefaultTheme {
    colors: Colors;
  }
}
