import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-brp-demo',
  templateUrl: './brp-demo.component.html',
  styleUrls: ['./brp-demo.component.scss']
})
export class BrpDemoComponent implements OnInit {

  result = {}

  topLeft: number = 75;
  topRight: number = 75;
  bottomLeft: number = 72;
  bottomRight: number = 76;
  width: number = 400;
  height: number = 300;

  constructor() { }

  ngOnInit() {
    this.result = {
      "border-radius": this.topLeft+"% "+this.topRight+"% "+this.bottomRight+"% "+this.bottomLeft+"%",
      "-webkit-border-radius": this.topLeft+"% "+this.topRight+"% "+this.bottomRight+"% "+this.bottomLeft+"%",
      "-moz-border-radius": this.topLeft+"% "+this.topRight+"% "+this.bottomRight+"% "+this.bottomLeft+"%",
      "height": this.width+"px",
      "width": this.height+"px"
    }
  }

  valueChanged(key, val) {
    if(key == 'width' || key == 'height') {
      this.result[key] = val+'px';
    }else if(key == 'border-radius') {
      this.result['border-radius'] =  this.topLeft+"% "+this.topRight+"% "+this.bottomRight+"% "+this.bottomLeft+"%";
      this.result['-webkit-border-radius'] = this.topLeft+"% "+this.topRight+"% "+this.bottomRight+"% "+this.bottomLeft+"%";
      this.result['-moz-border-radius'] = this.topLeft+"% "+this.topRight+"% "+this.bottomRight+"% "+this.bottomLeft+"%";
    }else {
      console.warn(key+" is not present in result object");
    }
  }

  // Clipboard "copy" errors.
  public logError( error: Error ) : void {
    console.group( "Clipboard Error" );
    console.error( error );
    console.groupEnd();
  }


  // Clipboard "copy" successes.
  public logSuccess( value: string ) : void {
    console.group( "Clipboard Success" );
    console.log( value );
    console.groupEnd();
  }
}
