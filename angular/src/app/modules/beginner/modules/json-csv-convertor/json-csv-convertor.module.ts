import { ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from 'src/app/modules/utils';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonCsvConvertorRoutingModule } from './json-csv-convertor-routing.module';
import { JsonToCsvComponent } from './components/json-to-csv/json-to-csv.component';
import { CsvToJsonComponent } from './components/csv-to-json/csv-to-json.component';
import { JsonCsvConvertorDemoComponent } from './components/json-csv-convertor-demo/json-csv-convertor-demo.component';
import { JsonCsvConvertorDocsComponent } from './components/json-csv-convertor-docs/json-csv-convertor-docs.component';
import { NgFormsModule } from 'src/app/modules/ng-forms';

@NgModule({
  declarations: [JsonToCsvComponent, CsvToJsonComponent, JsonCsvConvertorDemoComponent, JsonCsvConvertorDocsComponent],
  imports: [
    CommonModule,
    JsonCsvConvertorRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    UtilsModule,
    NgFormsModule
  ]
})
export class JsonCsvConvertorModule { }
