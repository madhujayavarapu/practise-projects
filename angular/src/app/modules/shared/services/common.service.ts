import { isNullOrUndefined } from 'util';
import { PROJ_CONSTANTS } from './../../../constants/index';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private toastr: ToastrService
  ) { }

  showToastMessage(message:string,type:string,options?:any):void{
    let toastOptions:any = PROJ_CONSTANTS.TOASTR_CNST;
    if(!isNullOrUndefined(options)){
      toastOptions = {...toastOptions, ...options.options}
    }
    console.log("coming till here: ",toastOptions);
    this.toastr.clear();
    console.log("toastr: ",this.toastr);
    this.toastr[type](message,toastOptions.title,toastOptions)
  }

  convertObjectToArray(val: object, valProperty: string = 'value', keyProp: string = 'key'): Array<Object> {
    let keys = Object.keys(val);
    let result: Array<Object> = [];
    keys.forEach((key) => {
      let obj: Object = {};
      obj[keyProp] = key;
      obj[valProperty] = val[key];
      result.push(obj);
    })
    return result;
  }
}
