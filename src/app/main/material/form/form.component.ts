import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form = this.formBuilder.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    comment: [null, [Validators.required, Validators.maxLength(10)]]
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  getErrorMessage(controlName: string) {
    const formField = this.form.get(controlName);
    return (
      formField.hasError('required') ? 'You must enter a value' :
        formField.hasError('email') ? 'Not a valid email' :
          formField.hasError('maxlength') ? 'Not a valid length' : '');
  }

}
