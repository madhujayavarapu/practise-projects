import { JsonCsvConvertorDocsComponent } from './components/json-csv-convertor-docs/json-csv-convertor-docs.component';
import { JsonCsvConvertorDemoComponent } from './components/json-csv-convertor-demo/json-csv-convertor-demo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CsvToJsonComponent } from './components/csv-to-json/csv-to-json.component';
import { JsonToCsvComponent } from './components/json-to-csv/json-to-csv.component';
import { ExcelConvertorComponent } from './components/excel-convertor/excel-convertor.component';

const routes: Routes = [
  {path: '', redirectTo: 'demo', pathMatch: 'full'},
  { 
    path: 'demo', 
    component: JsonCsvConvertorDemoComponent,
    children: [
      { path: '', redirectTo: 'csv', pathMatch: 'full' },
      { path: 'csv', component: CsvToJsonComponent },
      { path: 'json', component: JsonToCsvComponent },
      { path: 'excel', component: ExcelConvertorComponent }
    ]
  },
  {path: 'docs', component: JsonCsvConvertorDocsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsonCsvConvertorRoutingModule { }
