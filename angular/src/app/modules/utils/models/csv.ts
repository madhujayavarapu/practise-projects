export interface ICsvValidation {
  index: number;
  regex: string;
}

export interface ICsvOptions {
  headersPresent?: boolean;
  delimeter?: string;
  ignoreEmptyRows?: boolean;
  ignoreNotValidRows?: boolean;
  validations?: ICsvValidation[];
}