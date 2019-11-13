import { Component, OnInit } from '@angular/core';
import { Requirement } from 'src/app/modules/shared';

@Component({
  selector: 'ng-lorem-ipsum-gen-docs',
  templateUrl: './lorem-ipsum-gen-docs.component.html',
  styleUrls: ['./lorem-ipsum-gen-docs.component.scss']
})
export class LoremIpsumGenDocsComponent implements OnInit {

  userStories: Requirement[] = [
    {
      completed: false,
      req: "User can type into an input field the number of paragraphs of lorem ipsum to be generated"
    },
    {
      completed: false,
      req: "Use can see the generated paragraphs of lorem ipsum and is able to copy them"
    },
    {
      completed: false,
      req: 'Number paragraphs should be less than 100'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
