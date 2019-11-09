import { isNullOrUndefined } from 'util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-color-cycle-demo',
  templateUrl: './color-cycle-demo.component.html',
  styleUrls: ['./color-cycle-demo.component.scss']
})
export class ColorCycleDemoComponent implements OnInit {

  delay: number = 80; //ms

  selectedColor;
  scssColorClass: string = 'purple'
  hue: number = 0;
  brightness:number = 50;
  saturation: number = 100;
  state: boolean = false;
  hslInterval: number = 1;
  hslDelay: number = 80; //ms

  incrementHue: boolean = true;
  incrementSat: boolean = false;
  incrementBrightness: boolean = false;

  red: number = 150;
  blue: number = 10;
  green: number = 50;
  startedInterval: boolean = false;
  interval: number = 1;

  incrementRed: boolean = true;
  incrementGreen: boolean = false;
  incrementBlue: boolean = false;

  colorChanger;
  hslChanger;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.stopColorChange();
    this.stopHslChange();
  }

  stopColorChange() {
    this.startedInterval = false;
    clearInterval(this.colorChanger);
  }

  startColorChange() {
    this.startedInterval = true;
    let red = this.red;
    let green = this.green;
    let blue = this.blue;

    this.colorChanger =  setInterval(() => {
      if(this.incrementRed)
        red =   red >= 255 ? 0 : red + this.interval;
      if(this.incrementBlue)
        blue =   blue >= 255 ? 0 : blue + this.interval;
      if(this.incrementGreen)
        green =   green >= 255 ? 0 : green + this.interval;
      document.getElementById('rgb-div').style.background = "rgb("+red+","+blue+","+green+")";
    }, this.delay);
  }

  stopHslChange() {
    this.state = false;
    clearInterval(this.hslChanger);
  }

  startHslChange() {
    this.state = true;
    let hue = this.hue;
    let brightness = this.brightness;
    let saturation = this.saturation;

    this.hslChanger =  setInterval(() => {
      if(this.incrementHue)
        hue =   hue >= 360 ? 0 : hue + this.hslInterval;
      document.getElementById('hsl-div').style.background = "hsl("+hue+","+saturation+"%,"+brightness+"%)";
    }, this.hslDelay);
  }

  changeScssColorClass(val) {
    this.scssColorClass = val;
  }

}
