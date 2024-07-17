export interface IProps {
  text?: string;
  onClick?: () => void;
  type?: ButtonType;
  color?: string;
}

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  HEADER = "header",
  DOWNLOAD = "download",
}
