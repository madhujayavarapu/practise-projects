import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FileUtilsService } from 'src/app/modules/utils';
import { requiredFileType } from 'src/app/modules/ng-forms/validators/requiredFileType';

@Component({
  selector: 'ng-csv-to-json',
  templateUrl: './csv-to-json.component.html',
  styleUrls: ['./csv-to-json.component.scss']
})
export class CsvToJsonComponent implements OnInit {

  csvForm: FormGroup = new FormGroup({
    inputType: new FormControl('file', Validators.required),
    csv: new FormControl(''),
    delimeter: new FormControl(',', Validators.required),
    headersPresent: new FormControl(true),
    csvFile: new FormControl(null, [requiredFileType(['csv'])])
  })

  json: any = null;

  constructor(
    private fileUtils: FileUtilsService
  ) { }

  ngOnInit() {
  }

  convertToJson() {
    this.json = "loading...";
    this.csvForm.disable();
    let val = this.csvForm.value;
    console.log("csv: ",this.csvForm.valid)
    if(val.inputType == 'file') {
      this.fileUtils.convertCsvFileToJson(val.csvFile, {
        headersPresent: val.headersPresent,
        delimeter: val.delimeter
      }).then((res) => {
        this.json = res;
        this.csvForm.reset();
        this.csvForm.enable();
      },(err) => {
        this.json = {};
        this.csvForm.reset();
        this.csvForm.enable();
      })
    }else {
      this.json = this.fileUtils.convertCsvToJson(val.csv, {
        headersPresent: val.headersPresent,
        delimeter: val.delimeter
      })
      this.csvForm.reset();
      this.csvForm.enable();
    }
  }

  downloadJson() {
    this.fileUtils.downloadAsJson(this.json, "csv-to-json");
  }

}
