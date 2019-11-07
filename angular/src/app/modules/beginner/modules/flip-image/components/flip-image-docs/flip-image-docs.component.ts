import { Component, OnInit } from '@angular/core';
import { Requirement } from 'src/app/modules/shared';

@Component({
  selector: 'ng-flip-image-docs',
  templateUrl: './flip-image-docs.component.html',
  styleUrls: ['./flip-image-docs.component.scss']
})
export class FlipImageDocsComponent implements OnInit {

  userStories: Requirement[] = [
    {
      completed: true,
      req: "User can see a pane containing a single image repeated in a 2x2 matrix."
    },
    {
      completed: true,
      req: "User can flip any one of the images vertically or horizontally using a set of up, down, left, and right arrows next to the image."
    }
  ]

  bonusFeatures: Requirement[] = [
    {
      completed: true,
      req: "User can change the default image by entering the URL of a different image in an input field."
    },
    {
      completed: true,
      req: "User can display the new image by clicking a 'Display' button next to the input field."
    },
    {
      completed: true,
      req: "User can see an error message if the new images URL is not found."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
