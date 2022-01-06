import '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    greenBase?: Palette['primary'];
  }
  interface PaletteOptions {
    greenBase?: PaletteOptions['primary'];
  }
}
