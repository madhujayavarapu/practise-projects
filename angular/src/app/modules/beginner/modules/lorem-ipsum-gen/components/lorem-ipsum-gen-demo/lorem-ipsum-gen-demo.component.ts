import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoremIpsum, loremIpsum } from 'lorem-ipsum';

@Component({
  selector: 'ng-lorem-ipsum-gen-demo',
  templateUrl: './lorem-ipsum-gen-demo.component.html',
  styleUrls: ['./lorem-ipsum-gen-demo.component.scss']
})
export class LoremIpsumGenDemoComponent implements OnInit {

  loremForm: FormGroup = new FormGroup({
    paragraphs: new FormControl(2, [Validators.required, Validators.min(0), Validators.max(100)]),
    sentences: new FormControl([2, 50]),
    words: new FormControl([2, 50]),
    tooltips: new FormControl(false)
  })
  // startRange = [2, 10];
  paragraphs: Array<String> = [""];
  rangeConfig: any = {
    behaviour: 'tap-drag',
    connect: true,
    margin: 1,
    start: [2, 10],
    range: {
      min: 0,
      max: 100
    },
    tooltips: true,
    pipe: {
      mode: 'count',
      values: 6,
      density: 2,
      stepped: true
    }
  }

  constructor() { }

  ngOnInit() {
  }

  generate() {
    let value = this.loremForm.value;
    console.log(value);
    if(this.loremForm.valid) {
      const lorem = new LoremIpsum({
        sentencesPerParagraph: {
          max: value.sentences[1],
          min: value.sentences[0]
        },
        wordsPerSentence: {
          max: value.words[1],
          min: value.words[0]
        }
      });
      this.paragraphs = lorem.generateParagraphs(value.paragraphs).split('\n');
    }else {
      console.log("some error");
    }
  }

  toggleTooltips() {

  }

}
