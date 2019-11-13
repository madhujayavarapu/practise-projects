import { FILE_CNST } from './../constant/file.cnst';
import { ICsvOptions } from './../models/csv';
import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { IJsonOptions } from '../models/json';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class FileUtilsService {

  constructor() { }

  /** -------------------- Reading Files ----------------------------------- */
  readCSVFile(file: File): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      }
      reader.onerror = () => {
        reject(null);
      }
      reader.readAsBinaryString(file);
    })
    return promise;
  }

  readJsonFile(file: File): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      }
      reader.onerror = () => {
        reject(null);
      }
      reader.readAsBinaryString(file);
    });
    return promise;
  }

  readExcelFile(file: File): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      if(typeof FileReader !== 'undefined') {
        let reader = new FileReader();

        reader.onerror = () => {
          reject(reader.error);
        }

        //For Browsers other than IE.
        if(reader.readAsBinaryString) {
          reader.onloadend = () => {
            resolve(this.processExcel(reader.result));
          }
          reader.readAsBinaryString(file);
        }else {
          //For IE Browser.
          reject(null);
          // reader.onload = (e) => {
          //     var data = "";
          //     var bytes = new Uint8Array(e.target.result);
          //     for (var i = 0; i < bytes.byteLength; i++) {
          //         data += String.fromCharCode(bytes[i]);
          //     }
          // };
          // reader.readAsArrayBuffer(file);
        }
        
      }else {
        console.error("This browser does not support HTML5");
        reject(null);
      }
    })
    return promise;
  }

  processExcel(data) {
    //Read the Excel File data.
    var workbook = XLSX.read(data, {
        type: 'binary'
    });

    let sheets = workbook.SheetNames;
    let sheetsInfo = [];
    sheets.forEach((sheet) => {
      let ws = workbook.Sheets[sheet];
      let obj = {
        sheetName: sheet,
        html: XLSX.utils.sheet_to_html(ws),
        mergeCells: ws["!merges"],
        json: XLSX.utils.sheet_to_json(ws)
      }
      sheetsInfo.push(obj);
    })

    return {sheets, info: sheetsInfo};
  }
  /** -------------------- End of Reading Files ----------------------------- */

  CSVToArray(strData, strDelimiter) {
    strDelimiter = (strDelimiter || ",");
    var objPattern = new RegExp((
    // Delimiters.
    "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
    // Quoted fields.
    "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
    // Standard fields.
    "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
    // Create an array to hold our data. Give the array
    // a default empty first row.
    var arrData = [[]];
    // Create an array to hold our individual pattern
    // matching groups.
    var arrMatches = null;
    // Keep looping over the regular expression matches
    // until we can no longer find a match.
    while (arrMatches = objPattern.exec(strData)) {
      // Get the delimiter that was found.
      var strMatchedDelimiter = arrMatches[1];
      // Check to see if the given delimiter has a length
      // (is not the start of string) and if it matches
      // field delimiter. If id does not, then we know
      // that this delimiter is a row delimiter.
      if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
        // Since we have reached a new row of data,
        // add an empty row to our data array.
        arrData.push([]);
      }
      // Now that we have our delimiter out of the way,
      // let's check to see which kind of value we
      // captured (quoted or unquoted).
      if (arrMatches[2]) {
        // We found a quoted value. When we capture
        // this value, unescape any double quotes.
        var strMatchedValue = arrMatches[2].replace(
        new RegExp("\"\"", "g"), "\"");
      } else {
        // We found a non-quoted value.
        var strMatchedValue = arrMatches[3];
      }
      // Now that we have our value string, let's add
      // it to the data array.
      arrData[arrData.length - 1].push(strMatchedValue);
    }
    // Return the parsed data.
    return (arrData);
  }

  /**---------------------- File Conversions --------------------------------- */
  convertCsvToJson(csv: string, options: ICsvOptions): Object[] {
    options = this.formatCsvOptions(options);
    if(!isNullOrUndefined(csv)) {
      let headers;
      let jsonArray = [];
      let csvArray = this.CSVToArray(csv, options.delimeter);
      if(!!options.headersPresent){
        headers = csvArray[0];
        csvArray.shift();
      }
      if(csvArray.length >= 1) {
        csvArray.forEach((row) => {
          let json = {};
          if(options.headersPresent) {
            if(headers.length == row.length) {
              headers.forEach((header, index) => {
                json[header] =  row[index];
              })
              jsonArray.push(json);
            }else if(headers.length !== row.length && !options.ignoreNotValidRows) {
            }
          }else {
            row.forEach((col, index) => {
              json[index] = col;
            })
            jsonArray.push(json);
          }
          
        })
        return jsonArray;
      }else {
        return [];
      }
    }else {
      return [];
    }
  }

  convertCsvFileToJson(file: File, options: ICsvOptions): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      this.readCSVFile(file).then((res) => {
        resolve(this.convertCsvToJson(res, options));
      }, (err) => {
        console.log(err);
        reject(err);
      })
    })
    return promise;
  }

  convertJsonToCsv(json: any, options: IJsonOptions): string {
    options = this.formatJsonOptions(options);
    if(!isNullOrUndefined(json) && !!this.isValidJson(json)) {
      json = typeof json != 'object' ? JSON.parse(json) : json;
      if(!Array.isArray(json)) {
        json = [json];
      }
      let headers = Object.keys(json[0]);
      headers = headers.map((k) => !!options.wrapValuesWith ? options.wrapValuesWith+k+options.wrapValuesWith : k);
      let lines = []; 
      json.forEach((row) => {
        let csvRow = [];
        headers.forEach((key) => {
          let val = row[key] || "-";
          if(!!options.wrapValuesWith) {
            csvRow.push(options.wrapValuesWith+val.toString().replace(/"/g,'""')+options.wrapValuesWith);
          }else {
            csvRow.push(val.toString().replace(/"/g, '""'));
          }
        })
        lines.push(csvRow);
      })
      let csv = lines.map((r) => r.join(options.delimeter)).join('\r\n');
      if(!!options.csvHeaders) {
        let finalCsv = headers.join(options.delimeter)+"\r\n"+csv;
        return finalCsv;
      }else {
        return csv;
      }
    }else {
      console.error("[FileUtils]: [ConvertJsonToCSV]: JSON should not be null or undefined: ",json);
      return "";
    }
  }

  convertJsonFileToCsv(file: File, options: IJsonOptions): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      this.readJsonFile(file).then((data) => {
        resolve(this.convertJsonToCsv(data, options));
      }, (err) => {
        reject(err);
      })
    });
    return promise;
  }

  convertExcelFileToJson(file: File, options: any): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      resolve([]);
    })
    return promise;
  }
  /**---------------------- End of File Conversions ------------------------------ */

  /** ------------------------- Checking Valid Files ----------------------------- */
  isValidJson(obj) {
    if(typeof obj == 'object') {
      return true;
    }else if(typeof obj == 'string'){
      try {
        JSON.parse(obj);
      } catch (e) {
        return false;
      }
      return true;
    }else {
      return false;
    }
  }
  /** ------------------------- End of Checking Valid Files ----------------------- */

  /*---------------------------- Download Methods ---------------------------------- */
  downloadAsJson(json: any, fileName: string = "sample"){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(json));
    this.downloadFile(dataStr, fileName+".json");
  }

  downloadAsCsv(csv: string, fileName: string = "sample") {
    var dataStr = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    this.downloadFile(dataStr, fileName+".csv");
  }

  downloadAsExcel(excel: any, fileName: string = "sample") {
  }

  downloadFile(dataStr: any, fileName: string) {
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", fileName);
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
  /** ------------------------------- End of Download Methods ------------------------- */

  /** ------------------------------- Format Options ---------------------------------- */
  formatCsvOptions(options?: ICsvOptions): ICsvOptions {
    let defaultOpt: ICsvOptions = FILE_CNST.CSV_OPTIONS;
    if(!isNullOrUndefined(options)){
      let result: ICsvOptions = {...defaultOpt, ...options};
      return result;
    }else {
      return defaultOpt;
    }
  }

  formatJsonOptions(options?: IJsonOptions): IJsonOptions {
    let defaultJsonOpts: IJsonOptions = FILE_CNST.JSON_OPTIONS;
    if(!isNullOrUndefined(options)) {
      let result:IJsonOptions = {...defaultJsonOpts, ...options};
      return result;
    }else {
      return defaultJsonOpts;
    }
  }

  formatExcelOptions() {
  }
  /** ----------------------------- End of Format Options --------------------------------- */

}
