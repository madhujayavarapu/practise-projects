import { isNullOrUndefined } from 'util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  operatorsPriority = {
  }

  constructor() { }

  buildQuery(query): string {
    return !isNullOrUndefined(query) && query.length > 0 ? 
      query.join('').replace(/minus/g,' - ').replace(/plus/g,' + ').replace(/mul/g,' * ').replace(/divide/g,' / ').replace(/mod/g, ' % ')
      : "";
  }

  evaluateExpression() {

  }
}
