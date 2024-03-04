import { BreakPoints, PaletteColors } from "@/theme/theme-data"

export type DynamicPaletteOptions = {
    [K in keyof typeof PaletteColors]: {
        main: string;
        light: string;
        dark: string;
    };
};
export type DynamicButtonPaletteOptions = {
    [K in keyof typeof PaletteColors]: true
};
export type DynamicIconButtonPaletteOptions = {
    [K in keyof typeof PaletteColors]: true
};
export type DynamicAppBarPaletteOptions = {
    [K in keyof typeof PaletteColors]: true
};
export type DynamicSvgIconPaletteOptions = {
    [K in keyof typeof PaletteColors]: true
};
export type DynamicBreakPointsOptions = {
    [K in keyof typeof BreakPoints]: true
};

declare module '@mui/material/styles' {
    interface Palette extends DynamicPaletteOptions { }
    interface PaletteOptions extends DynamicPaletteOptions { }
    interface ButtonPropsColorOverrides extends DynamicButtonPaletteOptions { }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        dashed: true
    }
    interface ButtonPropsColorOverrides extends DynamicButtonPaletteOptions { }
}
declare module '@mui/material/IconButton' {
    interface IconButtonPropsVariantOverrides {
        dashed: true
    }
    interface IconButtonPropsColorOverrides extends DynamicIconButtonPaletteOptions { }
}
declare module '@mui/material/AppBar' {
    interface AppBarPropsColorOverrides extends DynamicAppBarPaletteOptions { }
}
declare module '@mui/material/SvgIcon' {
    interface SvgIconPropsColorOverrides extends DynamicSvgIconPaletteOptions { }
}

declare module '@mui/material/styles' {
    interface BreakpointOverrides extends DynamicBreakPointsOptions { }
}