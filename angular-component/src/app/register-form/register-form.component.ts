import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  countryList = [
    {id: 1, name: "Viet Nam"},
    {id: 2, name: "Hoa Ky"},
    {id: 3, name: "Nhat Ban"},
  ]

  registerForm = new FormGroup({
    email: new FormControl(),
    password: new FormGroup({
        passwordSet: new FormControl(),
        passwordConfirm: new FormControl()
    }),
    country: new FormControl(),
    age: new FormControl(),
    gender: new FormControl(),
    phone: new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.registerForm.value);
  }
}
