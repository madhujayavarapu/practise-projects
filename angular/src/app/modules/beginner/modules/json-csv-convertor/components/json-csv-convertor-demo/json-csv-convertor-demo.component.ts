import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FileUtilsService } from 'src/app/modules/utils';

@Component({
  selector: 'ng-json-csv-convertor-demo',
  templateUrl: './json-csv-convertor-demo.component.html',
  styleUrls: ['./json-csv-convertor-demo.component.scss']
})
export class JsonCsvConvertorDemoComponent implements OnInit {

  csv = new FormControl('');
  json = [];
  activeTab: string = 'csv';

  constructor(
    private fileUtils: FileUtilsService,
    private route: ActivatedRoute
  ) { 
  }

  ngOnInit() {
    // this.exp();
  }

  exp() {
    // console.log("csv: ",this.csv.value);
    this.json = this.fileUtils.convertCsvToJson(this.csv.value, {headersPresent: true});
    console.log("json: ",this.json);
  }

}
