import { DATE_CONSTANT } from './../constant/date.cnst';
import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { IDateOptions } from '../models/date-options';

@Injectable({
  providedIn: 'root'
})
export class DateTimeUtilsService {

  constructor() { }

  getDiffFromCurrentDate(date: Date, options?:IDateOptions) {
    let formattedOptions = this.getFormattedDateOptions(options);
    let currentDate = new Date();
    return this.getDiffBetweenDates(date, currentDate, formattedOptions);
  }

  getDiffBetweenDates(date1: Date, date2: Date, options?:IDateOptions): number | string{
    // console.groupCollapsed(`[DateTimeUtils]: [DiffBetweenDates] getting diff between ${date1} and ${date2}.`);
    if(!isNullOrUndefined(date1) && !isNullOrUndefined(date2)) {
      let diffTime = date1.getTime() - date2.getTime(); 
      // console.groupCollapsed(`Diff in Time: ${diffTime}`);
      // console.groupEnd();

      return this.converMilliSeconds(diffTime, options);
    }else {
      console.error("Expected 2 arguments");
      console.groupEnd();
      return 0;
    }
  }

  /**
   * Convert Milli Seconds to other units.
   * @param ms - Milliseconds
   * @param options - Date Options {returnType: '', ceil, floor...};
   */
  converMilliSeconds(ms: number, options?: IDateOptions): number | string {
    let returnType = isNullOrUndefined(options) || isNullOrUndefined(options.returnType) ? 'd' : options.returnType;
    let milliSecMap = DATE_CONSTANT.MILLI_SECS_MAP;
    // console.groupCollapsed(`[DateTimeUtils]: [ConvertMilliSeconds] Convert milliseconds ${ms} to ${returnType}`);
    // console.log(`Milliseconds Map: ${milliSecMap}`);
    if(!isNullOrUndefined(ms)) {
      if(!isNullOrUndefined(milliSecMap) && !isNullOrUndefined(milliSecMap[returnType])) {
        if(!!options && !!options.ceil) {
          return Math.ceil(ms / milliSecMap[returnType]);
        }else if(!!options && !!options.floor) {
          return Math.floor(ms/milliSecMap[returnType]);
        }else if(!!options && options.exact){
          let rms = ms;
          let d = Math.floor(ms / milliSecMap['d']);
          rms = (rms % milliSecMap['d']);
          let h = Math.floor(rms / milliSecMap['h']);
          rms = rms % milliSecMap['h'];
          let m = Math.floor(rms / milliSecMap['m']);
          rms = rms % milliSecMap['m'];
          let s = Math.floor(rms / milliSecMap['s']);

          return d+':'+h+':'+m+':'+s;
        }else {
          return ms / milliSecMap[returnType];
        }
      }else {
        console.error(`Conversion not found for ${returnType}`);
        return ms;
      }
    }else {
      console.error("Expected 1 argument");
      return 0;
    }
  }

  convertSecondsToMinutes(seconds: number) {
  }

  convertMinutesTo() {
  }
  
  convertDays(days: number, type: string) {
  }

  convertWeeks(weeks: number, type: string) {
  }

  convertMonths(months: number, type: string) {
  }

  isValidDate(d: any) {
    return !isNaN(d) && d instanceof Date;
  }

  /**
   * 
   * @param date - Date to be formatted
   * @param format - String Format of expected Date format.
   */
  formatDate(date: Date, format: string) {
    
  }

  addDays(date: Date, days: number): Date | null{
    if(!isNullOrUndefined(date) && !isNullOrUndefined(days)) {
      return new Date(date.setDate(date.getDate() + days));
    }else {
      console.error("[DateUtils]: [AddDays] expected two arguments found 0");
      return null;
    }
  }

  addMinutes(date: Date, minutes: number): Date | null {
    if(!isNullOrUndefined(date) && !isNullOrUndefined(minutes)) {
      return new Date(date.setMinutes(date.getMinutes() + minutes));
    }else {
      console.error("[DateUtils]: [AddMinutes] expected two arguments found 0");
      return null;
    }
  }

  addSeconds(date: Date, seconds: number): Date|null {
    if(!isNullOrUndefined(date) && !isNullOrUndefined(seconds)) {
      return new Date(date.setSeconds(date.getSeconds() + seconds));
    }else {
      console.error("[DateUtils]: [AddSeconds] expected two arguments found 0");
      return null;
    }
  }

  getWeekDaysInRange(startDate: Date, endDate: Date, weekDays?: string[]) {
    
  }

  private getFormattedDateOptions(options?: IDateOptions) {
    let formattedOptions: IDateOptions = {
      floor: false,
      ceil: false,
      round: true,
      returnType: 'd'
    };
    if(!isNullOrUndefined(options))
      formattedOptions = {...formattedOptions, ...options};
    return formattedOptions;
  }
}
