import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { requiredFileType } from 'src/app/modules/ng-forms/validators/requiredFileType';
import { FileUtilsService } from 'src/app/modules/utils';
import Spreadsheet from 'x-data-spreadsheet';

@Component({
  selector: 'ng-excel-convertor',
  templateUrl: './excel-convertor.component.html',
  styleUrls: ['./excel-convertor.component.scss']
})
export class ExcelConvertorComponent implements OnInit {

  excelForm: FormGroup = new FormGroup({
    file: new FormControl(null, [Validators.required, requiredFileType(['xls', 'xlsx'])])
  })

  excelInfo:any;
  activeSheetHtml: string = '';
  activeSheet: string;
  activeJson: any;

  constructor(
    private fileUtils: FileUtilsService
  ) { }

  ngOnInit() {
  }

  convertToJson() {
    console.log("come here: ",this.excelForm.value);
    let value = this.excelForm.value;
    this.fileUtils.readExcelFile(value.file).then((res) => {
      // console.log(res);
      this.excelInfo = res;
      if(!!this.excelInfo.sheets && this.excelInfo.sheets.length > 0) {
        this.activeSheetHtml = this.getTableHtml(this.excelInfo.info[0].html);
        this.activeSheet = this.excelInfo.sheets[0];
        this.activeJson = this.excelInfo.info[0].json;
        // this.loadSpreadSheet(this.activeJson);
      }
      this.excelForm.reset();
    }, (err) => {
      console.log(err);
      this.excelForm.reset();
    });
  }

  loadSpreadSheet(json: any = {}) {
    console.log("selector: ",document.querySelector('#spreadsheet'));
    const s = new Spreadsheet("#spreadsheet", {
        view: {
          height: () => 500,
          width: () => 800,
        }
      })
      .loadData(json) // load data
      .change(data => {
        // save data to db
        console.log("data changed: ",data);
      });
    s.validate();
  }

  getTableHtml(html: string): string {
    return html.substring(html.indexOf('<table>'), html.indexOf('</table>')+8).replace('<table>', '<table class="table table-bordered">');
  }

  changeActiveSheet(i: number) {
    if(this.excelInfo.sheets.length > i) {
      this.activeSheet = this.excelInfo.sheets[i];
      this.activeSheetHtml = this.getTableHtml(this.excelInfo.info[i].html);
      this.activeJson = this.excelInfo[i].json;
    }
  }

}
