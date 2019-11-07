import { Component, OnInit } from '@angular/core';
import { Requirement } from 'src/app/modules/shared';

@Component({
  selector: 'ng-dcv-docs',
  templateUrl: './dcv-docs.component.html',
  styleUrls: ['./dcv-docs.component.scss']
})
export class DcvDocsComponent implements OnInit {

  userStories: Requirement[] = [
    {
      completed: false,
      req: "User can see three two boxes to be used to enter a User ID and Password along with 'Cancel' and 'Login' buttons underneath them. The default background color of the text boxes is white."
    },
    {
      completed: false,
      req: "User can enter a user id and password into the text boxes."
    },
    {
      completed: false,
      req: "User can click the 'Login' button to validate the user id and password."
    },
    {
      completed: false,
      req: " User can see a warning message if one or both of the text boxes contains spaces and the background color of the empty text box will change to light yellow."
    },
    {
      completed: false,
      req: "User can see a warning message if the user id doesn't match 'testuser' and the background color of the text box will change to light red."
    },
    {
      completed: false,
      req: "User can see a warning message if the password doesn't match 'mypassword' and the background color of the text box will change to light red."
    },
    {
      completed: false,
      req: "User can click the 'Cancel' button to clear the text boxes and reset their background colors to white."
    }
  ]

  bonusFeatures: Requirement[] = [
    {
      completed: false,
      req: "User can see the color of the text box border change when an error is detected"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
