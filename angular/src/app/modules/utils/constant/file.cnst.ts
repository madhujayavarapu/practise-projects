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

const validFilesRegx = {
  'xls': /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/,
  'csv': /^([a-zA-Z0-9\s_\\.\-:])+(.csv)$/
}

export const FILE_CNST = {
  CSV_OPTIONS: csvOptions,
  JSON_OPTIONS: jsonOptions
}