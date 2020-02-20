import { createTheme } from 'office-ui-fabric-react';

export const COLORS = {
  PRIMARY: '#6F6F6F',
  SECONDARY: '#707070',
  WHITE: '#FFFFFF',
  GREY1: '#FAFAFA',
  GREY2: '#EAEAEA',
  GREY3: '#6F6F6F',
  GREY4: '#5C5C5C',
  GREEN: '#00D610',
  YELLOW: '#FFBD53',
  BLUE: '#016FC4',
  BORDER: '#C3C3C3',
  BLUE2: '#02599C',
}

export const BREAK = {
  SM: 768,
  MD: 992,
  LG: 1200,
}

export const THEME = {
  DARK: createTheme({
    palette: {
      themePrimary: '#ffffff',
      themeLighterAlt: '#767676',
      themeLighter: '#a6a6a6',
      themeLight: '#c8c8c8',
      themeTertiary: '#d0d0d0',
      themeSecondary: '#dadada',
      themeDarkAlt: '#eaeaea',
      themeDark: '#f4f4f4',
      themeDarker: '#f8f8f8',
      neutralLighterAlt: '#025697',
      neutralLighter: '#015595',
      neutralLight: '#01528f',
      neutralQuaternaryAlt: '#014c85',
      neutralQuaternary: '#01487f',
      neutralTertiaryAlt: '#01467a',
      neutralTertiary: '#c8c8c8',
      neutralSecondary: '#d0d0d0',
      neutralPrimaryAlt: '#dadada',
      neutralPrimary: '#ffffff',
      neutralDark: '#f4f4f4',
      black: '#f8f8f8',
      white: '#02599c',
    }
  }),
  LIGHT: createTheme({
    palette: {
      themePrimary: '#0078d4',
      themeLighterAlt: '#eff6fc',
      themeLighter: '#deecf9',
      themeLight: '#c7e0f4',
      themeTertiary: '#71afe5',
      themeSecondary: '#2b88d8',
      themeDarkAlt: '#106ebe',
      themeDark: '#005a9e',
      themeDarker: '#004578',
      neutralLighterAlt: '#faf9f8',
      neutralLighter: '#f3f2f1',
      neutralLight: '#edebe9',
      neutralQuaternaryAlt: '#e1dfdd',
      neutralQuaternary: '#d0d0d0',
      neutralTertiaryAlt: '#c8c6c4',
      neutralTertiary: '#a19f9d',
      neutralSecondary: '#605e5c',
      neutralPrimaryAlt: '#3b3a39',
      neutralPrimary: '#323130',
      neutralDark: '#201f1e',
      black: '#000000',
      white: '#ffffff',
    }
  })
};