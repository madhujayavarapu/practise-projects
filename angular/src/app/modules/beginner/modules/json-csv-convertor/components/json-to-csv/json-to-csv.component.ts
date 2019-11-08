import { CommonService } from './../../../../../shared/services/common.service';
import { FileUtilsService } from './../../../../../utils/serivces/file-utils.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { requiredFileType } from 'src/app/modules/ng-forms/validators/requiredFileType';

@Component({
  selector: 'ng-json-to-csv',
  templateUrl: './json-to-csv.component.html',
  styleUrls: ['./json-to-csv.component.scss']
})
export class JsonToCsvComponent implements OnInit {

  jsonForm: FormGroup = new FormGroup({
    inputType: new FormControl('file', Validators.required),
    json: new FormControl(null),
    delimeter: new FormControl(',', Validators.required),
    jsonFile: new FormControl(null, requiredFileType(['json'])),
    headersPresent: new FormControl(true),
  })
  csv:any = null;

  constructor(
    private fileUtils: FileUtilsService,
    private commonSrv: CommonService
  ) { }

  ngOnInit() {
  }

  convertToCsv() {
    this.jsonForm.disable();
    this.csv = "loading...";
    let val = this.jsonForm.value;
    if(val.inputType == 'file' && !!val.jsonFile) {
      this.fileUtils.convertJsonFileToCsv(val.jsonFile, {csvHeaders: val.headersPresent, delimeter: val.delimeter})
      .then((res) => {
        this.jsonForm.enable();
        this.jsonForm.reset();
        this.csv = res;
      }, (err) => {
        this.jsonForm.enable();
        this.jsonForm.reset();
        this.csv = "";
      })
    }else if(!!val.json) {
      if(!!this.fileUtils.isValidJson(val.json)) {
        this.jsonForm.enable();
        this.jsonForm.reset();
        this.csv = this.fileUtils.convertJsonToCsv(val.json, {csvHeaders: val.headersPresent, delimeter: val.delimeter});
      }else {
        this.jsonForm.enable();
        this.csv = "";
        this.commonSrv.showToastMessage("Invalid Json", "error");
      }
    }else {
      this.commonSrv.showToastMessage("Please provide input first", "error");
      this.jsonForm.enable();
    }
  }

  downloadCsv() {
    this.fileUtils.downloadAsCsv(this.csv, "from-json");
  }

}
