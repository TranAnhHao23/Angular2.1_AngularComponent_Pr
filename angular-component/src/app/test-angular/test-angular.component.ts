import {Component, OnInit} from '@angular/core';
import {Student} from "./student";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-test-angular',
  templateUrl: './test-angular.component.html',
  styleUrls: ['./test-angular.component.css']
})
export class TestAngularComponent implements OnInit {
  name = "Hello em";

  // student: Student = {
  //   id: 1,
  //   name: "Hào",
  //   mark: 9,
  //   image: 'https://www.w3schools.com/howto/img_avatar.png'
  // }

  students: Student[] = [
    {id: 1, name: "A", mark: 7, image: "https://www.w3schools.com/howto/img_avatar.png"},
    {id: 2, name: "B", mark: 8, image: "https://www.w3schools.com/howto/img_avatar.png"},
    {id: 3, name: "C", mark: 9, image: "https://www.w3schools.com/howto/img_avatar.png"},
    {id: 4, name: "D", mark: 6, image: "https://www.w3schools.com/howto/img_avatar.png"},
  ]

  arr = [["hello","hi"],["Boujour", "Camtamisa"]]

  num = 0

  countryList = [
    {id: "1", name: "VietNam"},
    {id: "2", name: "USA"},
    {id: "3", name: "Japan"},
  ]

  contactForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    country: new FormControl()
  });


  constructor() { }

  ngOnInit(): void {
  }


  resetValue() {
    this.name="";
  }

  changeMark($event: Event) {
    // @ts-ignore
    console.log($event.target.value)
    // @ts-ignore
    this.student.mark = $event.target.value;
  }

  showMe: boolean | undefined;

  submit() {
    console.log(this.contactForm.value)

  }
}
