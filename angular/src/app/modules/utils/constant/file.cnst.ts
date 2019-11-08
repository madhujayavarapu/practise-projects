import { ICsvOptions } from '../models/csv';
import { IJsonOptions } from '../models/json';

const csvOptions:ICsvOptions = {
  headersPresent: true,
  ignoreEmptyRows: true,
  ignoreNotValidRows: true,
  validations: [],
  delimeter: ","
}

const jsonOptions: IJsonOptions = {
  delimeter: ",",
  csvHeaders: true,
  wrapValuesWith: null
}

export const FILE_CNST = {
  CSV_OPTIONS: csvOptions,
  JSON_OPTIONS: jsonOptions
}