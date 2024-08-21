import { THEME_LIST } from "../constans/theme-list";

export interface ITheme {
  name: string;
  bgColor: string;
  mainColor: string;
  subColor: string;
  textColor: string;
}

export type ThemeName = typeof THEME_LIST[number]['name'];
