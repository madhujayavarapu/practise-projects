import { CalculatorService } from './../../services/calculator.service';
import { CommonService } from './../../../../../shared/services/common.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'ng-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, OnDestroy {

  result: number = 0;
  public operators = ['plus', 'minus', 'divide', 'mod', 'mul'];

  public operatorsPriority = {
    'plus': 1,
    'minus': 1,
    'divide': 2,
    'mul': 2,
    'mod': 2
  };
  public operandsArray = [];
  public operatorsArray = [];
  public operatorsOrder = [];
  public query = [];
  public queryResult;

  public history: any[];

  constructor(
    private commonSrv: CommonService,
    private calcSrv: CalculatorService
  ) { }

  ngOnInit() {
    this.history = [];
    this.resetAll();
  }

  ngOnDestroy(): void {
    this.history = [];
    this.resetAll();
  }

  resetAll(){
    this.operatorsOrder = [];
    this.operandsArray = [];
    this.query = [];
    this.queryResult = null;
  }

  addToQuey(event) {
    /* 
      1. if query is empty then only numbers are allowed
      2. if query is not empty both numbers and operators are allowed.
      3. if query is not empty and last entered val is operator then don't allow duplicates. if it is different operator then override the last one.
    */
    if(!isNullOrUndefined(event)){
      let eventType = this.getTypeofVal(event); 

      // Check if it is the first event after result or not.
      if(!isNullOrUndefined(this.queryResult)) {
        let prevResult = this.queryResult;
        let prevQuery = {
          query: this.calcSrv.buildQuery(this.query),
          result: prevResult
        }
        this.history.push(prevQuery);
        if(eventType.toUpperCase() == 'OPERATOR' && prevResult > 0 && isFinite(prevResult)){
          this.resetAll();
          this.addToQuey(prevResult);
        }else {
          this.resetAll();
        }
      }
      let queryLength = this.query.length;

      if(queryLength <= 0 && !!eventType && eventType.toUpperCase() == 'OPERAND') {
          this.query.push(event);
          // console.error("Selecting operator without operand is invalid operation");
      }else if(queryLength > 0 && !!eventType) {
        let preVal = this.query[queryLength - 1];
        let preValType = this.getTypeofVal(preVal);
        
        if(preValType.toUpperCase() == "OPERAND" && eventType.toUpperCase() == 'OPERAND') {
          let finalVal = preVal.toString() + event;
          if(!isNaN(parseInt(finalVal))) {
            this.query.pop();
            this.query.push(parseInt(finalVal));
          }else {
            this.commonSrv.showToastMessage("Not a Number", "error", null);
          }
        }else if(preValType.toUpperCase() == 'OPERATOR' && eventType.toUpperCase() == "OPERATOR") {
          if(preVal != event) {
            this.query.pop();
            this.query.push(event);
          }else {
            this.commonSrv.showToastMessage("Ignore duplicate operators", "error", null);
          }
        }else {
          this.query.push(eventType == 'OPERAND' ? parseInt(event) : event);
        }

      }else if(queryLength <= 0 && !!eventType && eventType.toUpperCase() == 'OPERATOR') {
        this.commonSrv.showToastMessage("Selecting operator without operand is invalid operation", "error", null);
      }else {
        this.commonSrv.showToastMessage("Value should be either OPERATOR or OPERAND", "error", null);
      }
    }else {
      // console.error("Value should not be null or undefined");
      this.commonSrv.showToastMessage("Value should not be null or undefined", "error", null);
    }

    // var val = this.query[this.query.length - 1];
    // if(!!this.queryResult){
    //   if(this.operators.indexOf(event) !== -1){
    //     let prevResult = this.queryResult;
    //     this.resetAll();
    //     this.addToQuey(prevResult);
    //   }else {
    //     this.resetAll();
    //   }
    // }
    // if(this.operators.indexOf(event) == -1 && this.query.length >= 1 && this.operators.indexOf(val) == -1){
    //   this.query.pop();
    //   let result = val.toString() + event;
    //   result = parseInt(result);
    //   this.query.push(result);
    // } else{
    //   this.query.push(event);
    // }
  }

  getTypeofVal(val) {
    return !isNullOrUndefined(val) ? this.operators.indexOf(val) == -1 ? "OPERAND" : 'OPERATOR' : null;
  }

  removeLastOne(){
    if(isNullOrUndefined(this.queryResult)) {
      let lastEntered = this.query[this.query.length-1];
      if(this.operators.indexOf(lastEntered) != -1 || lastEntered == 0){
        this.query.pop();
      }else{
        lastEntered = Math.floor(parseInt(lastEntered)/10);
        this.query.pop();
        if(!!lastEntered)
          this.query.push(lastEntered);
      }
    }
  }

  removeQuery() {
    if(this.query.length == 0)
      this.history = [];
    this.resetAll();
  }

  splitQuery(){
    this.query.forEach(ele => {
      if(this.operators.indexOf(ele) == -1){
        this.operandsArray.push(ele);
      } else{
        this.pushOperator(ele);
      }
    });
  }

  performLastOperation(){
    let num1 = this.operandsArray[this.operandsArray.length - 1 ];
    let num2 = this.operandsArray[this.operandsArray.length - 2 ];
    let result = 0;
    if(!isNullOrUndefined(num1) && !isNullOrUndefined(num2)){
      result = this.getOperandResult(num1, num2, this.operatorsOrder[this.operatorsOrder.length - 1]);
    }
    this.operandsArray.pop();
    this.operandsArray.pop();

    this.operandsArray.push(result);
  }

  getOperandResult(num1: number, num2: number, operand: string): number{
    switch (operand) {
      case 'plus':
        return num1 + num2;
        break;
      case 'minus':
        return num2 - num1;
        break;
      case 'divide':
        return num2 / num1;
        break;
      case 'mul':
        return num1 * num2;
        break;
      case 'mod':
        return num2 % num1;
        break;
    }
  }

  pushOperator(operator){
    if(this.operatorsOrder.length < 1){
      this.operatorsOrder.push(operator);
    }else {
      let lastOperator = this.operatorsOrder[this.operatorsOrder.length - 1];
      if (this.operatorsPriority[lastOperator] <= this.operatorsPriority[operator]) {
        this.operatorsOrder.push(operator);
      } else {
        this.performLastOperation();
        this.operatorsOrder.pop();

        this.pushOperator(operator);
      }
    }
  }

  evaluateFinalExpression(){
    let len = this.operatorsOrder.length;
    for(let i=0;i<len;i++){
      this.performLastOperation();
      this.operatorsOrder.pop();
    }
    this.queryResult = this.operandsArray[0];
    this.operandsArray = [];
  }

  validateQuery() {
    console.log('vaidating query: ',this.query)
    this.splitQuery();
    this.evaluateFinalExpression();
  }

  get isQueryResult() {
    return !isNullOrUndefined(this.queryResult);
  }

}
