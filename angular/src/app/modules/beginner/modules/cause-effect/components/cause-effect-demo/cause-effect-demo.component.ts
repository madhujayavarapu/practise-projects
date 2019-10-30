import { Component, OnInit } from '@angular/core';
import { IPerson } from '../../models/IPerson';

@Component({
  selector: 'ng-cause-effect-demo',
  templateUrl: './cause-effect-demo.component.html',
  styleUrls: ['./cause-effect-demo.component.scss']
})
export class CauseEffectDemoComponent implements OnInit {

  persons: IPerson[] = [];
  personDetails: IPerson = null;

  constructor() { }

  ngOnInit() {
    this.fetchPersons();
  }

  // Change to mock service.
  fetchPersons() {
    var names = ['Madhu', 'Satish', 'Shyam', 'Surya', 'Aravind', 'Shahid', 'Prashanth', 'Nagababu', 'Sai babu', 'Tataji', 'Ramesh', 'Suresh', 'Mahesh', 'Rajendra', 'Sagar']
    var address = ['Hyderabad', 'Vizag', 'Bangalore', 'Delhi'];
    for(let i=0;i<names.length; i++) {
      let person: IPerson = {
        name: names[i],
        address: address[Math.ceil(Math.random()*3)],
        birthday: (Math.ceil(Math.random()*10)+ 1990) + "/"+Math.ceil(Math.random()*12)+"/"+Math.ceil(Math.random()*28),
        surname: "",
        phoneNumber: Number(9+""+Math.ceil(Math.random() * 999990183))
      }
      this.persons.push(person);
    }
  }

  showPersonDetails(person: IPerson) {
    this.personDetails = person;
  }

}
