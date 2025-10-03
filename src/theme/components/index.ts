import { PaletteMode, Theme } from "@mui/material";
import { Components, ThemeOptions } from "@mui/material/styles";
import { createAppBar } from "./AppBar";
import { buttons } from "./Buttons";
import { chip } from "./Chip";
import { CssBaseline } from "./CssBaseline";
import { inputs } from "./Inputs";
import { paper } from "./Paper";
import { popper } from "./Popper";
import { skeleton } from "./Skeleton";
import { stack } from "./Stack";
import { typography } from "./typography";

export const createComponents = (mode: PaletteMode): ThemeOptions["components"] => {
  const components: Components<Theme> = {
    MuiCssBaseline: CssBaseline,
    MuiAppBar: createAppBar(mode),
    MuiStack: stack,
    MuiPopper: popper,
    MuiChip: chip,
    MuiSkeleton: skeleton,
    ...buttons,
    ...inputs,
    ...paper,
  };

  return components;
};

export { typography };